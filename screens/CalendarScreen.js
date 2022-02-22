import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  const {text} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>text: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
