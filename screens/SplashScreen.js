import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Button,
} from 'react-native';
import Colors from '../shared/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.metallicBlue} />
      <View style={styles.header}>
        <Animatable.Image
          animation="lightSpeedIn"
          duration={1500}
          source={require('../assets/icons/snowboarding.jpg')}
          style={{width: 460, height: 460}}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.white,
              padding: 5,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons
              name="navigate-next"
              color={Colors.darkBlue}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.metallicBlue,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: Colors.yellow,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.white,
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
    padding: 5,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: Colors.darkBlue,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
