import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Bananas from '../assets/bananas.jpeg';
import Barcode from '../assets/barcode.png';

const ItemInfoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemCard}>
        <View style={styles.itemCardSpecRow}>
          <Text style={styles.spec}>On Feature</Text>
          <Text style={styles.spec}>WIC</Text>
          <Text style={styles.spec}>First Clearance</Text>
        </View>
        <View style={styles.itemCardMidSec}>
          <View style={styles.itemCardMidSecImgs}>
            <Image source={Bananas} style={styles.itemImg} />
            <Image source={Barcode} style={styles.barcode} />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemDesc}>Bananas</Text>
            <Text style={styles.itemDesc}>$1.98</Text>
            <Text style={styles.itemMeta}>Item #: 9876543 </Text>
            <Text style={styles.itemMeta}>Dept: 92 </Text>
            <Text style={styles.itemMeta}>UPC: 060000004011</Text>
          </View>
        </View>
        <View style={styles.itemCardFooter}>
          <View style={styles.footerCol}>
            <Text style={styles.footerText}>Size</Text>
            <Text style={styles.footerText}>NA</Text>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.footerText}>Color</Text>
            <Text style={styles.footerText}>None</Text>
          </View>
          <View style={styles.footerColRight}>
            <Text style={styles.footerText}>Case pack</Text>
            <Text style={styles.footerText}>50 ea</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemInfoCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  itemCard: {
    backgroundColor: '#fff',
    width: '100%',
  },
  itemCardSpecRow: {
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 16,
  },
  spec: {
    backgroundColor: '#e7f1fc',
    textAlign: 'center',
    padding: 8,
    marginRight: 8,
    color: '#6c88a6',
    fontWeight: '700',
    borderRadius: 8,
  },
  itemCardMidSec: {
    flexDirection: 'row',
  },
  itemCardMidSecImgs: {
    flexDirection: 'column',
    marginHorizontal: 16,
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  barcode: {
    width: 100,
    height: 50,
  },
  itemDetails: {
    flexDirection: 'column',
    marginLeft: 16,
    width: '60%',
  },
  itemDesc: {
    fontWeight: '800',
    marginVertical: 4,
    flexWrap: 'wrap',
  },
  itemMeta: {
    fontWeight: '300',
    marginVertical: 4,
  },
  itemCardFooter: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#f6f3f7',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
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
  },
});
