import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import rfidImg from '../assets/rfid.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RfidCard = () => {
  return (
    <View style={styles.container}>
      <Image source={rfidImg} style={styles.img} />
      <TouchableOpacity style={{width: 200}}>
        <Text>
          It looks like Rfid is availabble for this store.{' '}
          <Text style={{color: '#2a74d5', fontWeight: '700'}}>
            Stat rfid scan
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RfidCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 24,
    borderRadius: 8,
  },
  img: {
    width: 70,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});