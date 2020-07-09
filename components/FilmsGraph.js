import { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { createDateMinus6Months, createDateWithDiff } from '../utils/client';

export const FilmsGraph = ({ films, changeSelectedDate }) => {
  const today = new Date();
  const [lastDay, setLastDay] = useState(today);
  const [firstDay, setFirstDay] = useState(createDateMinus6Months(today));

  const changeMonths = (monthsDiff) => {
    setLastDay(lastDay => createDateWithDiff(lastDay, monthsDiff));
    setFirstDay(firstDay => createDateWithDiff(firstDay, monthsDiff));
  }

  return (
		<div className="col-twelve">
      <CalendarHeatmap
        startDate={firstDay}
        endDate={lastDay}
        values={films}
        onMouseOver={(event, value) => changeSelectedDate(value)}
        classForValue={(value) => {
          if (!value) {
            return 'color-scale-0';
          }
          return `color-scale-${value.count}`;
        }}
      />
      <button onClick={() => changeMonths(-3)}>See previous month</button>
      <button onClick={() => changeMonths(3)}>See next month</button>
    </div>
  )

}