import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SignOutScreen = () => {
  return (
    <View style={styles.signOutScreen}>
      <Text> SignOut Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  signOutScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default SignOutScreen;
