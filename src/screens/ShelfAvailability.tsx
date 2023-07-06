import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button, RfidCard} from '../components';
import shelf from '../assets/shelf.png';

const ShelfAvailability = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RfidCard />
      <Image source={shelf} style={styles.img} />
      <Button
        onPress={() => navigation.navigate('barcode-scanner')}
        width={320}
        title="Start scanning"
      />
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
    width: 300,
    height: 300,
    marginBottom: 32,
  },
});
