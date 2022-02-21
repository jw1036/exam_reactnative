import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const value = useContext(LogContext);

  return (
    <View style={styles.block}>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default FeedsScreen;
