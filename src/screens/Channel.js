import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';
import { subscribeMessages } from '../utils/firebase';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Channel = ({ navigation, route: { params } }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      const unsubscribe = subscribeMessages(params.id, snapshot => {
        const list = [];
        snapshot.forEach(doc => list.push(doc.data()));
        setMessages(list);
      });
      return () => unsubscribe();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.title || 'Channel' });
  }, []);

  return (
    <Container>
      <FlatList
        keyExtractor={item => item['id']}
        data={messages}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 24 }}>{item.text}</Text>
        )}
      />
    </Container>
  );
};

export default Channel;
