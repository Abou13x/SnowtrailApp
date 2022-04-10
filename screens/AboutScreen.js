import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.aboutScreen}>
      <Text> About Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default AboutScreen;
