import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {RootStackParamList} from './types';
import {useQuery} from 'react-query';
import {getArticle} from '../api/articles';
import {getComments} from '../api/comments';
import ArticleView from '../components/ArticleView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommentItem from '../components/CommentItem';
import {useUserState} from '../contexts/UserContext';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
  const {params} = useRoute<ArticleScreenRouteProp>();
  const {id} = params;
  const [currentUser] = useUserState();

  const articleQuery = useQuery(['article', id], () => getArticle(id));
  const commentsQuery = useQuery(['comments', id], () => getComments(id));

  const {bottom} = useSafeAreaInsets();

  if (!articleQuery.data || !commentsQuery.data) {
    return (
      <ActivityIndicator size="large" style={styles.spinner} color="black" />
    );
  }

  const {title, body, published_at, user} = articleQuery.data;
  const isMyArticle = currentUser?.id === user.id;

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={[styles.flatListContent, {paddingBottom: bottom}]}
      data={commentsQuery.data}
      renderItem={({item}) => (
        <CommentItem
          id={item.id}
          message={item.message}
          publishedAt={item.published_at}
          username={item.user.username}
        />
      )}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={
        <ArticleView
          title={title}
          body={body}
          publishedAt={published_at}
          username={user.username}
          id={id}
          isMyArticle={isMyArticle}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
});

export default ArticleScreen;
