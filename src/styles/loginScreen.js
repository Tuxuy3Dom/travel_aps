// styles/LoginScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';

function LoginScreen() {
  return (
    <View>
      <Text>Ekran logowania</Text>
      <LoginForm />
    </View>
  );
}

export default LoginScreen;
