import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from './AppButton';

function SubmitButton({title ,btnColor }) {
  const {handleSubmit} = useFormikContext();

  return <AppButton color={btnColor} tittle={title} onPress={handleSubmit} />;
}

export default SubmitButton;
