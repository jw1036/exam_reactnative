import React, {useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import PostCard from '../components/PostCard';
import usePosts from '../hooks/usePosts';
import events from '../lib/events';

function FeedScreen() {
  const {posts, noMorePost, refreshing, onLoadMore, onRefresh} = usePosts();

  useEffect(() => {
    events.addListener('refresh', onRefresh);
    return () => {
      events.removeListener('refresh', onRefresh);
    };
  }, [onRefresh]);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
}

const renderItem = ({item}) => (
  <PostCard
    createdAt={item.createdAt}
    description={item.description}
    id={item.id}
    user={item.user}
    photoURL={item.photoURL}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
});

export default FeedScreen;
