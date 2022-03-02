import React from 'react';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

function SignButtons({isSignUp, onSubmit}) {
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
  buttons: {
    marginTop: 64,
  },
});

export default SignButtons;
