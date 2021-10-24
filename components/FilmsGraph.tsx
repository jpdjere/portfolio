import { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { createDateMinus6Months, createDateWithDiff } from '../utils/client';

export const FilmsGraph = ({ filmsDate, changeSelectedDate, deleteSelectedDate }) => {
  const today = new Date();
  const [lastDay, setLastDay] = useState(today);
  const [firstDay, setFirstDay] = useState(createDateMinus6Months(today));

  const changeMonths = (monthsDiff: number) => {
    setLastDay(lastDay => createDateWithDiff(lastDay, monthsDiff));
    setFirstDay(firstDay => createDateWithDiff(firstDay, monthsDiff));
  }

  return (
		<div className="col-twelve">
      <CalendarHeatmap
        startDate={firstDay}
        endDate={lastDay}
        values={filmsDate}
        onMouseOver={(event, value) => changeSelectedDate(value)}
        onMouseLeave={(event, value) => deleteSelectedDate(null)}
        classForValue={(value) => {
          if (!value) {
            return 'color-scale-0';
          }
          return `color-scale-${value.count}`;
        }}
      />
      <div className="monthNavigation">
        <button className="button stroke" onClick={() => changeMonths(-3)}>
          <span className="icon">
            <i className="fab fa-arrow-left"></i>
          </span>
          See previous month
        </button>
        <button className="button stroke" onClick={() => changeMonths(3)}>
          See next month
          <span className="icon">
            <i className="fab fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  )

}