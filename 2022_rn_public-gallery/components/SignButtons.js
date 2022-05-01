import React from 'react';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function SignButtons({isSignUp, onSubmit, loading}) {
  const navigation = useNavigation();

  const primaryTitle = isSignUp ? '회원인증' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원인증';

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack();
    } else {
      navigation.push('SignIn', {isSignUp: true});
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.buttons}>
      <CustomButton
        onPress={() => onSubmit()}
        title={primaryTitle}
        hasMarginBottom
      />
      <CustomButton
        onPress={() => onSecondaryButtonPress()}
        title={secondaryTitle}
        theme="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 64,
  },
});

export default SignButtons;
