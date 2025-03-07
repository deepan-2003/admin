import React from "react";
import { Box, Text, Button, Flex, Badge } from "@chakra-ui/react";

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
      {/* Title */}
      <Text fontWeight="bold" fontSize="lg" mb="2">
        {assignment.title || "Untitled Assignment"}
      </Text>

      {/* Due Date and Status */}
      <Flex justifyContent="space-between" alignItems="center" mb="3">
        <Text fontSize="sm" color="gray.500">
          Due Date:{" "}
          {assignment.deadline
            ? new Date(assignment.deadline).toLocaleDateString()
            : "N/A"}
        </Text>
        <Badge
          colorScheme={
            assignment.status === "Handed In"
              ? "green"
              : assignment.status === "Not Handed In"
              ? "red"
              : "gray" // Default color for any other status
          }
          fontSize="0.8em"
          px="2"
          py="1"
          borderRadius="md"
        >
          {assignment.status || "Unknown Status"}
        </Badge>
      </Flex>

      {/* View Details Button */}
      <Button size="sm" colorScheme="blue" width="full" onClick={onViewDetails}>
        View Details
      </Button>
    </Box>
  );
}
