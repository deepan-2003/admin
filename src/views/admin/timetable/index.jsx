import React from "react";
import TimetableTable from './components/TimetableTable';

import timetableData from "./variables/timetableData.json";
import courseData from "./variables/courseData.json";

function App() {
  return (
    <div>
      <TimetableTable timetableData={timetableData} courseData={courseData} />
    </div>
  );
}

export default App;
