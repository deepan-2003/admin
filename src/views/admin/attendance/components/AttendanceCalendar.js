import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "assets/css/MiniCalendar.css";
import { Text, Icon, Box, Select } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Chakra imports
import Card from "components/card/Card.js"; // Custom components

export default function AttendanceCalendar(props) {
  const { ...rest } = props;
  const [selectedCourse, setSelectedCourse] = useState(""); // State for selected course
  const [value, onChange] = useState(new Date());

  // Sample attendance data for courses
  const courseAttendanceData = {
    Mathematics: {
      "2025-02-20": "present",
      "2025-02-21": "absent",
      "2025-02-22": "present",
    },
    Physics: {
      "2025-02-19": "absent",
      "2025-02-20": "present",
      "2025-02-21": "present",
    },
    "Computer Science": {
      "2025-02-18": "present",
      "2025-02-19": "present",
      "2025-02-20": "absent",
    },
  };

  // Get attendance data for the selected course
  const attendance = selectedCourse ? courseAttendanceData[selectedCourse] : {};

  // Highlight attendance days with colors
  const getTileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (attendance[formattedDate] === "present") {
      return "present-day";
    }
    if (attendance[formattedDate] === "absent") {
      return "absent-day";
    }
    return "";
  };

  return (
    <Box>
      {/* Updated Header */}
      <Text fontSize="2xl" fontWeight="bold" mb="4" color="blue.500" mt="20">
        Attendance Calendar
      </Text>

      {/* Course Dropdown */}
      <Box mb="6">
        <Text fontSize="lg" fontWeight="medium" color="gray.700" mb="2">
          Select a Course:
        </Text>
        <Select
          placeholder="Select a course"
          onChange={(e) => setSelectedCourse(e.target.value)}
          value={selectedCourse}
          bg="white"
          border="1px solid #e2e8f0"
          borderRadius="md"
          w="300px"
        >
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Computer Science">Computer Science</option>
        </Select>
      </Box>

      {selectedCourse && (
        <>
          {/* Attendance Calendar */}
          <Card
            align="center"
            direction="column"
            w="100%"
            maxW="max-content"
            p="20px 15px"
            h="max-content"
            {...rest}
          >
            <Calendar
              onChange={onChange}
              value={value}
              tileClassName={getTileClassName}
              prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
              nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
            />
          </Card>

          {/* Attendance Summary */}
          <Box mt="6" p="4" border="1px solid #e2e8f0" borderRadius="md">
            <Text fontSize="lg" fontWeight="medium" color="gray.700">
              Attendance Summary for {selectedCourse}:
            </Text>
            <Text fontSize="md" mt="2" color="green.500">
              Present:{" "}
              {Object.entries(attendance)
                .filter(([date, status]) => new Date(date) <= new Date() && status === "present")
                .length}{" "}
              days
            </Text>
            <Text fontSize="md" mt="1" color="red.500">
              Absent:{" "}
              {Object.entries(attendance)
                .filter(([date, status]) => new Date(date) <= new Date() && status === "absent")
                .length}{" "}
              days
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}
