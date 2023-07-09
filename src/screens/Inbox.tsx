import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontSize: 20,
          fontWeight: '600',
          marginLeft: 16,
          marginVertical: 16,
        }}>
        Schedule updates
      </Text>
      <View style={styles.cardContainer}>
        <View
          style={{
            backgroundColor: '#f6f3f7',
            borderRadius: 100,
            height: 26,
          }}>
          <MaterialCommunityIcons name="calendar-outline" size={26} />
        </View>

        <View style={styles.body}>
          <Text style={{marginBottom: 8, fontWeight: '700'}}>
            Attention GTA Scheduled Outage
          </Text>
          <Text lineBreakMode="middle" style={{alignSelf: 'flex-start'}}>
            GTA Scheduled Outage from Saturday, April 9th, April 10th: All Time
            Clocks will accept punches. However, Punch Edits, Time Off Requests
            and Confirmation will be unavailable.
          </Text>
        </View>
        <Text style={{fontWeight: '300'}}>2h</Text>
      </View>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 12,
    borderLeftColor: '#ffef4f',
    borderLeftWidth: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.0,

    elevation: 5,
  },
  body: {
    flexDirection: 'column',
    marginHorizontal: 8,
    width: 275,
  },
});
