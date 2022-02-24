import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = logs.reduce((acc, cur) => {
    const formatedDate = format(new Date(cur.date), 'yyyy-MM-dd');
    acc[formatedDate] = {marked: true};
    return acc;
  }, {});

  return (
    <CalendarView
      markedDates={markedDates}
      selectedDate={selectedDate}
      onSeletDate={setSelectedDate}
    />
  );
}

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
