import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: "80%",
        paddingBottom: 25
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        paddingLeft: 30,
        paddingRight: 30,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalTitle: {
        marginTop: 15,
        // marginBottom: 15,
        textAlign: "center",
        fontSize: 25,
        color: "black",
        paddingTop: 25
      },
      modalText: {
        // marginBottom: 15,
        textAlign: "center"
      }
});
