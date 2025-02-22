import { Box, Text, Flex, Button, VStack } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { renderTrack, renderThumb, renderView } from "../../../../components/scrollbar/Scrollbar";
import ProgressCircle from "./ProgressCircle";

const TodaysCourses = ({ courses }) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="lg"
      boxShadow="md"
      maxW="450px"
      mx="auto"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {courses.length > 1 ? "Today's Courses" : "Today's Course"}
      </Text>

      {/* Custom Scrollbar Integration */}
      <Scrollbars 
        autoHeight 
        autoHeightMax={500} 
        renderTrackVertical={renderTrack} 
        renderThumbVertical={renderThumb} 
        renderView={renderView}
      >
        <VStack spacing={4} align="stretch" px={2} py={1}>
          {courses.map((course, index) => (
            <Flex
              key={index}
              p={4}
              bg="gray.50"
              borderRadius="md"
              justify="space-between"
              align="center"
            >
              <Flex align="center">
                <ProgressCircle value={course.attendance} />
                <Box ml={4}>
                  <Text fontWeight="bold">{course.name}</Text>
                  <Text fontSize="sm" color="gray.600">
                    {course.lessons} lessons • {course.assignments} assignments
                  </Text>
                </Box>
              </Flex>

              <Flex gap={2}>
                <Button variant="outline" size="sm">
                  Skip
                </Button>
                <Button colorScheme="green" size="sm">
                  Continue
                </Button>
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Scrollbars>
    </Box>
  );
};

export default TodaysCourses;
