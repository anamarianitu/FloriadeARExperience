import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        direction: 'flex',
        flexDirection: 'row',
    },
    mainContainer:
    {
        backgroundColor: 'white',
        height: '100%'
    },
    imgLeft: {
        height: 450,
        flex: 1,
        width: '100%',
        borderBottomLeftRadius: 110,
        marginRight: 10
    },
    img: {
        flex: 1,
        height: 150,
        width: 150,
    },
    imgFloriadeContainer: {
        width: '100%',
        height: 130,
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgFloriade: {
        width: '80%',
        height: 130,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#4aa447',
        color: 'white',
        width: '40%',
        borderRadius: 40,
        position: 'absolute',
        bottom: 40,
        right: '30%',
        left: '30%',

    },
    text: {
        color: 'white',
        fontSize: 25,
    },
});