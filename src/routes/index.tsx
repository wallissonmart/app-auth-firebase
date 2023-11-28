import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {colors, styles} from '@styles/index';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(_user => {
      if (initializing) {
        setInitializing(false);
      }
      setUser(_user);
    });

    return unsubscribe;
  }, [initializing]);

  if (initializing) {
    return (
      <View style={styles.containerSplashScreen}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      {user ? <UserRoutes /> : <AuthRoutes />}
    </SafeAreaView>
  );
};

export default Routes;
