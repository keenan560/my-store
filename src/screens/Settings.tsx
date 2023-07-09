import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../components';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign out"
        backgroundColor="#fff"
        borderColor="#000"
        color="#000"
        borderWidth={1}
        onPress={() => navigation.navigate('signIn')}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
