import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RootStackParamList} from './types';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
  const {params} = useRoute<ArticleScreenRouteProp>();

  return (
    <View style={styles.block}>
      <Text>{params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default ArticleScreen;
