import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toast, {BaseToastProps} from 'react-native-toast-message';

type ToastConfig = {
  successSignUp: (props: BaseToastProps) => JSX.Element;
  errorSignIn: (props: BaseToastProps) => JSX.Element;
  errorSignUp: (props: BaseToastProps) => JSX.Element;
};

const toastConfig: ToastConfig = {
  successSignUp: props => (
    <View style={stylesToastMessage.successMessage}>
      <Text>{props.text1}</Text>
    </View>
  ),
  errorSignIn: props => (
    <View style={stylesToastMessage.errorMessage}>
      <Text style={stylesToastMessage.text}>{props.text1}</Text>
    </View>
  ),
  errorSignUp: props => (
    <View style={stylesToastMessage.errorMessage}>
      <Text style={stylesToastMessage.text}>{props.text1}</Text>
    </View>
  ),
};

const ToastMessage = () => {
  return <Toast config={toastConfig} />;
};

export default ToastMessage;

const stylesToastMessage = StyleSheet.create({
  successMessage: {
    backgroundColor: '#17ca29',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    height: 50,
    borderRadius: 8,
    padding: 5,
  },
  errorMessage: {
    backgroundColor: '#d21010',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    height: 50,
    borderRadius: 8,
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});
