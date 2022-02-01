import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Channel = ({ route }) => {
  return (
    <Container>
      <Text>ID: {route.params?.id}</Text>
      <Text>Title: {route.params?.title}</Text>
    </Container>
  );
};

export default Channel;
