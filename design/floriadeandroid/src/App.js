import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroARCamera,
  ViroText,
  ViroBox,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroSoundField,
  ViroMaterials,
  ViroAnimations,
} from "@viro-community/react-viro";
import { Platform, PermissionsAndroid } from "react-native";


const HelloWorldSceneAR = () => {

  return (
    <ViroARScene>
      {
       <ViroBox
  height={2}
  length={2}
  width={2}
           position={[0, 0, -5]}
       />
      }
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
});
