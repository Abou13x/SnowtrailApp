import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import Header from '../shared/Header';
const HomeScreen = ({navigation}) => {
  return (
    // <View>
    //   <Header title="Hello Abou" cart weather />
    // </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ticket screen"
        onPress={() => navigation.navigate('Ticket')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
