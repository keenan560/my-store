import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import sparkLogoBlue from '../assets/sparkLogoBlue.webp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Me = () => {
  return (
    <View style={styles.container}>
      <View
        style={{backgroundColor: '#2a74d5', width: '100%', height: 200}}></View>
      <View style={styles.meCard}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={sparkLogoBlue}
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
              marginTop: -64,
              marginBottom: 16,
              borderWidth: 4,
              borderColor: '#0f7fd8',
            }}
          />
          <Text style={{fontWeight: '700'}}>Keenan Mapp - VN52O40!</Text>
          <View
            style={{
              borderBottomColor: 'orange',
              borderBottomWidth: 4,
              paddingBottom: 8,
              marginBottom: 8,
              width: 40,
            }}></View>
        </View>
        <Text style={{marginBottom: 8}}>Vendor</Text>
        <Text style={{marginBottom: 8}}>Hired: 09/26/2021</Text>
        <Text style={{marginBottom: 8}}>WIN: 261734569</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontWeight: '700',
              marginBottom: 8,
            }}>
            WM SUPERCENTER #5538
          </Text>
        </View>
        <Text>TSAWWASSEN</Text>
        <Text>5143 CANOE PASS WAY, TSAWWASSEN</Text>
        <Text>0B2, CANADA</Text>
      </View>
    </View>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  meCard: {
    marginTop: -100,
    marginBottom: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    width: '88%',
    height: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.0,

    elevation: 5,
  },
  cardBody: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.0,

    elevation: 5,
  },
});
