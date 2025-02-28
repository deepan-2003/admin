import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function AssignmentDetails({ assignment }) {
  if (!assignment) {
    return <Text>No assignment selected.</Text>;
  }

  return (
    <Box>
      <Text fontWeight="bold" fontSize="2xl" mb="4">
        {assignment.title}
      </Text>
      <Text fontSize="lg" color="gray.500" mb="4">
        Due Date: {assignment.deadline ? new Date(assignment.deadline).toLocaleDateString() : "N/A"}
      </Text>
      <Text fontSize="md" mb="4" color="gray.700">
        {assignment.description}
      </Text>
      <Text fontSize="sm" color="gray.600">
        Status: {assignment.status}
      </Text>
      <Button mt="4" colorScheme="blue" onClick={() => alert(`Submitting ${assignment.title}`)}>
        Submit Assignment
      </Button>
    </Box>
  );
}