import React from 'react';
import {Image, StyleSheet, Alert,ToastAndroid} from 'react-native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(5).max(10).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({navigation}) {
  const [userDetails, setUserDetails] = React.useState({});

  const saveUserDataToDevice = async userDetails => {
    try {
      const stringifyUser = JSON.stringify(userDetails);
      await AsyncStorage.setItem('user', stringifyUser);
    } catch (e) {
      Alert.alert('Error', e);
      // saving error
    }
  };

  React.useEffect(() => {
    saveUserDataToDevice(userDetails);
  }, [userDetails]);

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require('../Assets/logo-red.png')} />
      <AppForm
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={value => {
          setUserDetails(value);
          ToastAndroid.show("Registered Succesfully please Login", ToastAndroid.SHORT)
          navigation.navigate('Home');
        }}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account-circle-outline"
          name="name"
          placeholder="Name"
        />
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
        <SubmitButton btnColor={'secondary'} title="Register" />
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
