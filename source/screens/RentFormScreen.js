import React, {useState} from 'react';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(5).label('Name'),
  phoneNumber: Yup.number().required().min(5).label('PhoneNumber'),
  email: Yup.string().required().email().label('Email'),
  cnic: Yup.number().required().min(2).label('Cnic'),
});

function RentFormScreen({navigation}) {
  const [details, setDetails] = useState();

  const handleSubmition = (data) => {
    console.log(data);
    setDetails(data);
    // navigation.navigate('listings');
  };

  return (
    <Screen>
      <AppForm
        initialValues={{
          name: '',
          phoneNumber: '',
          email: '',
          cnic: '',
        }}
        onSubmit={values => {
          handleSubmition(values);
        }}
        validationSchema={validationSchema}>
        <AppFormField maxLength={225} name="name" placeholder="Name" />
        <AppFormField
          keyboardType={'email-address'}
          name="email"
          placeholder="Email"
        />
        <AppFormField
          keyboardType={'numeric'}
          maxLength={12}
          name="phoneNumber"
          placeholder="Alternative P-Number"
        />
        <AppFormField
          keyboardType={'numeric'}
          maxLength={14}
          name="cnic"
          placeholder="CNIC"
        />
        <SubmitButton title="Confirm" />
      </AppForm>
    </Screen>
  );
}

export default RentFormScreen;
