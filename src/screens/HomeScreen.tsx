import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from '../components';
import Bananas from '../assets/bananas.jpeg';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello there!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
