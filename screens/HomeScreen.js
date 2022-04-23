import { View, Text, SafeAreaView ,StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import { Header } from '../components/home/Header';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.fixed, styles.container]}>
      <Header/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fixed: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  },
   container : {
      backgroundColor: 'black',
      flex: 1,
   }
});