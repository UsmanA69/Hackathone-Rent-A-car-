import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
  return (
    <>
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require('../Assets/background.jpg')}>
        <View style={styles.logo_div}>
          <Image
            style={styles.logo}
            source={require('../Assets/logo-red.png')}
          />
          <Text style={styles.logo_title}>Rent a car you deserve</Text>
        </View>
        <View style={styles.btnsContainer}>
          <AppButton
            onPress={() => navigation.navigate('login')}
            tittle="login"
          />
          <AppButton
            tittle="register"
            onPress={() => navigation.navigate('register')}
            color="secondary"
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnsContainer: {
    width: '100%',
    padding: 10,
  },
  logo_div: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logo_title: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.medium,
  },
  registerBtn: {
    backgroundColor: '#4ECDC4',
    width: '100%',
    height: 60,
  },
});

export default WelcomeScreen;
