import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { logout, getCurrentUser, updateUserPhoto } from '../utils/firebase';
import { ProgressContext, UserContext } from '../contexts';
import { Image, Button, Input } from '../components';
import { Alert } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

const Profile = () => {
  const { spinner } = useContext(ProgressContext);
  const theme = useContext(ThemeContext);

  const user = getCurrentUser();
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const handleLogoutButtonPress = async () => {
    try {
      spinner.start();
      await logout();
    } catch (e) {
      console.log('[Profile] logout: ', e.message);
    } finally {
      spinner.stop();
    }
  };

  const handlePhotoChange = async url => {
    try {
      spinner.start();
      const updatedUser = await updateUserPhoto(url);
      setPhotoUrl(updatedUser.photoUrl);
    } catch (e) {
      Alert.alert('Photo Error', e.message);
    } finally {
      spinner.stop();
    }
  };

  return (
    <Container>
      <Image
        url={photoUrl}
        onChangeImage={handlePhotoChange}
        showButton
        rounded
      />
      <Input label="Name" value={user.name} disabled />
      <Input label="Email" value={user.email} disabled />
      <Button
        title="logout"
        onPress={handleLogoutButtonPress}
        containerStyle={{ backgroundColor: theme.buttonLogout }}
      />
    </Container>
  );
};

export default Profile;
