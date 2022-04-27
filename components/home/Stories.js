import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

export default Stories = () => {
  return (
    <View style={{marginBottom:13}}>
        <ScrollView horizontal showsHorizontalScrollindicator={false}>
            {
                USERS.map((story, i) => { 
                    return (
                        <View key={i} style={{ alignItems : 'center'}}>
                            <TouchableOpacity>
                                <Image source={{ uri : story.image }} style={styles.story}/>
                            </TouchableOpacity>
                            <Text style={{color : 'white' , fontSize : 12}}>
                                {story.user.length > 11 ? story.user.substring(0, 11).toLowerCase() + '...' : story.user.toLowerCase()}
                                
                            </Text>
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
        width : 70,
        height : 70,
        borderRadius : 50,
        marginRight : 10,
        borderWidth : 3,
        borderColor : 'orange',
    }
})