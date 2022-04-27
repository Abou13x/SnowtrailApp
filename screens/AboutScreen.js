import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';




const AboutScreen = () => {
  return (
    <View style={styles.aboutScreen}>
    <Text style={styles.titleText}>{"\n"}Snow Trails{"\n"}</Text>
      <Text>Snow trails is the first resort located in kent Ohio, we are proud to offer more than 3 hill with over 25 feet of elevation gain! {"\n\n"}Snow Trails offers a wide variefy of amenties such as equipment rentals, beginner lessons, and many in house events. There are activities for all visitors at Snow Trails!</Text>
      <View style={styles.socials}>
      <Image source={require('../assets/socials/phone.png')} style={styles.inputIcon} resizeMode="contain"/>
      <Image source={require('../assets/socials/ig_logo.png')} style={styles.inputIcon} resizeMode="contain"/>
      <Image source={require('../assets/socials/fb_icon.jpg')} style={styles.inputIcon} resizeMode="contain"/>

    
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  aboutScreen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 17,
    paddingRight: 17,

  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  socials: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputIcon: {
    width: 35,
    height: 35,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
    

  },
});
export default AboutScreen;
