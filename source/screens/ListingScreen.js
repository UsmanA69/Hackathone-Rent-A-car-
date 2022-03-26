import React from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Shelby Mustang for rent',
    price: 1500,
    image: require('../Assets/carbon-fiber-shelby-mustang-car1.jpg'),
    timeDuration: 2,
  },
  {
    id: 2,
    title: 'Honda civic 2019',
    price: 1000,
    image: require('../Assets/2019-honda-civic-sedan-car2.jpg'),
    timeDuration: 3,
  },
  {
    id: 3,
    title: 'Toyota Rangerover',
    price: 1000,
    image: require('../Assets/rangerover_car3.jpg'),
    timeDuration: 1,
  },
];

function ListingScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('listingDetail', {item})}
            title={item.title}
            description={`$${item.price}`}
            image={item.image}
          />
        )}
      />
      <TouchableOpacity
        style={[styles.carsDetail, {left: 5}]}
        onPress={() => {
          navigation.navigate('account');
        }}>
        <Icon name={'account-settings'} size={25} color={colors.light} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.carsDetail, {right: 5}]}>
        <Icon name={'car-settings'} size={25} color={colors.light} />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  carsDetail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
    position: 'absolute',
    bottom: 0,
  },
});

export default ListingScreen;
