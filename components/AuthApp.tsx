import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function AuthStatus() {
  return (
    <View style={styles.status}>
      <Text style={styles.text}>AuthStatus</Text>
    </View>
  );
}

function AuthButtons() {
  return (
    <View>
      <Button title="로그인" onPress={() => {}} />
      <Button title="로그아웃" onPress={() => {}} />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default AuthApp;
