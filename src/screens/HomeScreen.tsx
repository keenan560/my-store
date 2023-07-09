import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import headshot from '../assets/headshot.jpeg';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginHorizontal: 16,
          justifyContent: 'flex-start',
          marginVertical: 16,
        }}>
        <View
          style={{
            borderBottomColor: 'orange',
            borderBottomWidth: 4,
            paddingBottom: 16,
          }}>
          <Text style={{fontSize: 22, fontWeight: '800'}}>Hey </Text>
        </View>
        <Text style={{fontSize: 22, fontWeight: '800'}}>there, Keenan!</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 16,
          justifyContent: 'space-between',
        }}>
        <Text>
          Today is{' '}
          <Text style={{fontWeight: '700'}}>Wednesday, September 16</Text>
        </Text>
        <Text>Week 22</Text>
      </View>
      <Text style={{fontWeight: '700', marginLeft: 16}}>Store's Metrics</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="end"
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '16%',
        }}>
        <View style={styles.metricCard}>
          <Text
            style={{
              fontWeight: '700',
              marginBottom: 8,
            }}>
            Financials
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'column',
                marginRight: 32,
              }}>
              <Text style={{fontWeight: '600'}}>Sales</Text>
              <Text style={{fontWeight: '300'}}>This Year</Text>
              <Text style={{fontWeight: '600'}}>$40,000.00</Text>
              <Text style={{color: 'green'}}>
                +20%{' '}
                <MaterialCommunityIcons
                  name="chart-line-variant"
                  color="green"
                  size={26}
                />
              </Text>
              <Text style={{fontWeight: '300'}}>Total</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                borderLeftWidth: 1,
                paddingLeft: 8,
                borderLeftColor: '#f6f3f7',
              }}>
              <Text style={{fontWeight: '600'}}>Markdowns</Text>
              <Text style={{fontWeight: '600'}}>$2,035.00</Text>
              <Text style={{fontWeight: '300'}}>Total Markdowns</Text>
            </View>
          </View>
        </View>
        <View style={styles.metricCard}>
          <Text
            style={{
              fontWeight: '700',
              marginBottom: 8,
            }}>
            Inventory
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'column',
                marginRight: 32,
              }}>
              <Text style={{fontWeight: '300'}}>OSCA</Text>
              <Text style={{fontWeight: '300'}}>Yesterday</Text>
              <Text style={{fontWeight: '600'}}>1,500</Text>
              <Text style={{color: 'red'}}>
                22.5%{' '}
                <MaterialCommunityIcons
                  name="chart-line-variant"
                  color="red"
                  size={26}
                />
              </Text>
              <Text style={{fontWeight: '300'}}>Total</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                borderLeftWidth: 1,
                paddingLeft: 8,
                borderLeftColor: '#f6f3f7',
              }}>
              <Text style={{fontWeight: '600'}}>Markdowns</Text>
              <Text>$2,035.00</Text>
              <Text style={{fontWeight: '300'}}>Total Markdowns</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.cardBody}>
        <Text style={{fontWeight: '300'}}>Your schedule</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontWeight: '700',
              marginBottom: 8,
              fontSize: 18,
            }}>
            React Native Developer
          </Text>
          <Text
            style={{
              backgroundColor: '#ecf3eb',
              alignSelf: 'center',
              padding: 4,
            }}>
            8.00h
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={22}
            style={{marginRight: 8}}
          />
          <Text>8:00am - 5:00pm</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={22}
            style={{marginRight: 8}}
          />
          <Text>12:00pm - 1:00pm</Text>
        </View>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline'}}>
            View full schedule
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Image
            style={{width: 48, height: 48, borderRadius: 100, marginRight: 16}}
            source={headshot}
          />
          <View>
            <Text style={{fontWeight: '300'}}>Current status</Text>
            <Text
              style={{
                fontWeight: '700',
                marginBottom: 8,
                fontSize: 18,
              }}>
              Clocked in
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline'}}>View timeclock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardBody: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.0,

    elevation: 5,
  },
  metricCard: {
    backgroundColor: '#fff',

    marginRight: 16,
    alignSelf: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.0,

    elevation: 5,
  },
});
