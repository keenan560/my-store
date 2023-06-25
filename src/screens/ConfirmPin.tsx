import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ConfirmPin = ({navigation}) => {
  const [pressCount, setPressCount] = useState<number>(0);
  console.log(pressCount);
  const increment = () => {
    setPressCount(pressCount + 1);
  };
  useEffect(() => {
    if (pressCount >= 4) return navigation.navigate('signIn');
  }, [pressCount]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm you 4 digit pin</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.digitContainer} onPress={increment}>
          <Text style={styles.digit}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d4e8d',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 42,
    color: '#fff',
    marginTop: 48,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 4,
  },
  digitContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  digit: {
    color: '#1d4e8d',
    fontWeight: '900',
    fontSize: 20,
  },
});
