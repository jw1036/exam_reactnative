import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
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
  const filteredLog = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      logs={filteredLog}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSeletDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
