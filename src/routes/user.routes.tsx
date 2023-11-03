import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';

export type UserStackParamList = {
  Home: undefined;
};

export interface PagePropsUser<T extends keyof UserStackParamList> {
  navigation: NativeStackNavigationProp<UserStackParamList, T>;
  route: RouteProp<UserStackParamList, T>;
}

const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserRoutes = () => {
  return (
    <UserStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen name="Home" component={HomeScreen} />
    </UserStack.Navigator>
  );
};

export default UserRoutes;
