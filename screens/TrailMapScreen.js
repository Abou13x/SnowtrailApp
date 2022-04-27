import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const TrailMapScreen = () => {
  return (
    <View style={styles.trailMapScreen}>
    
    <Image source={require('../assets/icons/trailmap.png')} style={styles.inputIcon} resizeMode="contain"/>

    </View>
  );
};

const styles = StyleSheet.create({
  trailMapScreen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default TrailMapScreen;
