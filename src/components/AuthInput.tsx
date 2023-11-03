import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const AuthInput = (props: TextInputProps) => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="#a59e9e"
      style={stylesAuthInput.input}
      {...props}
    />
  );
};

export default AuthInput;

const stylesAuthInput = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#a59e9e',
    paddingHorizontal: 10,
    color: '#000',
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16,
  },
});
