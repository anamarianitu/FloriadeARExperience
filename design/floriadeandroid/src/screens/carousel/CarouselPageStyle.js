import { StyleSheet } from "react-native";

export const carouselStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle:
    {
        fontSize: 27,
        color: '#000',
        alignItems: 'center',
        fontWeight: '400'
    },
    cardContent:
    {
        margin: 20,
        fontSize: 16,
        color: '#000',
    },
    cardButton:
    {
        width: '100%',
        height: 40,
        backgroundColor: '#146356',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginTop: 20
    },
    iconPaginator: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 6,
        borderColor: 'white',
        position: 'absolute',
        bottom: -30,
        right: 60,
    },
    backIconContainer: {
        alignSelf: 'flex-start',
        marginTop: 7,
        marginLeft: 7,
    },
    backIcon: {
        width: 28,
        height: 28,
    },
    arrowIcon:
    {
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 20,
        paddingTop: 12,
        paddingBottom: 12
    },
    nextButtonContainer:
    {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 60,
        height: 60,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 15,
    },
    view3Foot: {
        marginTop: 15,
        marginBottom: 5
    },
    viewRow3Foot: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconRow: {
        width: 30,
        height: 30
    },
    exclamation:{
       width: 15,
       height: 15,
       marginRight: 3
    },
    dataInfo_3: {
        fontSize: 11,
    },
    viewInfo3: {
        position: 'absolute',
        bottom: 45,
        left: 0,
    }
})