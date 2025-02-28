import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../../../assets/css/AttendanceCalendar.css";

const localizer = momentLocalizer(moment);

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to handle month navigation
  const handlePreviousMonth = () => {
    const newDate = moment(currentDate).subtract(1, "month").toDate();
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = moment(currentDate).add(1, "month").toDate();
    setCurrentDate(newDate);
  };

  const events = [
    {
      title: "2 hrs",
      start: new Date(2025, 1, 27, 9, 0),
      end: new Date(2025, 1, 27, 17, 0),
      color: "#008000", // Dark green
    },
    {
      title: "1 hr",
      start: new Date(2025, 1, 28, 9, 0),
      end: new Date(2025, 1, 28, 17, 0),
      color: "#FF0000", // Red
    },
  ];

  // Calculate attendance summary
  const totalClasses = events.length; // Total number of events
  const attendedClasses = events.filter((event) => event.color === "#008000").length; // Filter events marked as attended (green)

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: `${event.color}33`, // Light shade for background
      borderLeft: `5px solid ${event.color}`, // Dark border line
      color: "white",
      padding: "0", // Remove padding
      margin: "2px 0", // Small margin between events
      borderRadius: "3px", // Rounded corners
      overflow: "hidden", // Prevent content overflow
      textOverflow: "ellipsis", // Ellipsis for long text
      whiteSpace: "nowrap", // Prevent wrapping
    };
    return { style };
  };

  const customEventRenderer = (event) => (
    <div className="custom-event">
      <span className="event-text">{event.title}</span>
    </div>
  );

  const CustomToolbar = () => {
    const formattedDate = moment(currentDate).format("MMMM YYYY");

    return (
      <div className="custom-toolbar">
        <button onClick={handlePreviousMonth} className="nav-button">
          &lt; {/* Left arrow */}
        </button>
        <span className="toolbar-label">{formattedDate}</span>
        <button onClick={handleNextMonth} className="nav-button">
          &gt; {/* Right arrow */}
        </button>
      </div>
    );
  };

  return (
    <div style={{ width: "90%", margin: "20px" }}>
      {/* Attendance Summary */}
      <div style={{ marginBottom: "20px", fontSize: "16px", fontWeight: "bold" }}>
        Attendance Summary: {attendedClasses} / {totalClasses} classes attended
      </div>
      <CustomToolbar />
      <div style={{ height: "400px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: "90%",
            fontSize: "12px",
          }}
          eventPropGetter={eventStyleGetter}
          components={{
            event: customEventRenderer,
          }}
          views={["month"]} // Only show the month view
          defaultView="month" // Set the default view to month
          date={currentDate} // Set the controlled date
          onNavigate={(newDate) => setCurrentDate(newDate)} // Sync date when navigating
          toolbar={false} // Disable the default toolbar
        />
      </div>
    </div>
  );
};

export default AttendanceCalendar;