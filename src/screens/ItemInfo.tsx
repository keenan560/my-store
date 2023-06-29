import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from '../components';
import Bananas from '../assets/bananas.jpeg';

const ItemInfo = () => {
  return (
    <View>
      <Card
        img={Bananas}
        title={'Bananas'}
        body={'pack of bannas from dept 92'}
        buttonTitle={'Order'}
        price={'.98'}
        upc={4011}
      />
    </View>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
