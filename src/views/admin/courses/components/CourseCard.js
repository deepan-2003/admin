import React from "react";
import { Box, Text, Flex, Image, Link, Badge } from "@chakra-ui/react";

export default function CourseCard({ course }) {
  const hasPendingAssignments = course.assignmentsPending > 0;

  return (
    <Box
      bg="white"
      p="20px"
      rounded="xl"
      shadow="lg"
      border="1px"
      borderColor={hasPendingAssignments ? "red.300" : "gray.200"}
      transition="0.3s ease-in-out"
      _hover={{ transform: "scale(1.02)", shadow: "2xl" }}
    >
      {/* Course Title and Code */}
      <Flex justify="space-between" align="center" mb="5px">
        <Text fontWeight="bold" fontSize="xl" color="blue.600">
          {course.title}
        </Text>
        <Badge colorScheme="purple" fontSize="0.8rem">
          {course.courseCode}
        </Badge>
      </Flex>

      {/* Faculty Image and Name */}
      <Flex align="center" mb="15px">
        <Link
          href={`https://example.com/faculty/${course.faculty.replace(/\s+/g, "-").toLowerCase()}`}
          isExternal
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt={course.faculty}
            boxSize="50px"
            borderRadius="full"
            mr="10px"
            cursor="pointer"
            border="2px solid"
            borderColor="blue.500"
            _hover={{ transform: "scale(1.1)" }}
            transition="0.2s ease-in-out"
          />
        </Link>
        <Text fontSize="sm" fontWeight="semibold" color="gray.700">
          Faculty: {course.faculty}
        </Text>
      </Flex>

      {/* Assignments Pending and Classes Attended */}
      <Flex justify="space-between" align="center" fontSize="sm" mb="10px">
        <Text color={hasPendingAssignments ? "red.500" : "green.500"} fontWeight="bold">
          Assignments Pending: {course.assignmentsPending}
        </Text>
        <Text color="blue.600" fontWeight="bold">
          Classes Attended: {course.classesAttended}/{course.totalClasses}
        </Text>
      </Flex>

     
    </Box>
  );
}
