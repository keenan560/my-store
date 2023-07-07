import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button, RfidCard} from '../components';
import shelf from '../assets/shelf.jpg';

const ShelfAvailability = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RfidCard />
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image source={shelf} style={styles.img} />
        <Text style={{letterSpacing: 2, marginBottom: 16}}>
          Point at the shelf label and click on the button below to start
          scanning
        </Text>
        <Button
          onPress={() => navigation.navigate('barcode-scanner')}
          width={320}
          title="Start scanning"
        />
      </View>
    </View>
  );
};

export default ShelfAvailability;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 350,
    marginBottom: 32,
  },
});
