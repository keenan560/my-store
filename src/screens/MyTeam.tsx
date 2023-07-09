import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import myTeam from '../assets/store.png';
import {Button} from '../components';

const MyTeam = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={myTeam} />
      <Text style={styles.title}>New - talk with your team!</Text>
      <Text style={styles.subTitle}>
        View team roster and talk to your fellow associates with the app's
        walkie talkie
      </Text>
      <Button
        title="Get started"
        onPress={() => {
          navigation.navigate('dashboard');
        }}
      />
    </View>
  );
};

export default MyTeam;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f6',
    flex: 1,
  },
  img: {
    width: '90%',
    height: '50%',
    marginBottom: 50,
    marginTop: 8,
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
});
