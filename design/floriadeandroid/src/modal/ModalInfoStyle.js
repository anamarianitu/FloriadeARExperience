import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('screen');
const itemHeight = 0.7 * height

export const style = StyleSheet.create({
    mainContainer: {
        paddingTop: 20,
        borderRadius: 25,
        position: 'absolute',
        bottom: 10,
        width: "94%",
        right: '3%',
        left: '3%',
        display: 'flex',
        flexDirection: 'column'
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    footImage: {
        width: 50,
        height: 50,
    },
    textContainer: {
        width: '60%'
    },
    title: {
        fontWeight: 'bold',
        color: 'black'
    },
    mapButton: {
        height: 50,
        width: 50,
        padding: "2%",
        alignItems: "center",
        backgroundColor: '#4aa447',
        borderRadius: 15,
        border: 'none',
        elevation: 7,
    },
    mapButtonImage: {
        height: 40,
        width: 40,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f6f6f6',
        borderRadius: 25,
        padding: 10

    },
    mainInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    infoHeaderProps: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    arrowUpContainer: {
        marginTop: 7,
        marginRight: 7
    },
    arrowButton: {
        width: 25,
        height: 25
    },
    bottomContainerOpen: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f6f6f6',
        borderRadius: 25,
        padding: 10,
        height: itemHeight,
    },
    bottomContainerViewOpen: {
        display: 'flex',
        flexDirection: 'row'
    },
    contentContainerOpen: {
        flex: 10,
        padding: 15
    },
    arrowDownContainer: {
        flex: 1
    },
    titleOpen: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        paddingBottom: 5
    },
    contentOpen: {
        paddingBottom: 10

    },
    earthIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15
    },
    earthIcon: {
        width: 55,
        height: 55,
        resizeMode: 'contain'
    },
    earthIconHalf: {
        width: 27.5,
        height: 55,
        resizeMode: 'contain'
    }
});