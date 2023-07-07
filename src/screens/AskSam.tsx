import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AskSam = () => {
  return (
    <View style={styles.container}>
      <Text>Ask Same</Text>
    </View>
  );
};

export default AskSam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
