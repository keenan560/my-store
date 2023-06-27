import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Me = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
