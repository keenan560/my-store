import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
