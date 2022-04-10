// import * as React from 'react';
// import {Text, View, StyleSheet, StatusBar} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import HomeScreen from '../screens/HomeScreen';
// import TicketScreen from '../screens/TicketScreen';
// import RentalScreen from '../screens/RentalScreen';
// import EventScreen from '../screens/EventScreen';
// import MoreScreen from '../screens/MoreScreen';

// const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#009387',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         headerShown: false,
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           //   tabBarLabel: 'Home',
//           //   title: 'Snowtrail',
//           //   headerRight: () => (
//           //     <Icon.Button name="cart" size={25} backgroundColor="#009387" />
//           //   ),
//           tabBarIcon: ({focused, size, color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Ticket"
//         component={TicketScreen}
//         options={{
//           tabBarLabel: 'Tickets',
//           tabBarIcon: ({focused, size, color}) => (
//             <MaterialCommunityIcons
//               name="ticket-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="RentalScreen"
//         component={RentalScreen}
//         options={{
//           tabBarLabel: 'Rentals',
//           tabBarIcon: ({focused, size, color}) => (
//             <FontAwesome5 name="snowboarding" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="EventScreen"
//         component={EventScreen}
//         options={{
//           tabBarLabel: 'Events',
//           tabBarIcon: ({focused, size, color}) => (
//             <MaterialIcons name="event" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="MoreScreen"
//         component={MoreScreen}
//         options={{
//           tabBarLabel: 'More',
//           tabBarIcon: ({focused, size, color}) => (
//             <MaterialIcons name="more-horiz" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MyTabs;
