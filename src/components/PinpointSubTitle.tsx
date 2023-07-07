import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PinpointSubTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '700', color: 'green', letterSpacing: 1}}>
        Let's solve some availability issues!
      </Text>
      <Text style={{letterSpacing: 1}}>
        Investigate these issues to improve in-stock for customers.
      </Text>
    </View>
  );
};

export default PinpointSubTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 24,
    paddingBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
