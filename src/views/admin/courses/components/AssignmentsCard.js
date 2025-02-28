import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function AssignmentsCard({ assignment, onViewDetails }) {
  if (!assignment) {
    return null; // Return nothing if assignment is undefined
  }

  return (
    <Box
      bg="white"
      p="15px"
      shadow="md"
      borderRadius="lg"
      transition="0.2s ease-in-out"
      _hover={{ shadow: "lg", transform: "scale(1.05)" }}
    >
      {/* Assignment Title */}
      <Text fontWeight="bold" fontSize="lg" mb="2">
        {assignment.title || "Untitled Assignment"}
      </Text>

      {/* Assignment Due Date */}
      <Text fontSize="sm" color="gray.500" mb="2">
        Due Date: {assignment.deadline ? new Date(assignment.deadline).toLocaleDateString() : "N/A"}
      </Text>

      {/* Button to View Assignment Details */}
      <Button size="sm" colorScheme="blue" onClick={onViewDetails}>
        View Details
      </Button>
    </Box>
  );
}