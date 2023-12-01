import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export const useSingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    if (email === '' || password === '') {
      Toast.show({
        type: 'errorSignUp',
        text1: 'Necessário preencher todos os campos.',
      });
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Toast.show({
          type: 'successSignUp',
          text1: 'Usuário cadastrado com sucesso!',
        });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            Toast.show({
              type: 'errorSignUp',
              text1: 'E-mail já cadastrado!',
            });
            break;
          case 'auth/invalid-email':
            Toast.show({
              type: 'errorSignUp',
              text1:
                'Endereço de e-mail inválido. Verifique o formato do e-mail.',
            });
            break;
          case 'auth/invalid-email':
            Toast.show({
              type: 'errorSignUp',
              text1:
                'Endereço de e-mail inválido. Verifique o formato do e-mail!',
            });
            break;
          case 'auth/wrong-password':
            Toast.show({
              type: 'errorSignUp',
              text1: 'Senha incorreta. Verifique a senha e tente novamente.',
            });
            break;
          default:
            Toast.show({
              type: 'errorSignUp',
              text1: 'Erro desconhecido ao autenticar.',
            });
            console.error('Erro desconhecido ao autenticar:', error);
        }
      });
  }

  return {
    signUp,
    setEmail,
    setPassword,
    email,
    password,
  };
};
