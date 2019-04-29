import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { Constants } from 'expo';
import Phone from './iPhoneVSV';
import CarouselImages from './CarouselImages';
import HandView from './HandViewComponent';

export default class Test extends React.Component {
  render() {
    const dim = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
    return (
      <View>
        <View style={styles.container}>
          <HandView />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    opacity: 0.9,
  },
});
