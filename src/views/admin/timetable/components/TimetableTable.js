import {
  Avatar,
  Box,
  Flex,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import "../../../../assets/css/Timetable.css";

export default function TimetableTable({ timetableData = {}, courseData = [] }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const { days = [], classCodes = [], timeSlots = [] } = timetableData;

  // Create a lookup for course names by code
  const courseNameLookup = courseData.reduce((lookup, course) => {
    lookup[course.code] = course.title || "Unknown Course Name";
    return lookup;
  }, {});

  // Extract all unique course codes from timetableData
  const courseCodesInTimetable = new Set(
    classCodes.flat().filter((code) => code) // Flatten the array and filter out empty codes
  );

  // Filter courseData to only include courses present in timetableData
  const uniqueCourseData = courseData.filter((course) =>
    courseCodesInTimetable.has(course.code)
  );

  return (
    <Box w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
      {/* Timetable Card */}
      <Card
        flexDirection="column"
        w="100%"
        px="20px"
        py="20px"
        rounded="2xl"
        overflowX="auto"
        mb="30px"
        mt="80px" // Add this line to move the card down
      >
        
        <Text fontSize="xl" fontWeight="bold" mb="20px" color={textColor}>
          Timetable
        </Text>
        <Table variant="simple" color="gray.500">
          <Thead>
            <Tr>
              <Th borderColor={borderColor} color="gray.400">
                Day
              </Th>
              {timeSlots.map((slot, index) => (
                <Th key={index} borderColor={borderColor} color="gray.400">
                  {slot}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {days.map((day, dayIndex) => (
              <Tr key={dayIndex}>
                <Td
                  fontSize="sm"
                  fontWeight="700"
                  color={textColor}
                  borderColor={borderColor}
                >
                  {day}
                </Td>
                {(classCodes[dayIndex] || []).map((code, codeIndex) => (
                  <Td
                    key={codeIndex}
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    {/* Add a Tooltip for the course code */}
                    <Tooltip
                      label={courseNameLookup[code] || "Course not found"}
                      aria-label="Course Name"
                      hasArrow
                      bg="blue.500"
                      color="white"
                      placement="top"
                      fontSize="sm"
                      p="4"
                      borderRadius="lg"
                    >
                      <span>{code || "N/A"}</span>
                    </Tooltip>
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>

      {/* Course Information Card */}
      <Card
        flexDirection="column"
        w="100%"
        px="20px"
        py="20px"
        rounded="2xl"
        overflowX="auto"
      >
        <Text fontSize="xl" fontWeight="bold" mb="20px" color={textColor}>
          Course Information
        </Text>
        {/* Add a Box for scrollable table */}
        <Box maxH="300px" overflowY="scroll" className="scrollable-table">
          <Table variant="simple" color="gray.500">
            <Thead>
              <Tr>
                <Th borderColor={borderColor} color="gray.400">
                  Course Code
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Title
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Category
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Contact Periods
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Credits
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Coordinator
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {uniqueCourseData.map((course, index) => (
                <Tr key={index}>
                  <Td
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    {course.code || "N/A"}
                  </Td>
                  <Td
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    {course.title || "N/A"}
                  </Td>
                  <Td
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    {course.category || "N/A"}
                  </Td>
                  <Td
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    {course.contactPeriods || "N/A"}
                  </Td>
                  <Td
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    {course.credits || "N/A"}
                  </Td>
                  <Td
                    fontSize="sm"
                    fontWeight="700"
                    color={textColor}
                    borderColor={borderColor}
                  >
                    <Flex align="center">
                      <Avatar
                        size="sm"
                        src={course.coordinatorPic || ""}
                        borderRadius="full"
                        mr="8px"
                      />
                      {course.coordinatorPage ? (
                        <Link
                          href={course.coordinatorPage}
                          color="blue.500"
                          fontWeight="700"
                          isExternal
                        >
                          {course.coordinatorName || "N/A"}
                        </Link>
                      ) : (
                        <Text color={textColor}>
                          {course.coordinatorName || "N/A"}
                        </Text>
                      )}
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Card>
    </Box>
  );
}
