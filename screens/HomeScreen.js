import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '집'});
  }, [navigation]);

  return (
    <SafeAreaView>
      <View>
        <Button
          title="Detail 1 열기"
          onPress={() => navigation.push('Detail', {id: 1})}
        />
        <Button
          title="Detail 2 열기"
          onPress={() => navigation.push('Detail', {id: 2})}
        />
        <Button
          title="Detail 3 열기"
          onPress={() => navigation.push('Detail', {id: 3})}
        />
        <Button
          title="Headerless 열기"
          onPress={() => navigation.push('Headerless')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
