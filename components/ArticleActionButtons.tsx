import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {RootStackNavigationProp} from '../screens/types';

export interface ArticleActionButtonsProps {
  articleId: number;
}

function ArticleActionButtons({articleId}: ArticleActionButtonsProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPressModify = () => {
    navigation.navigate('Write', {articleId});
  };
  const onPressRemove = () => {
    // TOOD: 구현 예정
  };

  return (
    <View style={styles.block}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={onPressModify}>
        <Text style={styles.buttonText}>수정</Text>
      </Pressable>
      <View style={styles.separator} />
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={onPressRemove}>
        <Text style={styles.buttonText}>삭제</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: -16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  separator: {
    width: 8,
  },
  buttonText: {
    color: '#2196f3',
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default ArticleActionButtons;
