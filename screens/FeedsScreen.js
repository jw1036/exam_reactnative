import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  return (
    <View style={styles.block}>
      <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default FeedsScreen;
