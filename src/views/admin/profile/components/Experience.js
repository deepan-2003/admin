import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
  Text,
  Badge,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const Experience = ({ experiences, isEditing, onUpdate }) => {
  const [editableExperiences, setEditableExperiences] = useState(experiences);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...editableExperiences];
    updatedExperiences[index][field] = value;
    setEditableExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setEditableExperiences([
      ...editableExperiences,
      { role: "", company: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = editableExperiences.filter((_, i) => i !== index);
    setEditableExperiences(updatedExperiences);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaBriefcase} color="blue.500" mr={2} /> Experience
      </Heading>

      <VStack align="start" spacing={5} w="full">
        {editableExperiences.map((exp, index) => (
          <HStack
            key={index}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            w="full"
            bg="gray.50"
          >
            <Icon as={FaBriefcase} color="blue.500" boxSize={6} />
            <VStack align="start" spacing={1} w="full">
              {isEditing ? (
                <>
                  <Input
                    value={exp.role}
                    onChange={(e) => handleChange(index, "role", e.target.value)}
                    placeholder="Job Title"
                  />
                  <Input
                    value={exp.company}
                    onChange={(e) => handleChange(index, "company", e.target.value)}
                    placeholder="Company Name"
                  />
                  <Input
                    value={exp.duration}
                    onChange={(e) => handleChange(index, "duration", e.target.value)}
                    placeholder="Duration (e.g., 2020-2023)"
                  />
                  <Textarea
                    value={exp.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    placeholder="Brief Description"
                  />
                  <Button colorScheme="red" size="sm" onClick={() => removeExperience(index)}>
                    Remove
                  </Button>
                </>
              ) : (
                <>
                  <Text fontSize="md" fontWeight="bold">
                    {exp.role} at {exp.company} <Badge colorScheme="green">{exp.duration}</Badge>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {exp.description}
                  </Text>
                </>
              )}
            </VStack>
          </HStack>
        ))}
        {isEditing && (
          <Button colorScheme="blue" size="sm" onClick={addExperience}>
            Add Experience
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Experience;
