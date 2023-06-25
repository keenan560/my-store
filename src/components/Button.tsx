import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {ButtonProps} from '../types';

const screenWidth: number = Dimensions.get('screen').width;

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.backgroundColor ?? '#2a74d5',
        width: props.width ?? screenWidth * 0.4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: props.borderColor ?? '',
        borderWidth: props.borderWidth ?? 0,
      }}
      onPress={props.onPress}>
      <Text
        style={{
          color: props.color ?? '#fff',
          fontWeight: 'bold',
          fontFamily: 'Avenir',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {},
});
