import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyTeam = () => {
  return (
    <View style={styles.container}>
      <Text>My Team</Text>
    </View>
  );
};

export default MyTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
