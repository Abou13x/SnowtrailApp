import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const StoreScreen = () => {
  return (
    <View style={styles.storeScreen}>
      <Text> Store Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  storeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default StoreScreen;
