import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  ItemInfoCard,
  ItemInventoryCard,
  ItemProfitMarginCard,
} from '../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ItemInfoCard />
      <ItemInventoryCard />
      <ItemProfitMarginCard />
      <TouchableOpacity style={styles.scanButton}>
        <MaterialCommunityIcons
          name="barcode-scan"
          size={26}
          color="#fff"
          style={{padding: 8}}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: '#2a74d5',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    top: '67%',
    right: 20,
    height: 70,
  },
});
