import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  sep: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default TodoList;
