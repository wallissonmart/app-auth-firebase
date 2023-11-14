import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#0848af',
  primaryLight: '#236bdf',
};

export const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  containerSplashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    zIndex: -1,
  },
  logo: {
    width: 200,
    height: 200,
    zIndex: -1,
  },
});
