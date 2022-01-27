import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { logout } from '../utils/firebase';
import { UserContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Profile = () => {
  const { dispatch } = useContext(UserContext);

  const handleLogoutButtonPress = async () => {
    try {
      await logout();
    } catch (e) {
      console.log('[Profile] logout: ', e.message);
    } finally {
      dispatch({});
    }
  };

  return (
    <Container>
      <Text>Profile</Text>
      <Button title="logout" onPress={handleLogoutButtonPress} />
    </Container>
  );
};

export default Profile;
