import React from 'react';
import {StyleSheet, View} from 'react-native';

function AddTodo() {
  return <View style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});

export default AddTodo;
