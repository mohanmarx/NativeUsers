import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'
import { Styles } from '../../Theme/Styles'

export class UserDetails extends Component {

    render() {
        const { user } = this.props
        return (
            <ScrollView>
                <View style={[Styles.container, { paddingHorizontal: 15 }]}>
                    <View style={[Styles.card, Styles.cardAbs, Styles.shadow]}>
                        <Image style={Styles.cardImgLg} source={{ uri: user.picture.medium }} />
                        <Text style={Styles.headerText}>Account Details</Text>
                        <View style={{ flexDirection: 'column', alignItems: "center" }}>
                            <Text style={Styles.colContent}>{`${user.name.first} ${user.name.last}`}</Text>
                            <Text style={Styles.colContent}>{user.login.username}</Text>
                            <Text style={Styles.colContent}>{user.email}</Text>
                        </View>
                        <Text style={Styles.headerText}>Address</Text>
                        <View style={{ flexDirection: 'column', alignItems: "center" }}>
                            <Text style={Styles.colContent}>City: {user.location.city}</Text>
                            <Text style={Styles.colContent}>Country: {user.location.country}</Text>
                            <Text style={Styles.colContent}>State: {user.location.state}</Text>
                        </View>
                        <Text style={Styles.headerText}>Personal Details</Text>
                        <View style={{ flexDirection: 'column', alignItems: "center" }}>
                            <Text style={Styles.colContent}>Age: {user.dob.age}</Text>
                            <Text style={Styles.colContent}>Phone: {user.phone}</Text>
                            <Text style={Styles.colContent}>Mobile: {user.cell}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userState.user
})

export default connect(mapStateToProps)(UserDetails)