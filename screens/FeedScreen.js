import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostCard from '../components/PostCard';
import {getPosts} from '../lib/posts';

function FeedScreen() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
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

export default FeedScreen;
