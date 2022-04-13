import * as React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { style } from './ModalInfoStyle';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { data, months, fullMonths, overshootDayText } from './ModalData'
import { indexOf } from 'lodash';

const ModalInfo = (props, { navigation }) => {

  const [modalOpen, setModalOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('');
  const navig = useNavigation();

  const handlePress = () => {
    setModalOpen(!modalOpen);
  };


  try {
    AsyncStorage.getItem('@lang', (err, item) => {
      if (item === 'dutch') {
        setLanguage('dutch');
      } else if (item === 'german') {
        setLanguage('german');
      } else {
        setLanguage('english');
      }
    });
  } catch (error) {
    console.log('Error retrieving data' + error);
  }

  var date = new Date('2022-01-01');
  date.setDate(date.getDate() + props.overshootDay);

  const earthsIcons = [];
  const earthsIconHalf = [];
  let j = 0;
  for (let i = 1; i <= props.earths; i++) {
    earthsIcons.push({
      key: i,
      value: require('../img/earth.png')
    });
    // earthsIcons.push(require('../img/earth.png'));
    j = i;
  }
  if (props.earths - j > 0.5) {
    earthsIconHalf.push(require('../img/half-earth.png'));
  }

  return (
    <>
      {props.visible ? (
        <Card style={style.mainContainer}>
          <View style={style.topContainer}>
            <Image source={props.image} style={style.footImage}></Image>
            <View style={style.textContainer}>
              <Text style={style.title}>{language === 'english' ? props.titleEN : language === 'dutch' ? props.titleNL : props.titleDE}</Text>
              <Text style={style.description}>{language === 'english' ? props.descriptionEN : language === 'dutch' ? props.descriptionNL : props.descriptionDE}</Text>
            </View>
            {props.isOnMap ? (
              <TouchableOpacity
                style={style.mapButton}
                onPress={() => {
                  navig.navigate('CarouselPage')
                  navig.navigate('MainFoot')
                }}>
                <Image
                  source={require('../img/cube.png')}
                  style={style.mapButtonImage}></Image>
              </TouchableOpacity>
            ) :
              props.personal ?
                (
                  <TouchableOpacity
                    style={style.mapButton}
                    onPress={props.onPressTest}>
                    <Image
                      source={require('../img/redo.png')}
                      style={style.mapButtonImage}></Image>
                  </TouchableOpacity>
                ) :

                (
                  <TouchableOpacity
                    style={style.mapButton}
                    onPress={() => navig.navigate('MapFoot')}>
                    <Image
                      source={require('../img/map.png')}
                      style={style.mapButtonImage}></Image>
                  </TouchableOpacity>
                )}
          </View>
          {modalOpen ? (
            <Card style={style.bottomContainerOpen}>
              <View style={style.bottomContainerViewOpen}>
                <View style={style.contentContainerOpen}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={style.titleOpen}>{props.size} {language === 'english' ? 'Hectares' : language === 'dutch' ? 'Hectare' : 'Hektar'}</Text>
                    <Text style={style.contentOpen}>
                      {
                        props.dutch ?
                          language === 'english' ? "Our carbon footprint consists of " + props.size + " global hectares. This means that we use the average biocapacity of " + props.size + " hectares of biologically productive earth surface. Why " + props.size + " hectares? Think about what you are eating, how much time you are spending in a car, how much green energy you are using and how often you are sitting on a plane."
                            : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                              : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."
                          :
                          props.ideal ?
                            language === 'english' ? "Our precise ecological footprint consists of " + props.size + " global hectares. This means that we must use the biocapacity of " + props.size + " hectares of biologically productive earth surface. Why " + props.size + " hectares? If we devide all global hectares all over the Earth by the number of people, we currently have " + props.size + " hectares available on Earth. This means that we use all available global hectares, so we'd prefer to need even less."
                              : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                                : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."
                            :
                            language === 'english' ? props.earths > 3.1 ? "Your carbon footprint is made up to " + props.size + " global hectares. This means that you use the biocapacity of " + props.size + " hectares of biologically productive earth surface. This is more than the average Dutch person, so we would advise you to start living greener, because we don't have unlimited resources and ultimately must make do with the earth we have now." : "Your carbon footprint is made up to " + props.size + " global hectares. This means that you use a biocapacity of 4.6 hectares of biologically productive earth surface. This is less than the average Dutch person, well done! Nevertheless, this does not mean that we should not start living greener, because in the end we must all make do with earth we have now."
                              : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                                : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."


                      }
                      {/* {language === 'english' ? "Our ecological footprint consists of " + props.size + " global hectares. This means that we use the average biocapacity of " + props.size + " hectares of biologically productive earth surface. Why " + props.size + " hectares? Think about what you are eating, how much time you are spending in a car, how much green energy you are using and how often you are sitting on a plane."
                        : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                          : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."} */}
                    </Text>
                    <Text style={style.titleOpen}>{props.earths} {language === 'english' ? props.earths === 1.0 ? 'Earth' : 'Earths' : language === 'dutch' ? 'Aardes' : 'Erden'}</Text>
                    <Text style={style.contentOpen}>
                      {
                        props.dutch ?
                          language === 'english' ? "If everyone goes through life just like the average Dutch person, we need not one, but " + props.earths + " Earths to suffice our needs."
                            : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                              : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."
                          :
                          props.ideal ?
                            language === 'english' ? "If we live life like this, we can get just enough from the Earth, but we are still on the brink of exhaustion."
                              : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                                : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."
                            :
                            language === 'english' ? "If we would live like you do, we would need no less than " + props.earths + " earths to suffice our needs."
                              : language === 'dutch' ? "Onze ecologische voetafdruk bestaat uit " + props.size + " hectaren wereldwijd. Dit betekent dat we gebruik maken van de gemiddelde biocapaciteit van " + props.size + " hectare biologisch productief aardoppervlak. Waarom " + props.size + " hectare? Denk aan wat je eet, hoeveel tijd je in de auto doorbrengt, hoeveel groene stroom je verbruikt en hoe vaak je in het vliegtuig zit."
                                : "Unser ökologischer Fußabdruck umfasst " + props.size + " globale Hektar. Das bedeutet, dass wir die durchschnittliche Biokapazität von " + props.size + " Hektar biologisch produktiver Erdoberfläche nutzen. Warum " + props.size + " Hektar? Denken Sie darüber nach, was Sie essen, wie viel Zeit Sie im Auto verbringen, wie viel grüne Energie Sie verbrauchen und wie oft Sie im Flugzeug sitzen."
                      }
                    </Text>
                    <View style={style.earthIconsContainer}>
                      {earthsIcons.map(item => (
                        <Image key={item.key} source={item.value} style={style.earthIcon}></Image>
                      ))}
                      {earthsIconHalf.map(item => (
                        <Image key={100} source={item} style={style.earthIconHalf}></Image>
                      ))}
                    </View>
                    <Text style={style.titleOpen}>
                      {fullMonths[date.getMonth()]} {date.getDate()}
                    </Text>
                    <Text style={style.contentOpen}>{language === 'english' ? overshootDayText.EN : language === 'dutch' ? overshootDayText.NL : overshootDayText.DE}</Text>
                  </ScrollView>
                </View>
                <TouchableOpacity
                  style={style.arrowDownContainer}
                  onPress={() => handlePress()}>
                  <Image
                    source={require('../img/arrowDown.png')}
                    style={style.arrowButton}></Image>
                </TouchableOpacity>
              </View>
            </Card>
          ) : (
            <Card style={style.bottomContainer}>
              <View style={style.mainInfoContainer}>
                <View style={style.infoContainer}>
                  <Text style={style.infoHeaderProps}>{props.size} Ha</Text>
                  <Text>{language === 'english' ? 'Size' : language === 'dutch' ? 'Grootte' : 'Größe'}</Text>
                </View>
                <View style={style.infoContainer}>
                  <Text style={style.infoHeaderProps}>{props.earths}</Text>
                  <Text>{language === 'english' ? props.earths === 1.0 ? 'Earths' : 'Earth' : language === 'dutch' ? 'Aardes' : 'Erden'}</Text>
                </View>
                <View style={style.infoContainer}>
                  <Text style={style.infoHeaderProps}>
                    {date.getDate()} {months[date.getMonth()]}
                  </Text>
                  <Text>{language === 'english' ? 'Overshoot Day' : language === 'dutch' ? 'Overshoot Dag' : 'Überschreitungstag'}</Text>
                </View>
                <TouchableOpacity
                  style={style.arrowUpContainer}
                  onPress={() => handlePress()}>
                  <Image
                    source={require('../img/arrowUp.png')}
                    style={style.arrowButton}></Image>
                </TouchableOpacity>
              </View>
            </Card>
          )}
        </Card>
      ) : null}
    </>
  );
};

export default ModalInfo