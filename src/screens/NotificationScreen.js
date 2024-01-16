import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotificationScreen() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>NotificationScreen</Text>     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'olive',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"#fff",
    fontSize:20
  }
});
