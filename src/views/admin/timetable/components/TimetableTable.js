import React from "react";
import "./TimetableTable.css";

const TimetableTable = ({ days, timeSlots, timetable }) => {
  const getCourseDetails = (day, timeSlot) => {
    const courses = timetable[day] || [];
    return courses.find((course) => course.time.includes(timeSlot));
  };

  const getCellStyle = (course) => {
    if (!course) return {};
    return {
      backgroundColor: "#e0f7fa",
      borderLeft: "4px solid #00796b"
    };
  };

  return (
    <div className="timetable-container">
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot) => (
            <tr key={timeSlot}>
              <td>{timeSlot}</td>
              {days.map((day) => {
                const course = getCourseDetails(day, timeSlot);
                return (
                  <td key={`${day}-${timeSlot}`} style={getCellStyle(course)}>
                    {course && (
                      <>
                        <div className="course-slot">
                          {course.courseName} ({course.courseCode})
                        </div>
                        <div className="course-details">
                          <div>Instructor: {course.instructor}</div>
                          <div>Venue: {course.venue}</div>
                          <div>Progress: {course.moduleProgress}</div>
                        </div>
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableTable;