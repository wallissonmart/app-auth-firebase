import React from 'react';
import {View, Image, Text} from 'react-native';
import logo from '../assets/logo-fut.png';
import {styles} from '@styles/index';
import {useSingUp} from '@hooks/useSignUp';

import AuthInput from '@components/AuthInput';
import AuthButton from '@components/AuthButton';
import ToastMessage from '@components/ToastMessage';

const SignUpScreen = () => {
  const {setEmail, setPassword, signUp, email, password} = useSingUp();

  return (
    <View style={styles.container}>
      <ToastMessage />

      <Text style={styles.title}>Criar conta</Text>

      <Image resizeMode="contain" source={logo} style={styles.logo} />

      <AuthInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <AuthInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <AuthButton onPress={signUp} title="Cadastrar" />
    </View>
  );
};

export default SignUpScreen;
