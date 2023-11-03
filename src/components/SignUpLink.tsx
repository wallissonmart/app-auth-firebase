import React from 'react';
import {colors} from '@styles/index';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface MyLinkProps {
  title: string;
  onPress: () => void;
}

const SignUpLink = ({title, onPress}: MyLinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={stylesSignUpLink.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SignUpLink;

const stylesSignUpLink = StyleSheet.create({
  text: {
    marginTop: 16,
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
