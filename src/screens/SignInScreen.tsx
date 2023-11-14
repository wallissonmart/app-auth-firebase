import React from 'react';
import {View, Image} from 'react-native';

import logo from '../assets/logo-fut.png';
import {styles} from '@styles/index';
import {useSignIn} from '@hooks/useSignIn';
import SignUpLink from '@components/SignUpLink';
import AuthButton from '@components/AuthButton';
import AuthInput from '@components/AuthInput';
import {PagePropsAuth} from '@routes/auth.routes';
import ToastMessage from '@components/ToastMessage';

type PropsNavigationSignInScreen = PagePropsAuth<'SignInScreen'>;

const SignInScreen = ({navigation}: PropsNavigationSignInScreen) => {
  const {setEmail, setPassword, signIn, email, password} = useSignIn();

  return (
    <View style={styles.container}>
      <ToastMessage />

      <Image resizeMode="contain" source={logo} style={styles.logo} />

      <AuthInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <AuthInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <AuthButton onPress={signIn} title="Entrar" />

      <SignUpLink
        title="Cadastrar"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </View>
  );
};

export default SignInScreen;
