import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.supportScreen}>
      <Text> Support Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  supportScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default SupportScreen;
