import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { Image, Input, Button } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { removeWhitespace, validateEmail } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { login } from '../utils/firebase';
import { Alert } from 'react-native';
import { ProgressContext, UserContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Login = ({ navigation }) => {
  const { spinner } = useContext(ProgressContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const insets = useSafeAreaInsets();

  const handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email'
    );
  };

  const handlePasswordChange = password => {
    const changedPassword = removeWhitespace(password);
    setPassword(changedPassword);
  };

  const handleLoginButtonPress = async () => {
    try {
      spinner.start();
      const user = await login({ email, password });
    } catch (e) {
      Alert.alert('Login Error', e.message);
    } finally {
      spinner.stop();
    }
  };

  const handleSignupButtonPress = () => {
    navigation.navigate('Signup');
  };

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container insets={insets}>
        <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />

        <Input
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          onSubmitEditing={handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />

        <ErrorText>{errorMessage}</ErrorText>

        <Button
          title="Login"
          onPress={handleLoginButtonPress}
          disabled={disabled}
        />

        <Button
          title="Sign up with email"
          onPress={handleSignupButtonPress}
          isFilled={false}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
