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
          {timeSlots.map((timeSlot, rowIndex) => (
            <tr key={timeSlot}>
              <td>{timeSlot}</td>
              {days.map((day) => {
                const course = getCourseDetails(day, timeSlot);
                return (
                  <td
                    key={`${day}-${timeSlot}`}
                    style={getCellStyle(course)}
                    rowSpan={course && course.time === timeSlot ? 2 : 1}
                  >
                    {course && (
                      <div className="course-details">
                        <div className="course-name">{course.courseName}</div>
                        <div className="course-code">{course.courseCode}</div>
                        <div className="venue">{course.venue}</div>
                      </div>
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
