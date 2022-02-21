import React from 'react';
import {StyleSheet, View} from 'react-native';
import FloatWriteButton from '../components/FloatWriteButton';

function FeedsScreen() {
  return (
    <View style={styles.block}>
      <FloatWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
