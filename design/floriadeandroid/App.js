import React from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainFoot from './src/screens/mainFoot/MainFoot';
import MapFoot from './src/screens/mapFooot/MapFoot1';
import CarouselPage from './src/screens/carousel/CarouselPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguageScreen from './src/screens/languageChoice/LanguageScreen';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyle: { backgroundColor: 'white' }
        }}>
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, backgroundColor: 'white' }}
        />
        <Screen
          name="LanguageScreen"
          component={LanguageScreen}
          options={{ headerShown: false, backgroundColor: 'white' }}
        />
        <Screen
          name="CarouselPage"
          component={CarouselPage}
          options={{ headerShown: false }}
        />
        <Screen
          name="MainFoot"
          component={MainFoot}
          options={{ headerShown: false }}
        />
         <Screen
          name="MapFoot"
          component={MapFoot}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
export default App;