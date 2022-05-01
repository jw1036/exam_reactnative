import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function IDText() {
  const route = useRoute();

  return <Text style={styles.text}>id: {route.params.id}</Text>;
}

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({title: `상세한 정보 - ${route.params.id}`});
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      <IDText />
      <View>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
