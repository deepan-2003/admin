import React, { useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Flex,
  Text,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";

export default function InternalMarksTabbed({ marksData }) {
  // Calculate the total marks
  const totalMarks = marksData.reduce((sum, mark) => sum + mark.marks, 0);

  // Group marks by type
  const marksByType = marksData.reduce((grouped, mark) => {
    if (!grouped[mark.type]) grouped[mark.type] = [];
    grouped[mark.type].push(mark);
    return grouped;
  }, {});

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      bg={bgColor}
      p="20px"
      rounded="xl"
      shadow="lg"
      mt="20px"
      maxH="500px"
      overflowY="auto"
    >
      {/* Total Marks Section */}
      <Flex
        justify="space-between"
        align="center"
        mb="20px"
        bg="blue.50"
        p="15px"
        rounded="lg"
        shadow="sm"
      >
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          Total Marks
        </Text>
        <Tag size="lg" colorScheme="blue" fontWeight="bold">
          {totalMarks} Marks
        </Tag>
      </Flex>

      {/* Tabs Section */}
      <Tabs variant="enclosed" colorScheme="blue">
        <TabList>
          <Tab>Total Marks</Tab>
          {Object.keys(marksByType).map((type, index) => (
            <Tab key={index}>{type}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {/* Total Marks Panel */}
          <TabPanel>
            <VStack spacing="10px" align="stretch">
              {marksData.map((mark, index) => (
                <Flex
                  key={index}
                  align="center"
                  bg="gray.50"
                  p="15px"
                  rounded="lg"
                  shadow="md"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={textColor}
                    minWidth="150px" // Ensure a fixed width for alignment
                    textAlign="left"
                  >
                    {mark.type}
                  </Text>
                  <Text fontSize="md" color="gray.500" flex="1">
                    Date: {mark.date}
                  </Text>
                  <Text fontSize="md" fontWeight="bold" color="green.500">
                    Marks: {mark.marks}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </TabPanel>

          {/* Marks by Type Panels */}
          {Object.entries(marksByType).map(([type, marks], index) => (
            <TabPanel key={index}>
              <VStack spacing="10px" align="stretch">
                {marks.map((mark, i) => (
                  <Flex
                    key={i}
                    align="center"
                    bg="gray.50"
                    p="15px"
                    rounded="lg"
                    shadow="md"
                  >
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      color={textColor}
                      minWidth="150px" // Ensure a fixed width for alignment
                      textAlign="left"
                    >
                      {mark.type}
                    </Text>
                    <Text fontSize="md" color="gray.500" flex="1">
                      Date: {mark.date}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" color="green.500">
                      Marks: {mark.marks}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
