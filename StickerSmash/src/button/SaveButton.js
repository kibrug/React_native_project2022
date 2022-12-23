import React from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native';

export default function SaveButton() {
  return (
    <View style={styles.container}>
        <Text>Save</Text>
       
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

