// components/LoginForm.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [countryOfBirth, setCountryOfBirth] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Obsługa logiki rejestracji
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Wprowadź email"
      />
      {/* ... pozostałe pola formularza ... */}
      <Button title="Zarejestruj" onPress={handleRegistration} />
    </View>
  );
}

export default LoginForm;
