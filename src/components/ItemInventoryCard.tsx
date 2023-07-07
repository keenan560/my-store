import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button';

const ItemInventoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nearbyRow}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons name="warehouse" size={26} />
          <Text style={{fontWeight: '700', marginLeft: 12}}> Inventory</Text>
        </View>
        <Text style={{textDecorationLine: 'underline'}}>
          Check nearby stores
        </Text>
      </View>
      <View style={styles.itemCardFooter}>
        <View style={styles.footerCol}>
          <Text style={styles.footerText}>On hand</Text>
          <Text style={styles.onHand}>20</Text>
        </View>
        <View style={styles.footerCol}>
          <Text style={styles.footerText}>Sales Floor</Text>
          <Text style={styles.salesFloor}>10</Text>
        </View>
        <View style={styles.footerColRight}>
          <Text style={styles.footerText}>Backroom</Text>
          <Text style={styles.backRoom}>10</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginHorizontal: 16,
          marginBottom: 16,
        }}>
        <Button
          title="Item out of stock"
          backgroundColor="#fff"
          color="#000"
          borderWidth={1}
        />
        <View style={{marginLeft: 16}}>
          <Button
            title="View all locations"
            backgroundColor="#fff"
            color="#000"
            borderWidth={1}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemInventoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 16,
  },
  nearbyRow: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  footerCol: {
    borderRightWidth: 2,
    borderRightColor: '#f6f3f7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 132,
  },
  footerColRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 132,
  },
  footerText: {
    fontWeight: '300',
    marginBottom: 8,
  },
  onHand: {
    color: 'green',
    fontWeight: '800',
    fontSize: 18,
  },
  salesFloor: {
    fontWeight: '800',
    fontSize: 18,
  },
  backRoom: {
    fontWeight: '800',
    fontSize: 18,
  },
});
