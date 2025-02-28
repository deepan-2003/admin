import React, { useState, useEffect } from "react";
import { Box, Text, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CourseCard from "./components/CourseCard";
import AttendanceCalendar from "../attendance/components/AttendanceCalendar";
import AssignmentsCard from "./components/AssignmentsCard";
import InternalMarksTable from "./components/InternalMarksTable";
import coursesData from "./variables/courses.json";
import assignmentsData from "./variables/assignments.json";
import marksData from "./variables/internalMarksData.json";
import attendanceData from "../attendance/variables/attendanceData.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CoursesDashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedSession, setSelectedSession] = useState("January 2025 - April 2025");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseAttendance, setCourseAttendance] = useState(null);
  const [courseAssignments, setCourseAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null); // New state for selected assignment

  useEffect(() => {
    const filteredCourses = coursesData.filter(
      (course) => course.session === selectedSession
    );
    setCourses(filteredCourses);
  }, [selectedSession]);

  useEffect(() => {
    if (selectedCourse) {
      const attendance = attendanceData.find(
        (data) => data.courseId === selectedCourse.id
      );
      setCourseAttendance(attendance || null);

      const course = assignmentsData.find(
        (item) => item.courseId === selectedCourse.id
      );
      setCourseAssignments(course ? course.assignments : []);
    }
  }, [selectedCourse]);

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment); // Set the selected assignment
  };

  const handleBackToAssignments = () => {
    setSelectedAssignment(null); // Clear the selected assignment
  };

  return (
    <Box bg="#f7f9fc" minH="100vh" p="20px">
      <Box h="80px" />

      <Flex align="center" mb="20px">
        <Button
          variant="link"
          fontSize="xl"
          fontWeight="bold"
          onClick={() => {
            setSelectedCourse(null);
            setSelectedAssignment(null); // Clear selected assignment when going back
          }}
        >
          {selectedCourse ? `My Courses > ${selectedCourse.courseCode}` : "My Courses"}
        </Button>
      </Flex>

      {!selectedCourse && (
        <Box mb="20px" display="flex" alignItems="center" gap="10px">
          <Text fontSize="md" fontWeight="bold" mb="0">
            Select Session:
          </Text>
          <DropdownButton
            id="dropdown-session"
            title={selectedSession}
            onSelect={(session) => setSelectedSession(session)}
            style={{ width: "250px" }}
            variant="outline-secondary"
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
          </DropdownButton>
        </Box>
      )}

      {selectedCourse && !selectedAssignment ? (
        <Flex gap="20px" align="flex-start">
          <Box flex="1" bg="white" p="20px" rounded="xl" shadow="lg">
            <AttendanceCalendar selectedCourse={selectedCourse} attendance={courseAttendance} />
          </Box>

          <Box flex="1" maxH="400px" bg="white" p="20px" rounded="xl" shadow="lg" overflowY="auto">
            <Text fontSize="xl" fontWeight="bold" mb="20px">
              Assignments for {selectedCourse.title}
            </Text>
            {courseAssignments.length > 0 ? (
              <SimpleGrid columns={1} spacing="20px">
                {courseAssignments.map((assignment) => (
                  <AssignmentsCard
                    key={assignment.id}
                    assignment={assignment}
                    onViewDetails={() => handleViewDetails(assignment)} // Pass the handler
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Text>No assignments available for this course.</Text>
            )}
          </Box>
        </Flex>
      ) : selectedAssignment ? (
        <Box bg="white" p="20px" rounded="xl" shadow="lg">
          <Button size="sm" colorScheme="blue" mb="4" onClick={handleBackToAssignments}>
            Back to Assignments
          </Button>
          <Text fontWeight="bold" fontSize="2xl" mb="4">
            {selectedAssignment.title}
          </Text>
          <Text fontSize="lg" color="gray.500" mb="4">
            Due Date: {selectedAssignment.deadline ? new Date(selectedAssignment.deadline).toLocaleDateString() : "N/A"}
          </Text>
          <Text fontSize="md" mb="4" color="gray.700">
            {selectedAssignment.description}
          </Text>
          <Text fontSize="sm" color="gray.600">
            Status: {selectedAssignment.status}
          </Text>
          <Button mt="4" colorScheme="blue" onClick={() => alert(`Submitting ${selectedAssignment.title}`)}>
            Submit Assignment
          </Button>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
          {courses.map((course) => (
            <Box
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              cursor="pointer"
            >
              <CourseCard course={course} />
            </Box>
          ))}
        </SimpleGrid>
      )}

      {/* Internal Marks Table */}
      {selectedCourse && !selectedAssignment && <InternalMarksTable marksData={marksData} />}
    </Box>
  );
}