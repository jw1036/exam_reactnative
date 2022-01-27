import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const ChannelList = ({ navigation }) => {
  return (
    <Container>
      <Text>Channel List</Text>
      <Button
        title="Channel Creation"
        onPress={() => navigation.navigate('Channel Creation')}
      />
    </Container>
  );
};

export default ChannelList;
