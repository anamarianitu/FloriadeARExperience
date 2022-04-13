import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../home/HomeStyle";
import { languageStyles } from "./LanguageScreenStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LanguageScreen = ({ navigation }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const storeLanguage = async value => {
      try {
        await AsyncStorage.setItem('@lang', value);
        initPersonalFoot();
        navigation.navigate('CarouselPage');
      } catch (e) {
        // saving error
      }
    };

    const initPersonalFoot = async () => {
      try {
        await AsyncStorage.setItem('@personalFoot', '0');
      } catch (e) {
        // saving error
      }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.container, {
                flexDirection: "row"
            }]}>
                <Image source={require('../../img/floriade-left.jpg')} style={styles.imgLeft}></Image>
                <View style={[styles.container, {
                    flexDirection: "column"
                }]}>
                    <Image source={require('../../img/floriade-right1.jpg')} style={styles.img}></Image>
                    <Image source={require('../../img/floriade-right2.jpg')} style={[styles.img, { marginTop: 10 }]}></Image>
                </View>
            </View>
            <View style={languageStyles.languageContainer}>
                <TouchableOpacity style={[languageStyles.languageLine, { borderColor: selectedButton === 'dutch' ? '#519259' : 'white' }]} onPress={() => storeLanguage('dutch')}>
                    <Image source={require('../../img/languageFlags/netherlands.png')} style={languageStyles.flag}></Image>
                    <Text style={languageStyles.languageName}>Nederlands</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[languageStyles.languageLine, { borderColor: selectedButton === 'english' ? '#519259' : 'white' }]} onPress={() => storeLanguage('english')}>
                    <Image source={require('../../img/languageFlags/united-kingdom.png')} style={languageStyles.flag}></Image>
                    <Text style={languageStyles.languageName}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[languageStyles.languageLine, { borderColor: selectedButton === 'german' ? '#519259' : 'white' }]} onPress={() => storeLanguage('german')}>
                    <Image source={require('../../img/languageFlags/germany.png')} style={languageStyles.flag}></Image>
                    <Text style={languageStyles.languageName}>Deutsch</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LanguageScreen

{
    'en' ?
        'nl' ?
            'nederland'
            :
            'deutch'
        :
        'english'
}
