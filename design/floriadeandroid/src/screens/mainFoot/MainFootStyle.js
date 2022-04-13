import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  f1: { flex: 1 },
  container: {
    position: 'relative',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 25,
    // backgroundColor: '#C8F1C6',
    elevation: 0,
    height: 60,
    // opacity: .5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'space-between',
    paddingTop: 7,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 10,
    shadowRadius: 7.5,
    elevation: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  footIconView: {
    width: 70,
    height: 70,
    backgroundColor: '#5D8964',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: -25,
  },
  icon: {
    width: 45,
    height: 45,
  },
  // mainFootNavigator:
  // {
  //   position: 'absolute',
  //   bottom: 25,
  //   left: 20,
  //   right: 20,
  //   elevation: 0,
  //   backgroundColor: '#ffff',
  //   borderRadius: 15,
  //   height: 90
  // },

  infoButton: {
    height: 50,
    width: 50,
    paddingTop: '1.5%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ffffff00',
    top: 15,
    right: '40%',
    opacity: 0.7,
    // fontFamily: ""
    // paddingTop: 20,
    // paddingBottom: 20,
    // marginTop: 10,
    // marginBottom: 10,
  },

  footButton: {
    height: 50,
    width: 50,
    paddingTop: '5%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ffffff00',
    top: 15,
    left: '40%',
    opacity: 0.7,
    marginBottom: 10,
  },

  wrap: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 40,
    // alignItems: 'center'
    alignItems: 'center',
    top: 15,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    // flexDirection: "row"
  },
  infoButton1: {
    height: 35,
    width: 35,
    // paddingTop: "25%",
    // alignItems: "center",
    // backgroundColor: 'white',
    // borderRadius: 100,
    // borderWidth: 1,
    // borderColor: '#ffffff00',
    // top: 15,
    // right: 15,
    // opacity: 0.7,
  },
  modalViewInfo: {
    margin: 12,
    // margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 12,
    // margin: 10,
    width: '100%',
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2
  // },
  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  // },
  // textStyle: {
  //   color: "white",
  //   fontWeight: "bold",
  //   textAlign: "center"
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // },

  textHeader: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '80%',
    paddingBottom: 25,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingLeft: 30,
    paddingRight: 30,
    position: "absolute",
    bottom: 50
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#4aa447',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginTop: 25,
    // marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    // paddingTop: 25
  },
  questionTitle: {
    // marginBottom: 15,
    margin: 25,
    marginTop: 35,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    // paddingTop: 25
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
  },
  buttonAlignment: {
    marginTop: 100,
  },
  slider: {
    width: 300,
    marginTop: 150,
  },
  answer: {
    margin: 20,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  answerExplanation: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontSize: 13,
    color: 'black',
    // fontWeight:'bold'
  },

  questionSubtitle: {
    // marginBottom: 15,
    // margin: 25,
    // marginTop: 35,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    // paddingTop: 25
  },

  //MODAL INFORMATION FOR NEW USERS ON MAIN FOOT
  modalInfoNew: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '60%',

  },
  mapInfoNewImg: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15
  },
  titleModalInfoNew: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5
  },
  contentModalInfoNew: {
    color: 'black',
    marginLeft: 15,
    marginRight: 15
  },
  buttonModalInfoNew: {
    backgroundColor: 'green',
    borderRadius: 20,
    marginBottom: 10

  }
});
