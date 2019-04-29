import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

import { Constants } from 'expo';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            style={styles.backdrop}
            source={require('../assets/hand/hand_without_phone.png')}>
            <View style={styles.overlay}>
              <Image style={styles.logo} source={require('../assets/hand/iPhone.png')} />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  logo: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: 180,
    height: 360,
    left: 33,
    top: 17,
  },
});