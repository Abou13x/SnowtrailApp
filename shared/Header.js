// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import {Badge, Surface, Title} from 'react-native-paper';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Header = ({title, cart, weather, temperature}) => {
//   return (
//     <Surface style={styles.header}>
//       <View style={styles.view}>
//         <Title>{title}</Title>
//       </View>
//       <View style={[styles.view, styles.rightView]}>
//         {weather && (
//           <TouchableOpacity>
//             <MaterialCommunityIcons
//               name="weather-cloudy"
//               size={24}
//               color={'blue'}
//             />
//             {<Text>10 F</Text>}
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={[styles.view, styles.rightView]}>
//         {cart && (
//           <TouchableOpacity style={styles.rowView}>
//             <AntDesign name="shoppingcart" size={24} color={'blue'} />
//             <Badge style={{position: 'absolute', top: -12, right: -10}}>
//               0
//             </Badge>
//           </TouchableOpacity>
//         )}
//       </View>
//     </Surface>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     height: 50,
//     elevation: 4,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#ccc',
//   },
//   view: {
//     flex: 1,
//     margin: 10,
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   rightView: {
//     justifyContent: 'center',
//   },
//   rowView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default Header;
