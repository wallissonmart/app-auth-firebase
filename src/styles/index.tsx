import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#0848af',
  primaryLight: '#236bdf',
};

export const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
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
  },
  logo: {
    width: 200,
  },
});
