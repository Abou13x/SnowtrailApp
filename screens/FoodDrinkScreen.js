import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FoodDrinkScreen = () => {
  return (
    <View style={styles.foodDrinkScreen}>
      <Text> Food and Drink Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  foodDrinkScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default FoodDrinkScreen;
