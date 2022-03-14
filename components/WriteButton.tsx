import React from 'react';
import {Pressable, StyleSheet, Platform, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function WriteButton() {
  const onPress = () => {
    // TODO: 구현 예정
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        Platform.OS === 'ios' && pressed && styles.pressed,
      ]}
      android_ripple={{color: '#eeeeee'}}
      onPress={onPress}>
      <MaterialIcons name="add-circle" size={24} />
      <Text style={styles.text}>새 게시글 작성</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderBottomColor: '#cfd8dc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: 8,
  },
  pressed: {
    backgroundColor: '#eeeeee',
  },
});

export default WriteButton;
