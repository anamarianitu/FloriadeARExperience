import { StyleSheet } from "react-native";

export const languageStyles = StyleSheet.create({
    languageContainer: {
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flag:
    {
        width: 40,
        height: 40,
        marginRight: 10
    },
    languageLine:
    {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 12,
        width: 180,
        paddingLeft: 10,
    },
    languageName:
    {
        fontSize: 24,
        fontWeight: '400',
        color: 'black'
    }
});