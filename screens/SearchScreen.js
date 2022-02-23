import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchContext from '../contexts/SearchContext';

function SearchScreen() {
  const {keyword} = useContext(SearchContext);

  return (
    <View style={styles.block}>
      <Text>{keyword}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default SearchScreen;
