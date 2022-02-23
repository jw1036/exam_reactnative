import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

function SearchHeader() {
  const {width} = useWindowDimensions();

  return <View style={[styles.block, {width: width - 32, height: 24}]} />;
}

const styles = StyleSheet.create({
  block: {
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default SearchHeader;
