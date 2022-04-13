import React, { Component } from "react";
import {
  StyleSheet,
  PermissionsAndroid,
  View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Polygon, Overlay } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { locations1 } from "./source/Data1";
import { locations3 } from "./source/Data3";
import { data, months, fullMonths, overshootDayText } from '../../modal/ModalData'
import ModalInfo from './../../modal/ModalInfo';

class MapFoot12 extends Component {
  state = {
    region: {
      latitude: 52.35791760634953,
      longitude: 5.231512084161243,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    error: "",
    routeCoordinates: [],
    distanceTravelled: 0,
    prevLatLng: {},
    red: false,
    green: false, 
    nocolor: true
  }

  requestLocationPermission() {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
    } catch (err) {
      console.warn(err)
    }
  }
  componentDidMount() {
    this.requestLocationPermission();
    this.getCurrentLocation();
  }
  
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }

  // getting the current Location of a user...
  getCurrentLocation = () => {
    Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const { routeCoordinates } = this.state;
        const newCoordinate = { latitude, longitude };
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        };
        // if user enters red zone
        if (newCoordinate.latitude >= 52.35646572616387 &&
          newCoordinate.latitude <= 52.3601825874411 &&
          newCoordinate.longitude >= 5.230881148949374 &&
          newCoordinate.longitude <= 5.233653824154533) {
            this.setState({
             red: true,
             green: false,
             nocolor: false
            })
        }
        else {
          this.setState({
            nocolor: true,
            green: false,
            red: false
          })
        }
        // if user enters green zone
        if ( newCoordinate.latitude >= 52.35739082884363 &&
          newCoordinate.latitude <= 52.35935557056521 &&
          newCoordinate.longitude >= 5.231863843974601 &&
          newCoordinate.longitude <= 5.233238040387603) {
          this.setState({
            red: false,
            green: true,
            nocolor: false
          })
        } 
       
         
        this.setState({
          //       initialRegion: region,
          //     region: region,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),

          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 2000,
        // maximumAge: 1000000,
        distanceFilter: 1
      }
    );
  };

  // animate to current user Location
  goToInitialLocation = () => {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    //  this.mapView.animateToRegion(initialRegion, 2000);
  };

  // lat & lng for Marker
  getMapRegion = () => ({
    latitude: this.state.region.latitude,
    longitude: this.state.region.longitude
  });

  render() {
    return (
      <View style={styles.mainbox}>
        <MapView
          style={styles.mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.region}
          mapType="hybrid"
          ref={ref => (this.mapView = ref)}
          showsUserLocation={true}
          loadingEnabled={true}
          toolbarEnabled={false}
        >
          {this.state.red===true  && this.state.nocolor===false &&(
          <Overlay
            image={require('./source/red.png')}
            bounds={[
              [
                49.7812641,
                1.1865234
              ],
              [
                53.6446378,
                0.9228516
              ]
            ]}
            opacity={0.5}
          />
          )}
           {this.state.green===true && this.state.nocolor===false &&(
          <Overlay
            image={require('./source/green.png')}
            bounds={[
              [
                49.7812641,
                1.1865234
              ],
              [
                53.6446378,
                0.9228516
              ]
            ]}
            opacity={0.5}
          />
          )}
          <Overlay
            //floriade map overlay
            image={require('./source/map.png')}
            bounds={[
              [52.352100497553614, 5.219157213655828],
              [52.362296180483575, 5.236044401151413]

            ]}
          />
          <Overlay
            // footprint 
            image={require('./source/Footprint.png')}
            bounds={[
              [52.35649961720534, 5.230902881575736],
              [52.36026481232964, 5.233769658687145]
            ]}
            opacity={1}
          />

          { //green zone
            locations1.map(marker => (
              <Polygon
                key={marker.id}
                coordinates={locations1}
                // comment line below to see green zone
                strokeWidth={0}
              />
            ))
          }
          { // red zone
            locations3.map(marker => (
              <Polygon
                key={marker.id}
                coordinates={locations3}
                // comment line below to see red zone
                strokeWidth={0}
              />
            ))
          }

        </MapView>
        <ModalInfo
          key={data[0].key}
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
          title1Open={data[0].title1Open}
          title2Open={data[0].title2Open}
          title3Open={data[0].title3Open}
          content1Open={data[0].content1Open}
          content2Open={data[0].content2Open}
          content3Open={data[0].content3Open}
          earthsNumber={data[0].earthsNumber}
          isOnMap={true}
          visible={true}
        ></ModalInfo>
      </View>
    );
  }
}
export default MapFoot12;

const styles = StyleSheet.create({
  mainbox: {
    textAlign: 'center',
    margin: 0,
    flex: 5,
    justifyContent: 'space-between',
  },
  mapView: {
    flex: 25,
  }
});