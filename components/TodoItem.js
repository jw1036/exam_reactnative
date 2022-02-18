import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TodoItem({id, text, done}) {
  return (
    <View style={styles.item}>
      <View style={styles.circle} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#26a69a',
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
});

export default TodoItem;
