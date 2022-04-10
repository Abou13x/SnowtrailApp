import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TicketScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, algnItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ticket screen...again"
        onPress={() => navigation.push('Ticket')}
      />
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   ticketScreen: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#8fcbbc',
//   },
// });

export default TicketScreen;
