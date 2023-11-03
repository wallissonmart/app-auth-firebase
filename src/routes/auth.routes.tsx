import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SignInScreen from '@screens/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen';

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

export interface PagePropsAuth<T extends keyof AuthStackParamList> {
  navigation: NativeStackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
