import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";

export default function InternalMarksTable({ marksData }) {
  return (
    <Box
      bg="white"
      p="20px"
      rounded="xl"
      shadow="lg"
      mt="20px"
      maxH="300px" // Set the maximum height
      overflowY="auto" // Enable vertical scrolling
    >
      <Text fontSize="xl" fontWeight="bold" mb="20px">
        Internal Marks
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Date</Th>
            <Th>Marks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {marksData.map((mark, index) => (
            <Tr key={index}>
              <Td>{mark.type}</Td>
              <Td>{mark.date}</Td>
              <Td>{mark.marks}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
