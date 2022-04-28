import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Colors from '../shared/Colors';
const images = [
  'https://i.ytimg.com/vi/2cKB0hJOJ1A/maxresdefault.jpg',
  'https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0',
  'https://storage.googleapis.com/cdn.thelondoneconomic.com/wp-content/uploads/2019/04/adventure-cold-downhill-1878052-1200x853.jpg',
  'https://th.bing.com/th/id/R.607875ba1b0a2c31548d0e832337533f?rik=%2fU4rfKodB2DyuQ&pid=ImgRaw&r=0',
  'https://snowtraildogcamp.com/wp-content/uploads/2015/11/Mushing.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ImageSlider = () => {
  const [imagActive, setimagActive] = useState(0);
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slider = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slider !== imagActive) {
        setimagActive(slider);
      }
    }
  };
  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{uri: e}}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imagActive === index ? styles.dotActivity : styles.dot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    marginTop: 7,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActivity: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: Colors.white,
  },
});

export default ImageSlider;
