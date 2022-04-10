import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const RentalScreen = () => {
  return (
    <View style={styles.rentalScreen}>
      <Text> Rental Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  rentalScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default RentalScreen;
