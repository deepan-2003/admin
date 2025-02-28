import React from "react";
import TimetableTable from "./components/TimetableTable";
import timetableData from "./variables/timetable.json";

const Timetable = () => {
  const { days, timeSlots, timetable } = timetableData;

  return (
    <div className="timetable-page">
      <h1>Timetable</h1>
      <TimetableTable days={days} timeSlots={timeSlots} timetable={timetable} />
    </div>
  );
};

export default Timetable;