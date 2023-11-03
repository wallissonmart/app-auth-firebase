import {colors} from '@styles/index';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface LoginButtonProps extends TouchableOpacityProps {
  title: string;
}

const AuthButton = ({title, style, ...rest}: LoginButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={[stylesAuthButton.button, style]}>
      <Text style={stylesAuthButton.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const stylesAuthButton = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    padding: 14,
    minWidth: 150,
  },
});
