import React from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
