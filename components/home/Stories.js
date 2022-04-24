import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

export default Stories = () => {
  return (
    <View style={{marginBottom:13}}>
        <ScrollView horizontal showsHorizontalScrollindicator={false}>
            {
                USERS.map((story, i) => { 
                    return (
                        <View>
                            <Image source={{ uri : story.image }} style={styles.story} key={i}></Image>
                        </View>
                        )
                })
            }
        </ScrollView>
        <Text style={{ color : 'white' }}>STORIES</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    story : {
        width : 80,
        height : 80,
        borderRadius : 40,
    }
})