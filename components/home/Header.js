import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/instagram_logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/plus_logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/send.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    justifyContent: 'space-between',
    alignItems : 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  iconsContainer : {
    flexDirection : 'row',
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft : 10,
    resizeMode: "contain",
  }
});
