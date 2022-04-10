import React from 'react';
import HomeScreen from './HomeScreen';
import TicketScreen from './TicketScreen';
import RentalScreen from './RentalScreen';
import EventScreen from './EventScreen';
import StoreScreen from './StoreScreen';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Colors from '../shared/Colors';
import AboutScreen from './AboutScreen';
import FoodDrinkScreen from './FoodDrinkScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import SupportScreen from './SupportScreen';
import Weather from './WeatherScreen';
import TrailMapScreen from './TrailMapScreen';
import {Badge, Surface, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const TicketStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RentalStack = createStackNavigator();
const EventStack = createStackNavigator();
const StoreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="home"
    activeColor={Colors.white}
    barStyle={{backgroundColor: Colors.metallicBlue}}>
    <Tab.Screen
      name="homeH"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ticketT"
      component={TicketStackScreen}
      options={{
        tabBarLabel: 'Ticket',
        tabBarIcon: ({focused, color, size}) => (
          <MaterialCommunityIcons
            name="ticket-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="rentalR"
      component={RentalStackScreen}
      options={{
        tabBarLabel: 'Rental',
        tabBarIcon: ({focused, color, size}) => (
          <FontAwesome5 name="snowboarding" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="eventE"
      component={EventStackScreen}
      options={{
        tabBarLabel: 'Event',
        tabBarIcon: ({focused, color, size}) => (
          <MaterialIcons name="event" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="storeS"
      component={StoreStackScreen}
      options={{
        tabBarLabel: 'Store',
        tabBarIcon: ({focused, color, size}) => (
          <FontAwesome5 name="store-alt" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{flexDirection: 'row', marginRight: 15}}
            //TO DO: onPress go to cart screen
            onPress={() => {}}>
            <MaterialIcons
              name="shopping-cart"
              size={26}
              color={Colors.white}
            />
            <Badge style={{position: 'absolute', top: -12, right: -10}}>
              0
            </Badge>
          </TouchableOpacity>
        ),
      }}
    />
  </HomeStack.Navigator>
);
const TicketStackScreen = ({navigation}) => (
  <TicketStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <TicketStack.Screen
      name="Ticket"
      component={TicketScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{flexDirection: 'row', marginRight: 15}}
            //TO DO: onPress go to cart screen
            onPress={() => {}}>
            <MaterialIcons
              name="shopping-cart"
              size={26}
              color={Colors.white}
            />
            <Badge style={{position: 'absolute', top: -12, right: -10}}>
              0
            </Badge>
          </TouchableOpacity>
        ),
      }}
    />
  </TicketStack.Navigator>
);
const RentalStackScreen = ({navigation}) => (
  <RentalStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <RentalStack.Screen
      name="Rental"
      component={RentalScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{flexDirection: 'row', marginRight: 15}}
            //TO DO: onPress go to cart screen
            onPress={() => {}}>
            <MaterialIcons
              name="shopping-cart"
              size={26}
              color={Colors.white}
            />
            <Badge style={{position: 'absolute', top: -12, right: -10}}>
              0
            </Badge>
          </TouchableOpacity>
        ),
      }}
    />
  </RentalStack.Navigator>
);
const EventStackScreen = ({navigation}) => (
  <EventStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <EventStack.Screen
      name="Events"
      component={RentalScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </EventStack.Navigator>
);
const StoreStackScreen = ({navigation}) => (
  <StoreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.metallicBlue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <StoreStack.Screen
      name="Store"
      component={RentalScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            style={{backgroundColor: Colors.metallicBlue}}
            name="menu"
            size={26}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{flexDirection: 'row', marginRight: 15}}
            //TO DO: onPress go to cart screen
            onPress={() => {}}>
            <MaterialIcons
              name="shopping-cart"
              size={26}
              color={Colors.white}
            />
            <Badge style={{position: 'absolute', top: -12, right: -10}}>
              0
            </Badge>
          </TouchableOpacity>
        ),
      }}
    />
  </StoreStack.Navigator>
);
