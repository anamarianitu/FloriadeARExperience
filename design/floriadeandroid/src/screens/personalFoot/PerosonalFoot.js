import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text, Pressable, Modal, Alert} from 'react-native'
import React, { useState } from 'react'
// import { Text, Button } from 'react-native-paper';
import { styles } from '../personalFoot/PersonalFootStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import english from '../../languages/english'
import dutch from '../../languages/dutch';
import german from '../../languages/german';

const PersonalFoot = ({ navigation }) => {
  const [language, setLanguage] = React.useState("");
  try {
      AsyncStorage.getItem('@lang',(err,item) => {
          if (item === "dutch") {
              setLanguage(dutch)
          }
          else if (item === "german") {
            setLanguage(german)
          }
          else {
            setLanguage(english)
          }
      });
  } catch (error) {
      console.log("Error retrieving data" + error);
  }

  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="pop"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Personal Carbon Footprint</Text>
            <Text style={styles.modalText}>Calculate your personal carbon footprint size</Text>
            <Image source={require("../../img/personalFoot.png")} style={{ width: "75%", height: "75%", resizeMode: "contain" }} />
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}

            <Pressable
              style={[styles.button, styles.buttonClose]}
            >
              <Text style={styles.textStyle}>Start</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default PersonalFoot;
