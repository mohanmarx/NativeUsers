import * as React from "react"
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    mt40: {
        marginTop: 40
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    shadow: {
        shadowOffset: { height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        shadowColor: '#D7D7D7'
    },
    card: {
        backgroundColor: "#fff",
        width: "100%",
        marginVertical: 15,
        borderRadius: 10,
        padding: 18,
        flexShrink: 1,
        position: "relative"
    },
    cardAbs: {
        marginTop: 120,
        paddingTop: 80
    },
    cardImg: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    cardImgLg: {
        height: 160,
        width: 160,
        borderRadius: 100,
        alignSelf: "center",
        position: "absolute",
        top: -80,
    },
    colContent: {
        fontSize: 13,
        lineHeight: 28,
        textTransform: "capitalize"
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 5,
    },
})