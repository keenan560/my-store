import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import microphone from '../assets/microphone.png';
import Button from '../components/Button';

const screenWidth = Dimensions.get('screen').width;

const Microphone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={microphone} />
      </View>
      <Text style={styles.subTitle}>
        Do you grant the app permission to your device's camera and microphone?
      </Text>
      <View style={styles.butttonContainer}>
        <Button
          title="Yes"
          onPress={() => {
            navigation.navigate('firstPin');
          }}
        />
        <Button
          title="No"
          onPress={() => {
            navigation.navigate('firstPin');
          }}
        />
      </View>
    </View>
  );
};

export default Microphone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    backgroundColor: 'gold',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  butttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 10,
  },
  subTitle: {
    fontFamily: 'Avenir',
    letterSpacing: 2.5,
    textAlign: 'center',
    marginBottom: 24,
    marginHorizontal: 10,
  },
});
