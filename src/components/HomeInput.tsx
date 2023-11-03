import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const HomeInput = (props: TextInputProps) => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="#a59e9e"
      style={stylesHomeInput.input}
      {...props}
    />
  );
};

export default HomeInput;

const stylesHomeInput = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#a59e9e',
    paddingHorizontal: 10,
    color: '#000',
    borderWidth: 1,
    width: '100%',
    height: 20,
    marginBottom: 16,
  },
});
