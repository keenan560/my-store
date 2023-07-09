import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import sparkLogo from '../assets/sparkLogo.png';
import {Button, AskModal} from '../components';

const AskSam = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25, borderRadius: 100, marginRight: 4}}
            source={sparkLogo}
          />
          <Text style={{fontWeight: '700', fontSize: 14}}>
            Hi Keenan. How can I help?
          </Text>
        </View>
        <Text>
          Ask me anything... Even if I can't answer, it will teach me how to
          help you later!
        </Text>
      </View>
      <View style={{marginLeft: 12}}>
        <Button title={"Discover What's New"} width={180} />
      </View>
      <AskModal navigation={navigation} />
    </View>
  );
};

export default AskSam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBody: {
    backgroundColor: '#fff',
    padding: 8,
    width: 290,
    marginTop: 4,
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: 12,
  },
});
