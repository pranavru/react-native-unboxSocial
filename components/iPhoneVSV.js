import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

import { Constants } from 'expo';
import CarouselImages from './CarouselImages';

export default class Phone extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={require('../assets/hand/iPhone.png')}
            style={styles.container}
          />
          <View style={styles.overlayContainer}>
            <CarouselImages />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 360,
    position: 'absolute',
  },
  overlayContainer: {
    flex: 1,
  },
});
