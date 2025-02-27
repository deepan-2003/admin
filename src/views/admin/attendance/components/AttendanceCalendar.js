import React, { useState, useEffect } from "react";
import { Box, Text, Badge, Avatar, VStack, Grid, GridItem } from "@chakra-ui/react";
import attendanceData from "../variables/attendanceData.json";

const AttendanceCalendar = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    // Load attendance data from JSON
    setAttendance(attendanceData);
  }, []);

  const renderCalendarCells = () => {
    const daysInMonth = new Date(2025, 2, 0).getDate(); // Example: February 2025
    const firstDay = new Date(2025, 1, 1).getDay(); // Example: Feb 1, 2025 (Saturday)

    const calendarCells = [];
    let dayCounter = 1;

    // Render empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      calendarCells.push(<GridItem key={`empty-${i}`} />);
    }

    // Render cells for each day of the month
    while (dayCounter <= daysInMonth) {
      const dayAttendance = attendance.filter(
        (record) => new Date(record.date).getDate() === dayCounter
      );

      calendarCells.push(
        <GridItem key={`day-${dayCounter}`} border="1px solid #E2E8F0" p={2} rounded="md">
          <Text fontWeight="bold">{dayCounter}</Text>
          {dayAttendance.map((record, index) => (
            <Box
              key={index}
              mt={2}
              p={2}
              bg={record.status === "Present" ? "green.100" : "red.100"}
              rounded="md"
            >
              <VStack align="start" spacing={1}>
                <Avatar size="sm" name={record.name} />
                <Text fontSize="sm">
                  <strong>Course:</strong> {record.course}
                </Text>
                <Text fontSize="sm">
                  <strong>Hours:</strong> {record.hours} hrs
                </Text>
                <Badge colorScheme={record.status === "Present" ? "green" : "red"}>
                  {record.status}
                </Badge>
              </VStack>
            </Box>
          ))}
        </GridItem>
      );

      dayCounter++;
    }

    return calendarCells;
  };

  return (
    <Box bg="white" p={6} rounded="md" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Attendance Calendar
      </Text>
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        <GridItem fontWeight="bold">Sun</GridItem>
        <GridItem fontWeight="bold">Mon</GridItem>
        <GridItem fontWeight="bold">Tue</GridItem>
        <GridItem fontWeight="bold">Wed</GridItem>
        <GridItem fontWeight="bold">Thu</GridItem>
        <GridItem fontWeight="bold">Fri</GridItem>
        <GridItem fontWeight="bold">Sat</GridItem>
        {renderCalendarCells()}
      </Grid>
    </Box>
  );
};

export default AttendanceCalendar;
