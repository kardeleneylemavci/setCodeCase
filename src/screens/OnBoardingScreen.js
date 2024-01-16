import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

const OnBoardingScreen = ({ navigation }) => {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'LexendDeca-Medium': require('../../assets/fonts/LexendDeca-Medium.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/onboarding.png')}
        style={styles.backgroundImage}
      >


        <TouchableOpacity style={{
          backgroundColor: "#fff",
          width: 330, height: 48, margin: "5%", borderRadius: 10, alignItems: "center",
          justifyContent: "center", flexDirection: "row",
        }} onPress={() => navigation.navigate("BottomTabs")}  >
          <View style={{ flex: 2, alignItems: "flex-end", justifyContent: "center" }}>
            <Text style={{ fontFamily: 'LexendDeca-Medium',fontSize: 16, letterSpacing: 1.9, fontWeight: 600, color: '#121212', }}>Start Shopping</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 7 }}>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
    letterSpacing: 0.02,
    textAlign: 'center',
  },
  textBody: {
    color: "white",
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
  },

});

export default OnBoardingScreen;
