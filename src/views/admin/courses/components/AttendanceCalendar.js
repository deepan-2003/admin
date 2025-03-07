import React, { useState, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Text, Flex, Tag } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

const AttendanceCalendar = ({ selectedCourse, attendance }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Month navigation handlers
  const handlePreviousMonth = () =>
    setCurrentDate(moment(currentDate).subtract(1, "month").toDate());
  const handleNextMonth = () =>
    setCurrentDate(moment(currentDate).add(1, "month").toDate());

  // Filter attendance records and calculate summaries
  const { filteredEvents, monthlySummary, courseSummary } = useMemo(() => {
    const currentMonth = moment(currentDate).format("YYYY-MM");
    const filteredRecords = (attendance?.attendanceRecords || []).filter(
      (record) => moment(record.date).format("YYYY-MM") === currentMonth
    );

    const totalHours = filteredRecords.reduce((sum, record) => sum + record.hours, 0);
    const attendedHours = filteredRecords
      .filter((record) => record.present)
      .reduce((sum, record) => sum + record.hours, 0);

    const courseTotalHours = attendance?.attendanceRecords.reduce(
      (sum, record) => sum + record.hours,
      0
    );
    const courseAttendedHours = attendance?.attendanceRecords
      .filter((record) => record.present)
      .reduce((sum, record) => sum + record.hours, 0);

    return {
      filteredEvents: filteredRecords.map((record) => ({
        title: `${record.present ? "Present" : "Absent"} (${record.hours}h)`,
        start: new Date(record.date),
        end: new Date(record.date),
        present: record.present,
        hours: record.hours,
      })),
      monthlySummary: { totalHours, attendedHours },
      courseSummary: { totalHours: courseTotalHours, attendedHours: courseAttendedHours },
    };
  }, [attendance, currentDate]);

  // Event styling
  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.present
        ? "rgba(144, 238, 144, 0.8)" // Light green
        : "rgba(255, 182, 193, 0.8)", // Light red
      borderLeft: `4px solid ${event.present ? "#006400" : "#8B0000"}`, // Darker left border
      borderRadius: "4px",
      color: "#000",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
    },
  });

  // Day styling
  const dayPropGetter = (date) => {
    const recordForDate = attendance?.attendanceRecords.find(
      (record) => moment(record.date).isSame(date, "day")
    );

    if (recordForDate) {
      return {
        style: {
          backgroundColor: recordForDate.present ? "#d4fdd4" : "#ffd6d6", // Light green for present, light red for absent
        },
      };
    }

    return {};
  };

  // Custom toolbar with styling
  const CustomToolbar = () => (
    <Flex justify="space-between" align="center" mb={4} p={2} bg="gray.100" borderRadius="md">
      <button onClick={handlePreviousMonth} className="nav-button">
        &lt;
      </button>
      <Text fontSize="lg" fontWeight="bold" color="blue.600">
        {moment(currentDate).format("MMMM YYYY")}
      </Text>
      <button onClick={handleNextMonth} className="nav-button">
        &gt;
      </button>
    </Flex>
  );

  return (
    <Box flex="1" bg="white" rounded="xl">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Attendance for {selectedCourse.title}
      </Text>

      <Flex gap={3} mb={4}>
        <Tag colorScheme="blue" fontSize="md" px={3} py={2}>
          Total: {courseSummary.attendedHours}/{courseSummary.totalHours} hours
        </Tag>
        <Tag colorScheme="green" fontSize="md" px={3} py={2}>
          This Month: {monthlySummary.attendedHours}/{monthlySummary.totalHours} hours
        </Tag>
      </Flex>

      <CustomToolbar />
      <Box height="300px">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          eventPropGetter={eventStyleGetter}
          dayPropGetter={dayPropGetter} // Apply day-level styling
          views={["month"]}
          defaultView="month"
          date={currentDate}
          onNavigate={setCurrentDate}
          toolbar={false}
        />
      </Box>
    </Box>
  );
};

export default AttendanceCalendar;
