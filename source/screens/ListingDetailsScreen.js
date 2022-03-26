import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';

function ListingDetailsScreen({route, navigation}) {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>
          Time Duration: {item.timeDuration} Days
        </AppText>
        <AppText style={styles.price}>${item.price}</AppText>
        <View style={styles.rentBtnDiv}>
          <AppButton
            onPress={() => navigation.navigate('rentForm')}
            color="dark"
            tittle="rent"
          />
        </View>
        <View style={{marginVertical: 40}}>
          <ListItem
            image={require('../Assets/avatar-icon.png')}
            title="Muhammad Usman"
            description="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontWeight: 'bold',
    color: colors.secondary,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  rentBtnDiv: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
  },
});

export default ListingDetailsScreen;
