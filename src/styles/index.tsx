import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#0848af',
  primaryLight: '#df8123',
};

export const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  containerSplashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
