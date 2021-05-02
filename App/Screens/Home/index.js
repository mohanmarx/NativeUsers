import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

//Styles
import { Styles } from '../../Theme/Styles'
import { getUsers, getSingleUser } from '../../redux/actions/userActions'

export class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            loading: false
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        var data = await this.props.getUsers(10, this.state.page)
        if (data) { this.setState({ loading: false }) }
    }

    handleNavigate = (user) => {
        const { navigation } = this.props
        this.props.getSingleUser(user.item)
        navigation.navigate("UserDetails")
    }

    render() {
        const { users, user } = this.props
        const { loading, page } = this.state
        return (
            <View style={[{ flex: 1, paddingHorizontal: 15 }]}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={users}
                    keyExtractor={item => item.key}
                    renderItem={user => (
                        <TouchableOpacity style={[Styles.card, Styles.shadow,]} onPress={() => this.handleNavigate(user)}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={Styles.cardImg}
                                    source={{ uri: user.item.picture.thumbnail }}
                                />
                                <View>
                                    <Text style={Styles.colContent}>{`${user.item.name.first} ${user.item.name.last}`}</Text>
                                    <Text style={Styles.colContent}>{user.item.email}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    onEndReached={() => {
                        this.setState({ page: page + 1, loading: true }, () => {
                            this.getData()
                        })
                    }}
                    onEndReachedThreshold={.5}
                    numColumns={1}
                    initialNumToRender={7}
                />
                {loading && <ActivityIndicator size="large" color="blue" />}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.userState.users,
    user: state.userState.user

})

export default connect(mapStateToProps, { getUsers, getSingleUser })(Home)
