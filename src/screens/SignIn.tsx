import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import signIn from '../assets/signin.png';
import explore from '../assets/explore.png';

import Button from '../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          alignItems: 'center',
          marginBottom: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginRight: 24,
            marginTop: 16,
          }}>
          <MaterialCommunityIcons name="earth" size={26} />
          <Text>EN</Text>
        </View>

        <Text style={styles.title}>Hello, associates!</Text>
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('dashboard')}
        />
        <Image style={styles.image} source={signIn} />
      </View>
      <View style={styles.cardContainer}>
        <Text style={{fontWeight: '200'}}>Guests</Text>
        <Text
          style={{
            letterSpacing: 2,
            fontWeight: 'bold',
            marginBottom: 16,
            color: '#000',
          }}>
          Explore jobs and learn about Walmart
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Button
            title="Explore"
            backgroundColor="#fff"
            color="#000"
            borderColor="#000"
            borderWidth={1.5}
          />
          <Image source={explore} />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32,
    fontSize: 20,
    color: '#000',
  },
  image: {
    width: '100%',
    marginTop: 24,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 12,
    width: '90%',
    borderRadius: 8,
  },
});
