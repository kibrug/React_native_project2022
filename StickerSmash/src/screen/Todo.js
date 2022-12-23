import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Todo(props) {
    return (
        <View style={styles.container}>
        <Text>To do</Text>
       
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Todo;