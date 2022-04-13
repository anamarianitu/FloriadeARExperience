import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./HomeStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {

    const modalShow = async value => {
        try {
          await AsyncStorage.setItem('@modal', value);
          console.log("setam " + value);
        } catch (e) {
          // saving error
        }
      };
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.container, {
                flexDirection: 'row'
            }]}>
                <Image source={require('../../img/floriade-left.jpg')} style={styles.imgLeft}></Image>
                <View style={[styles.container, {
                    flexDirection: 'column'
                }]}>
                    <Image source={require('../../img/floriade-right1.jpg')} style={styles.img}></Image>
                    <Image source={require('../../img/floriade-right2.jpg')} style={[styles.img, { marginTop: 10 }]}></Image>
                </View>
            </View>
            <View style={styles.imgFloriadeContainer}>
                <Image source={require('../../img/floriade-2022.jpg')} style={styles.imgFloriade}></Image>
            </View>
            <Button uppercase={false} style={styles.button} onPress={() =>{
                navigation.navigate('LanguageScreen')
                modalShow('true')}
            }>
                <Text style={styles.text}>Start</Text>
            </Button>
        </View>
    )
}

export default HomeScreen