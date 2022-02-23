import React from 'react';
import {StyleSheet, Text} from 'react-native';

function SearchHeader() {
  return <Text style={styles.block}>Hello</Text>;
}

const styles = StyleSheet.create({
  block: {
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default SearchHeader;
