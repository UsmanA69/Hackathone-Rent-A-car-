import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({navigation}) {
  const [userDetails, setUserDetails] = React.useState({});
  const [localuserDetails, setLocalUserDetails] = useState({});

  const handleSubmition = data => {
    setUserDetails(data);
    if (
      localuserDetails.email != userDetails.email ||
      localuserDetails.password != userDetails.password
    ) {
      Alert.alert('User not found',"Enter valid email or passwrod");
    } else {
      navigation.navigate('listings');
    }
  };

  const getUserDataFromUserDevice = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData != null) {
        setLocalUserDetails(JSON.parse(userData));
      }
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  React.useEffect(() => {
    getUserDataFromUserDevice();
  }, []);

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require('../Assets/logo-red.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={value => handleSubmition(value)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default LoginScreen;
