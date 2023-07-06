import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginHorizontal: 16,
          justifyContent: 'flex-start',
          marginVertical: 16,
        }}>
        <View
          style={{
            borderBottomColor: 'orange',
            borderBottomWidth: 4,
            paddingBottom: 16,
          }}>
          <Text style={{fontSize: 22, fontWeight: '800'}}>Hey </Text>
        </View>
        <Text style={{fontSize: 22, fontWeight: '800'}}>there, Keenan!</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          justifyContent: 'space-between',
        }}>
        <Text>
          Today is{' '}
          <Text style={{fontWeight: '700'}}>Wednesday, September 16</Text>
        </Text>
        <Text>Week 22</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
