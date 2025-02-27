import React, { useState, useEffect } from "react";
import { Box, Text, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CourseCard from "./components/CourseCard";
import AttendanceCalendar from "../attendance/components/AttendanceCalendar";
import coursesData from "./variables/courses.json";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function CoursesDashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedSession, setSelectedSession] = useState("January 2025 - April 2025");
  const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course

  useEffect(() => {
    // Filter courses based on the selected session
    const filteredCourses = coursesData.filter(
      (course) => course.session === selectedSession
    );
    setCourses(filteredCourses);
  }, [selectedSession]);

  return (
    <Box bg="#f7f9fc" minH="100vh" p="20px">
      <Box h="80px" /> {/* Spacer at the top */}

      {/* Breadcrumb */}
      <Flex align="center" mb="20px">
        <Button
          variant="link"
          fontSize="xl"
          fontWeight="bold"
          onClick={() => setSelectedCourse(null)} // Toggle back to course list
        >
          {selectedCourse ? `My Courses > ${selectedCourse.courseCode}` : "My Courses"}
        </Button>
      </Flex>

      {/* Dropdown to Select Session */}
      {!selectedCourse && (
        <Box mb="20px" display="flex" alignItems="center" gap="10px">
          <Text fontSize="md" fontWeight="bold" mb="0">
            Select Session:
          </Text>
          <DropdownButton
            id="dropdown-session"
            title={selectedSession}
            onSelect={(session) => setSelectedSession(session)}
            style={{ width: "250px" }} // Reduce dropdown width
            variant="outline-secondary" // Apply Bootstrap styling
          >
            <Dropdown.Item eventKey="January 2025 - April 2025">
              January 2025 - April 2025
            </Dropdown.Item>
            <Dropdown.Item eventKey="May 2025 - August 2025">
              May 2025 - August 2025
            </Dropdown.Item>
            <Dropdown.Item eventKey="September 2025 - December 2025">
              September 2025 - December 2025
            </Dropdown.Item>
            {/* Add more sessions as needed */}
          </DropdownButton>
        </Box>
      )}

      {/* Conditional Rendering */}
      {selectedCourse ? (
        // Detailed view with Attendance Calendar
        <Box bg="white" p="20px" rounded="xl" shadow="lg">
          
          {/* Attendance Calendar Component */}
          <AttendanceCalendar selectedCourse={selectedCourse} />
        </Box>
      ) : (
        // List of courses
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
          {courses.map((course) => (
            <Box
              key={course.id}
              onClick={() => setSelectedCourse(course)} // Set selected course
              cursor="pointer"
            >
              <CourseCard course={course} />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
