import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import signIn from '../assets/signin.png';
import explore from '../assets/explore.png';

import Button from '../components/Button';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, associates!</Text>
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('dashboard')}
      />
      <Image style={styles.image} source={signIn} />
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
    marginBottom: 24,
    marginTop: 24,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 12,
    width: '90%',
    borderRadius: 8,
  },
});
