import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PinpointDept, PinpointSubTitle} from '../components';

const Pinpoint = () => {
  return (
    <View style={styles.container}>
      <PinpointSubTitle />
      <Text
        style={{
          // fontWeight: '700',
          alignSelf: 'flex-start',
          marginLeft: 16,
          marginVertical: 16,
        }}>
        There are currently{' '}
        <Text style={{fontWeight: '700', fontSize: 18}}>50 </Text>issues
      </Text>
      <PinpointDept name="D1 Candy, Tobacco" problems={8} solved={2} favorite />
      <PinpointDept name="D2 Health & Beauty Aids" problems={40} solved={37} />
      <PinpointDept name="D5 Media & Gaming" problems={2} solved={0} />
    </View>
  );
};

export default Pinpoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
