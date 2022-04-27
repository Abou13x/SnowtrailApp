import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RadioButtonRN from 'radio-buttons-react-native';


const ProfileScreen = () => {
  return (
      <View style={styles.title}>
        <Text style={styles.title}>{"\n"}Edit Profile Information</Text>
  
        <View style={styles.skiboard}>
          <Text>{"\n"}Name & Address:</Text>
          <TextInput placeholder={'Johnny Appleseed'}></TextInput>
          <TextInput placeholder={"123 main st. Kent Ohio"}></TextInput>
        </View>

        <View style={styles.skiboard}>
          <Text>{"\n"}Preferred Sport:</Text>
          <RadioButtonRN
          data={[{label: 'Ski'},{label: 'Snowboard'}]}
          selectedBtn={(e)=>console.log(e)}
          icon={
            <Icon name="person-skiing"
            size={25}
            color='#001348'
            ></Icon>
          }
        />
        </View>
  
        <View style={styles.heightweight}>
          <Text>Rider Weight and Height</Text>
  
          <View style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <TextInput style={styles.input} placeholder={"Weight (in lbs)"} />
          <TextInput style={styles.input} placeholder={"Height (in inches)"} />
  
          </View>
  
        </View>
  
  
        <View style={styles.price}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold'
          }}>
          TOTAL DAYS ON PASS: 17</Text>
        </View>
  
       
  
  
      </View>
  
  
  
  
      
  
  
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      flex: 0.9,
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 5
    },
    skiboard: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    heightweight: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    price: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
export default ProfileScreen;
