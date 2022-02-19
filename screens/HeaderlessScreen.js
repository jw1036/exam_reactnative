import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HeaderlessScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없네?</Text>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
