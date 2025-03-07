import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Button,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CourseCard from "./components/CourseCard";
import AttendanceCalendar from "./components/AttendanceCalendar";
import AssignmentsCard from "./components/AssignmentsCard";
import InternalMarksTable from "./components/InternalMarksTable";
import AssignmentDetails from "./components/AssignmentDetails";
import coursesData from "./variables/courses.json";
import assignmentsData from "./variables/assignments.json";
import marksData from "./variables/internalMarksData.json";
import attendanceData from "./variables/attendanceData.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CoursesDashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedSession, setSelectedSession] = useState("January 2025 - April 2025");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseAttendance, setCourseAttendance] = useState(null);
  const [courseAssignments, setCourseAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

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

      // Directly check the courseId in assignmentsData
      if (assignmentsData.courseId === selectedCourse.id) {
        setCourseAssignments(assignmentsData.assignments || []);
      } else {
        setCourseAssignments([]);
      }
    }
  }, [selectedCourse]);

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment); // Show assignment details
  };

  const handleBackToAssignments = () => {
    setSelectedAssignment(null); // Go back to assignment list
  };

  // Helper to reset everything:
  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedAssignment(null);
  };

  return (
    <Box bg="#f7f9fc" minH="100vh" p="20px">
      <Box h="80px" />

      {/* =============== DYNAMIC BREADCRUMB =============== */}
      <Breadcrumb fontSize="sm" mb={6}>
        {/* "My Courses" is always the first breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink onClick={handleBackToCourses}>
            My Courses
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* If a course is selected, show that as the next item */}
        {selectedCourse && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={handleBackToAssignments}>
              {selectedCourse.courseCode}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {/* If an assignment is selected, show "Assignments" and the assignment title */}
      {selectedAssignment && (
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink
    
    >
      Assignments - {selectedAssignment.title}
    </BreadcrumbLink>
  </BreadcrumbItem>
)}


      </Breadcrumb>

      {/* Session Selector (only visible if no course is selected) */}
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
          {/* Attendance */}
          <Box flex="1" bg="white" p="20px" rounded="xl" shadow="lg">
            <AttendanceCalendar
              selectedCourse={selectedCourse}
              attendance={courseAttendance}
            />
          </Box>

          {/* Assignments List */}
          <Box height ="500px"
            flex="1"
            maxH="500px"
            bg="white"
            p="20px"
            rounded="xl"
            shadow="lg"
            overflowY="auto"
          >
            <Text fontSize="xl" fontWeight="bold" mb="20px">
              Assignments for {selectedCourse.title}
            </Text>
            {courseAssignments.length > 0 ? (
              <SimpleGrid columns={1} spacing="20px">
                {courseAssignments.map((assignment) => (
                  <AssignmentsCard
                    key={assignment.id}
                    assignment={assignment}
                    onViewDetails={() => handleViewDetails(assignment)}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Text>No assignments available for this course.</Text>
            )}
          </Box>
        </Flex>
      ) : selectedAssignment ? (
        // Show single assignment details
        <AssignmentDetails
          assignmentId={selectedAssignment.id}
          // If you need the "Back" button inside AssignmentDetails,
          // pass onBack={handleBackToAssignments}, but it's optional
        />
      ) : (
        // Show course cards if no course is selected
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

      {/* Internal Marks Table (only if a course is selected, but not an assignment) */}
      {selectedCourse && !selectedAssignment && (
        <InternalMarksTable marksData={marksData} />
      )}
    </Box>
  );
}
