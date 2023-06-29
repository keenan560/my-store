import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from './Button';
import {CardProps} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = (props: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardBody}>Desc: {props.body}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}>
        <Text style={styles.price}>Price: ${props.price}</Text>
        {props.img && <Image source={props.img} style={styles.img} />}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {props.buttonTitle && (
          <Button
            backgroundColor="#fff"
            color="#000"
            borderColor="#000"
            borderWidth={1.5}
            title={props.buttonTitle}
          />
        )}
        <View>
          <Text style={styles.upc}>Upc: {props.upc}</Text>
          <MaterialCommunityIcons name="barcode" size={65} />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 24,
    borderRadius: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardBody: {
    fontWeight: 'normal',
    marginBottom: 8,
  },
  img: {
    width: 80,
    height: 80,
    borderWidth: 0.5,
  },
  price: {},
  upc: {},
});
