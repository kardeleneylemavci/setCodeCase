import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>FavoriteScreen</Text>     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"#fff",
    fontSize:20
  }
});
