import { View, Text, SafeAreaView ,StyleSheet, StatusBar} from 'react-native'
import React from 'react'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HOME SCREEN</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  }
});