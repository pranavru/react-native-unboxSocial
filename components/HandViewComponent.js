import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Phone from './iPhoneVSV';

export default class HandView extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require('../assets/hand/hand_without_phone.png')}
          style={{ position: 'absolute', width:'100%', height:'100%' }}
        />
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Phone />
          </View>
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create ({
  overlayContainer: {
    flex: 1,
  },
  top: {
    height: '50%',
    top: 18,
    left: 47,
  },
})