import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PinpointDeptProps} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PinpointDept = (props: PinpointDeptProps) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontWeight: '700', fontSize: 18, marginBottom: 8}}>
          {props.name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderRightWidth: 3,
              borderRightColor: '#f6f3f7',
              marginRight: 8,
            }}>
            <Text style={{paddingRight: 8}}>{props.problems} Problems</Text>
          </View>
          <Text>{props.solved} Solved Today</Text>
        </View>
      </View>
      {props.favorite ? (
        <MaterialCommunityIcons name="star" size={40} color="gold" />
      ) : (
        <MaterialCommunityIcons name="star-outline" size={40} color="grey" />
      )}
    </View>
  );
};

export default PinpointDept;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#f6f3f7',
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
});
