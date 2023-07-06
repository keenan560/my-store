import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button';

const ItemProfitMarginCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nearbyRow}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons name="chart-line-variant" size={26} />
          <Text style={{fontWeight: '700', marginLeft: 12}}> Sales</Text>
        </View>
      </View>
      <View style={styles.itemCardFooter}>
        <View style={styles.footerCol}>
          <Text style={styles.footerText}>Today</Text>
          <Text style={styles.onHand}>$1,048.52</Text>
        </View>
        <View style={styles.footerCol}>
          <Text style={styles.footerText}>QTR</Text>
          <Text style={styles.salesFloor}>$892K</Text>
        </View>
        <View style={styles.footerColRight}>
          <Text style={styles.footerText}>YTD</Text>
          <Text style={styles.backRoom}>$3.94M</Text>
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
          title="See more"
          backgroundColor="#fff"
          color="#000"
          borderWidth={1}
        />
      </View>
    </View>
  );
};

export default ItemProfitMarginCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
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
