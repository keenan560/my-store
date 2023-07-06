import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BarcodeScanner = () => {
  const [{cameraRef}] = useCamera();
  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <TouchableOpacity style={styles.scanButton}>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={26}
            color="#fff"
            style={{padding: 8}}
          />
        </TouchableOpacity>
      </RNCamera>
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton: {
    backgroundColor: '#2a74d5',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    top: '67%',
    right: 20,
    height: 70,
  },
});
