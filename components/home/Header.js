import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/instagram.png")}
          />
        </TouchableOpacity>
        {/* icons container */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../assets/plus.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../assets/heart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            
            <Image
              style={styles.icon}
              source={require("../../assets/send.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    justifyContent: 'space-between',
    alignItems : 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  iconsContainer : {
    flexDirection : 'row',
  },

  logo: {
    width: 100,
    height: 70,
    resizeMode : 'contain',
  },

  icon: {
    width: 20,
    height: 20,
    marginLeft : 10,
    resizeMode: "contain",
  },

  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 8,
    bottom: 15,
    width: 20,
    height: 18,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius: 25,
    zIndex: 100
  },

  unreadBadgeText: {
    color: "white",
    fontWeight : '400',
    fontSize: 12,
  },
});
