import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const Signup = () => {
  return (
    <Container>
      <Text style={{ fontSize: 30 }}>Signup</Text>
    </Container>
  );
};

export default Signup;
