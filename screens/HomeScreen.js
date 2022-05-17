import { View, Text, SafeAreaView ,StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import { Header } from '../components/home/Header';
import { Stories } from '../components/home/Stories'; 
import { Post } from '../components/home/Post';
import { ScrollView } from 'react-native-web';
import { POSTS } from '../data/posts';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.fixed, styles.container]}>
      <Header/>
      <Stories/>
      <ScrollView>
        { POSTS.map((post , i ) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
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