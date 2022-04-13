import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  Pressable,

} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './MainFootStyle';
import Slider from '@react-native-community/slider';
import {
  ViroARScene,
  ViroARCamera,
  ViroText,
  ViroBox,
  ViroNode,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroSoundField,
  ViroARImageMarker,
  ViroMaterials,
  ViroAnimations,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';
import { Platform, PermissionsAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import english from '../../languages/english';
import dutch from '../../languages/dutch';
import german from '../../languages/german';
import englishQuestions from '../../questions/questionsEN';
import dutchQuestions from '../../questions/questionsNL';
import germanQuestions from '../../questions/questionsGE';
import ModalInfo from '../../modal/ModalInfo';
import { data, months, fullMonths, overshootDayText } from '../../modal/ModalData';
import questionsEN from '../../questions/questionsEN';

const foot3d = require('../../img/model/foot.obj');
let pos = [0, 0, 0];

ViroMaterials.createMaterials({
  redColor: {
    lightingModel: 'Blinn',
    diffuseColor: '#890F0D',
  },
  greenColor: {
    lightingModel: 'Blinn',
    diffuseColor: '#357C3C',
  },
  blueColor: {
    lightingModel: 'Blinn',
    diffuseTexture: require('../../img/model/personalFootTexture.jpg'),
  },
});
ViroAnimations.registerAnimations({
  getBigger: {
    properties: {
      scaleX: 0.0028,
      scaleY: 0.0028,
      scaleZ: 0.0028,
      opacity: 1,
    },
    easing: 'Linear',
    duration: 2000,
    delay: 0,
  },
  getSmaller: {
    properties: {
      scaleX: 0.0016,
      scaleY: 0.0016,
      scaleZ: 0.0016,
      opacity: 1,
    },
    easing: 'Linear',
    duration: 2000,
    delay: 0,
  },
});
const Create3dFoot = (size, color) => {
  console.log(size);
  if (size === 0.0016) {
    return (
      <Viro3DObject
        source={foot3d}
        position={[pos[0] + 0.01, pos[1], pos[2]]}
        rotation={[0, 203, 0]}
        type="OBJ"
        animation={{ name: 'getSmaller', run: true, loop: true }}
        materials={color}
        scale={[0.0028, 0.0028, 0.0028]}
        opacity={0.0}
      />
    );
  } else if (size === 0.0028) {
    return (
      <Viro3DObject
        source={foot3d}
        position={[pos[0] + 0.01, pos[1], pos[2]]}
        rotation={[0, 203, 0]}
        type="OBJ"
        animation={{
          name: 'getBigger',
          run: true,
          loop: true,
        }}
        materials={color}
        scale={[0.0016, 0.0016, 0.0016]}
        opacity={0.0}
      />
    );
  } else {
    return (
      <Viro3DObject
        source={foot3d}
        position={[pos[0] + 0.01, pos[1], pos[2]]}
        rotation={[0, 203, 0]}
        type="OBJ"
        materials={color}
        scale={[size, size, size]}
      />
    );
  }
};

const FootARScene = props => {
  let size = 0;
  let color = '';
  if (props.arSceneNavigator.viroAppProps.scene === 'idealFootprint') {
    size = 0.0016;
    color = 'greenColor';
  } else if (props.arSceneNavigator.viroAppProps.scene === 'dutchFootprint') {
    size = 0.0028;
    color = 'redColor';
  } else if (
    props.arSceneNavigator.viroAppProps.scene === 'personalFootprint'
  ) {
    console.log(props.arSceneNavigator.viroAppProps.personalFootsize);
    size = CalculateSize(props.arSceneNavigator.viroAppProps.personalFootsize);
    // size = 0.0015;
    console.log(size);
    color = 'blueColor';
  }

  const [objectVisibility, setObjectVisibility] = useState(false);
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroARImageMarker
        target={'targetOne'}
        onAnchorUpdated={e => {
          if (e.trackingMethod === 'lastKnownPose') {
            return setObjectVisibility(false);
          }
          if (e.trackingMethod === 'tracking') {
            return setObjectVisibility(true);
          }
        }}
        visible={objectVisibility}>
        <ViroDirectionalLight
          color="#ccc4c4"
          direction={[0, -1, 0]}
          shadowOrthographicPosition={[0, 8, -5]}
          shadowOrthographicSize={10}
          shadowNearZ={2}
          shadowFarZ={9}
          lightInfluenceBitMask={2}
          castsShadow={true}
        />
        {Create3dFoot(size, color)}
      </ViroARImageMarker>
    </ViroARScene>
  );
};

function CalculateSize(footInCo2) {
  let footInSqMetres = (footInCo2 / 1900) * 10000;
  let x = Math.sqrt(footInSqMetres / 4.3);
  let y = 4.3 * x;
  let arSizeOfFoot = y / 163.9 / 1000;
  return arSizeOfFoot;
}
const MainFoot = ({ navigation }) => {
  const [sliderValue, setSliderValue] = useState(3);
  const [sliderAnswer, setSliderAnswer] = useState('answer' + sliderValue);
  const [personalFootSize, setPersonalFootSize] = useState(0);
  const [modalQuestionareVisible, setModalQuestionareVisible] = useState(false);
  const [questionLanguage, setQuestionLanguage] = React.useState('');
  const [questionareComplete, setQuestionareComplete] = useState(false);
  const [arScene, setArScene] = useState('dutchFootprint');
  const [modalInfoVisible, setModalInfoVisible] = useState(null);
  useEffect(() => {
    try {
      AsyncStorage.getItem('@modal', (err, item) => {
        if (item === 'true') {
          setModalInfoVisible(true)
        } else if (item === 'false') {
          setModalInfoVisible(false)
        }
      });
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
    })
    
  const [infoButtonVisible, setInfoButtonVisible] = useState(true);
  const [dutchFootSelected, setDutchFootSelected] = useState(true);
  const [idealFootSelected, setIdealFootSelected] = useState(false);
  const [personalFootSelected, setPersonalFootSelected] = useState(false);
  const [selectedFoot, setSelectedFoot] = useState('dutch');
  const display = infoButtonVisible === false ? 'none' : 'flex';
  const [language, setLanguage] = React.useState('');
  const dutchSelected = dutchFootSelected === false ? 'white' : 'gray';
  const idealSelected = idealFootSelected === false ? 'white' : 'gray';
  const personalSelected = personalFootSelected === false ? 'white' : 'gray';
  const [questionareStarted, setQuestionareStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [slideVar, setSlideVar] = useState('slide' + questionIndex);
  const [lastSlide, setLastSlide] = useState(false);


  function test() {
    //  delete(RESET) the existing data
    // change the questionaireCompleted to false
    // open the modal
    AsyncStorage.setItem('@personalFoot', '0');
    setPersonalFootSize(0);
    setQuestionareComplete(false);
    setQuestionIndex(0);
    showQuestionareModal(true);
  }

  try {
    AsyncStorage.getItem('@lang', (err, item) => {
      if (item === 'dutch') {
        setLanguage(dutch);
        setQuestionLanguage(dutchQuestions);
      } else if (item === 'german') {
        setLanguage(german);
        setQuestionLanguage(germanQuestions);
      } else {
        setLanguage(english);
        setQuestionLanguage(englishQuestions);
      }
    });
  } catch (error) {
    console.log('Error retrieving data' + error);
  }

  function showDutchFootprint() {
    setArScene('dutchFootprint');
    setDutchFootSelected(true);
    setIdealFootSelected(false);
    setPersonalFootSelected(false);
    setSelectedFoot('dutch');
  }

  function showIdealFootprint() {
    setArScene('idealFootprint');
    setDutchFootSelected(false);
    setIdealFootSelected(true);
    setPersonalFootSelected(false);
    setSelectedFoot('ideal');
  }

  function showPersonalFootprint() {
    setDutchFootSelected(false);
    setIdealFootSelected(false);
    setPersonalFootSelected(true);
    setSelectedFoot('personal');

    try {
      AsyncStorage.getItem('@personalFoot', (err, item) => {
        if (item === '0') {
          setQuestionareComplete(false);
          showQuestionareModal();
        } else {
          setQuestionareComplete(true);
          setPersonalFootSize(item);
          console.log('This is the number: ' + item);
          setArScene('personalFootprint');
        }
      });
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  function showQuestionareModal() {
    setModalQuestionareVisible(true);
    setInfoButtonVisible(false);
  }

  const testBibiOkButton = async value => {

    try {
      await AsyncStorage.setItem('@modal', value);
      setModalInfoVisible(false)
    } catch (e) {
      // saving error
    }
  };


  function hideQuestionareModal() {
    setModalQuestionareVisible(false);
    setInfoButtonVisible(true);
    setQuestionareStarted(false);
    setQuestionareComplete(true);
    setArScene('personalFootprint');
  }

  function startQuestionare() {
    setQuestionareStarted(true);
  }

  function nextQuestion() {
    let newValue =
      personalFootSize + questionLanguage[questionIndex][sliderAnswer].value;
    setPersonalFootSize(newValue);
    if (questionIndex < 10) {
      setQuestionIndex(questionIndex + 1);
    }
    else if (questionIndex == 10) {
      setQuestionIndex(questionIndex + 1);
      setLastSlide(true);
    }
    else {
      try {
        console.log("Finished")
        setLastSlide(false);
        AsyncStorage.setItem('@personalFoot', JSON.stringify(newValue));
      } catch (e) {
        // saving error
      }
      hideQuestionareModal();
    }
  }

  function previousQuestion() {
    if (questionIndex == 0) {
      setQuestionareStarted(false);
    } else {
      setQuestionIndex(questionIndex - 1);
      let newValue =
        personalFootSize - questionsEN[questionIndex - 1][sliderAnswer].value;
      setPersonalFootSize(newValue);
    }
  }
  // console.log(selectedFoot);
  console.log("asta e ala mare? " + AsyncStorage.getItem('@modal'));

  return (
    <React.Fragment>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: FootARScene,
        }}
        viroAppProps={{ scene: arScene, personalFootsize: personalFootSize }}
        style={styles.f1}
      />
      <View style={styles.wrap}>
        <Modal
          animationType="pop"
          transparent={true}
          visible={modalQuestionareVisible}
          onRequestClose={() => {
            setModalQuestionareVisible(!modalQuestionareVisible);
            setInfoButtonVisible(true);
            setQuestionareStarted(false);
            setQuestionareComplete(true);
          }}>
          {questionareStarted === false ? (
            <View style={styles.centeredView} visible={!questionareStarted}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>{language.questionnareTitle}</Text>
                <Text style={styles.modalText}>
                  {language.questionnareDescr}
                </Text>
                <Image
                  source={require('../../img/personalFoot.png')}
                  style={{ width: '75%', height: '75%', resizeMode: 'contain' }}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => startQuestionare()}>
                  <Text style={styles.textStyle}>Start</Text>
                </Pressable>

              </View>
            </View>
          ) : (
            //Questionare questions
            <View style={styles.centeredView} visible={!questionareStarted}>
              <View style={styles.modalView}>
                <Text style={styles.questionTitle}>
                  {questionLanguage[questionIndex].question}
                </Text>
                <Text style={styles.questionSubtitle}>
                  {questionLanguage[questionIndex].explanation}
                </Text>
                <Slider
                  style={styles.slider}
                  minimumValue={1}
                  maximumValue={5}
                  value={sliderValue}
                  onValueChange={value => {
                    setSliderValue(Math.round(value));
                    setSliderAnswer('answer' + Math.round(value));
                  }}
                  minimumTrackTintColor="#4aa447"
                  maximumTrackTintColor="#000000"
                />
                <Text style={styles.answer}>
                  {questionLanguage[questionIndex][sliderAnswer].text}
                </Text>
                <Text style={styles.answerExplanation}>
                  {questionLanguage[questionIndex][sliderAnswer].explanation}
                </Text>
                <Pressable
                  style={[
                    styles.button,
                    styles.buttonClose,
                    styles.buttonAlignment,
                  ]}
                  onPress={() => nextQuestion()}>
                  {!lastSlide ? (
                    <Text display={!lastSlide} style={styles.textStyle}>{language.buttonNext}</Text>
                  ) : (
                    <Text hidden={lastSlide} style={styles.textStyle}>{language.buttonFinish}</Text>
                  )}
                </Pressable>
              </View>
              <TouchableOpacity style={[]} onPress={() => previousQuestion()}>
                <Text style={{ bottom: 35, color: 'grey' }}>{language.buttonBack}</Text>
              </TouchableOpacity>
            </View>
          )}
        </Modal>
      </View>
      <View style={styles.wrap}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalInfoVisible}>
          <View style={styles.modalInfoNew}>
            <Image
              source={require('../../img/mapInfoNew.jpg')}
              style={styles.mapInfoNewImg}></Image>
            <Text style={styles.titleModalInfoNew}>{language.modalARTtitle}</Text>
            <Text style={styles.contentModalInfoNew}>
              {language.modalARContent}
            </Text>
            <Button
              style={styles.buttonModalInfoNew}
              onPress={() => testBibiOkButton('false')}
            >
              <Text style={{ color: 'white' }}>OK</Text>
            </Button>
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.infoButton, { display }]}
          onPress={() => navigation.navigate('CarouselPage')}
          underlayColor={'#00000000'}>
          <Image
            source={require('../../img/info.png')}
            style={styles.infoButton1}
          />
        </TouchableOpacity>

        <View style={{ width: '25%', alignSelf: 'flex-end', bottom: 50 }}>
          <TouchableOpacity
            style={[
              styles.footButton,
              { display },
              { backgroundColor: dutchSelected },
            ]}
            onPress={() => showDutchFootprint()}
            underlayColor={'#00000000'}>
            <Image
              source={require('../../img/dutchFoot.png')}
              style={styles.infoButton1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footButton,
              { display },
              { backgroundColor: idealSelected },
            ]}
            onPress={() => showIdealFootprint()}
            underlayColor={'#00000000'}>
            <Image
              source={require('../../img/idealFoot.png')}
              style={styles.infoButton1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footButton,
              { display },
              { backgroundColor: personalSelected },
            ]}
            onPress={() => showPersonalFootprint()}
            underlayColor={'#00000000'}>
            <Image
              source={require('../../img/personalFoot.png')}
              style={styles.infoButton1}
            />
          </TouchableOpacity>
        </View>
      </View>
      {selectedFoot !== 'dutch' ? (
        selectedFoot === 'ideal' ? (
          <ModalInfo
            visible={true}
            titleEN={data[1].titleEN}
            titleNL={data[1].titleNL}
            titleDE={data[1].titleDE}
            descriptionEN={data[1].descriptionEN}
            descriptionNL={data[1].descriptionNL}
            descriptionDE={data[1].descriptionDE}
            image={data[1].photo}
            size={data[1].size}
            earths={data[1].earths}
            overshootDay={data[1].overshootDay}
            personal={false}
            dutch={data[1].dutch}
            ideal={data[1].ideal}
            isOnMap={false}></ModalInfo>
        ) : (
          <ModalInfo
            visible={questionareComplete}
            titleEN={data[2].titleEN}
            titleNL={data[2].titleNL}
            titleDE={data[2].titleDE}
            descriptionEN={data[2].descriptionEN}
            descriptionNL={data[2].descriptionNL}
            descriptionDE={data[2].descriptionDE}
            image={data[2].photo}
            size={(Math.round((personalFootSize / 1900) * 100) / 100).toFixed(
              1,
            )}
            earths={(Math.round((personalFootSize / 2620) * 100) / 100).toFixed(
              1,
            )}
            overshootDay={Math.round(365 / (personalFootSize / 2620))}
            personal={true}
            onPressTest={test}
            dutch={data[2].dutch}
            ideal={data[2].ideal}
            isOnMap={false}></ModalInfo>
        )
      ) : (
        <ModalInfo
          visible={true}
          titleEN={data[0].titleEN}
          titleNL={data[0].titleNL}
          titleDE={data[0].titleDE}
          descriptionEN={data[0].descriptionEN}
          descriptionNL={data[0].descriptionNL}
          descriptionDE={data[0].descriptionDE}
          image={data[0].photo}
          size={data[0].size}
          earths={data[0].earths}
          overshootDay={data[0].overshootDay}
          personal={false}
          dutch={data[0].dutch}
          ideal={data[0].ideal}
          isOnMap={false}></ModalInfo>
      )}
    </React.Fragment>
  );
};
export default MainFoot;

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../../img/floriadeMap1.png'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
  },
});
