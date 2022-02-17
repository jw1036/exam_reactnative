import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';

function App() {
  const today = new Date();

  return (
    <SafeAreaView>
      <DateHead date={today} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
