import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export const Header = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('../../assets/instagram_logo.png')} />	
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
})
