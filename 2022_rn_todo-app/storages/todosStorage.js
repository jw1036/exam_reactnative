import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'todos';

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error('No saed todos');
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
  async set(todos) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(todos));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};

export default todoStorage;
