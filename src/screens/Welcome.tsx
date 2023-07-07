import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Button from '../components/Button';
import help from '../assets/help.png';

const screenWidth = Dimensions.get('screen').width;

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={help} />
      <Text style={styles.title}>Welcome to Me@Walmart</Text>
      <Text style={styles.subTitle}>
        Thanks for downloading the app, you're going to love it! There a couple
        of things to set up so the app is just right for you.
      </Text>
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate('dashboard');
        }}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 24,
    color: '#000',
  },
  subTitle: {
    fontFamily: 'Avenir',
    letterSpacing: 2.5,
    textAlign: 'center',
    marginBottom: 24,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '50%',
    marginBottom: 50,
    marginTop: 8,
  },
});
