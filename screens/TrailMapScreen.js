import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TrailMapScreen = () => {
  return (
    <View style={styles.trailMapScreen}>
      <Text> Trail Map Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  trailMapScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default TrailMapScreen;
