import React from 'react';
import {Pressable, StyleSheet, Platform, Text} from 'react-native';

export interface MenuItemProps {
  onPress(): void;
  name: string;
}

function MenuItem({onPress, name}: MenuItemProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && styles.pressed,
      ]}
      onPress={onPress}
      android_ripple={{color: '#eeeeee'}}>
      <Text>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
  },
  pressed: {
    backgroundColor: '#eeeeee',
  },
});

export default MenuItem;
