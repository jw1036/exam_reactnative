import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function DetailScreen({route, navigation}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => navigation.navigate('Detail', {id: route.params.id + 1})}
      />
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
