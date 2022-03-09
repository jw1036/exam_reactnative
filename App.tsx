import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import {configureStore} from '@reduxjs/toolkit';
import PostsApp from './components/PostsApp';

const store = configureStore({reducer: rootReducer});

function App() {
  return (
    <Provider store={store}>
      {/* <AuthApp /> */}
      {/* <TodoApp /> */}
      <PostsApp />
    </Provider>
  );
}

export default App;
