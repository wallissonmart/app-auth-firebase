import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export const useSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    if (email === '' || password === '') {
      Toast.show({
        type: 'errorSignIn',
        text1: 'Necessário preencher todos os campos.',
      });
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user is authenticated');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            Toast.show({
              type: 'errorSignIn',
              text1: 'Usuário não encontrado. Você pode se inscrever.',
            });
            break;
          case 'auth/wrong-password':
            Toast.show({
              type: 'errorSignIn',
              text1: 'Senha incorreta. Verifique a senha e tente novamente.',
            });
            break;
          case 'auth/invalid-email':
            Toast.show({
              type: 'errorSignIn',
              text1:
                'Endereço de e-mail inválido. Verifique o formato do e-mail.',
            });
            break;
          case 'auth/network-request-failed':
            Toast.show({
              type: 'errorSignIn',
              text1: 'Erro de rede. Verifique sua conexão com a internet.',
            });
            break;
          default:
            Toast.show({
              type: 'errorSignIn',
              text1: 'Erro desconhecido ao autenticar.',
            });
            console.error('Erro desconhecido ao autenticar:', error);
        }
      });
  }

  return {
    signIn,
    setEmail,
    setPassword,
    email,
    password,
  };
};
