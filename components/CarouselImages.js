import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Carousel,
} from 'react-native';

import { Constants } from 'expo';

export default class CarouselImages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          style={styles.overlayContainer}>
          <Image
            style={styles.imagesize}
            source={require('../assets/screen1.png')}
          />
          <Image
            style={styles.imagesize}
            source={require('../assets/screen2.png')}
          />
          <Image
            style={styles.imagesize}
            source={require('../assets/screen3.png')}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 160,
    height: 325,
    top: 24,
    left: 10,

  },
  overlayContainer: {
    flex: 1,
  },
  imagesize: {
    width: 178,
    height: 355,
    overflow: 'hidden',
  },
});
