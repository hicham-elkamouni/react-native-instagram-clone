import { View, Text, SafeAreaView ,StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import { Header } from '../components/home/Header';
import Stories from '../components/home/Stories';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.fixed, styles.container]}>
      <Header/>
      <Stories/>
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