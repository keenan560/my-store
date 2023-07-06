import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from '../components';
import Bananas from '../assets/bananas.jpeg';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 22, alignSelf: 'flex-start'}}>
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            textDecorationColor: 'orange',
          }}>
          Hey
        </Text>{' '}
        there, Chris!
      </Text>
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
