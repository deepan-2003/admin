import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Input, Button, HStack } from "@chakra-ui/react";
import { FaBriefcase, FaPlus, FaTrash } from "react-icons/fa";

const Experience = ({ experiences, setExperiences, isEditing }) => {
  const [localExperiences, setLocalExperiences] = useState([...experiences]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...localExperiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    setLocalExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setLocalExperiences([...localExperiences, { 
      company: "", 
      role: "", 
      duration: "", 
      description: "" 
    }]);
  };

  const removeExperience = (index) => {
    setLocalExperiences(localExperiences.filter((_, i) => i !== index));
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" width="100%" maxW="800px" mx="auto">
      <Heading size="lg" mb={4} textAlign="center">
        <Icon as={FaBriefcase} color="blue.600" mr={2} /> Work Experience
      </Heading>

      <VStack spacing={3} align="stretch">
        {localExperiences.length > 0 ? (
          localExperiences.map((exp, index) => (
            <Box
              key={index}
              p={4}
              border="1px solid"
              borderColor="gray.100"
              borderRadius="lg"
              bg="white"
              transition="all 0.2s"
              _hover={{
                bg: "gray.50",
                ".experience-description": {
                  opacity: 1,
                  maxHeight: "200px",
                  mt: 2
                }
              }}
              position="relative"
            >
              {/* Experience Header */}
              <HStack justifyContent="space-between" mb={1}>
                <Text fontSize="md" fontWeight="600" color="gray.800">
                  {exp.company}
                  {exp.role && <Text as="span" fontWeight="500"> · {exp.role}</Text>}
                </Text>
                {exp.duration && (
                  <Badge colorScheme="blue" variant="subtle">
                    {exp.duration}
                  </Badge>
                )}
              </HStack>

              {/* Hoverable Job Description */}
              <Box
                className="experience-description"
                opacity="0"
                maxHeight="0"
                overflow="hidden"
                transition="opacity 0.2s ease-in-out, max-height 0.2s ease-in-out, margin-top 0.2s ease-in-out"
              >
                {exp.description && (
                  <Text fontSize="sm" color="gray.600">
                    {exp.description}
                  </Text>
                )}
              </Box>

              {/* Edit Mode Fields */}
              {isEditing && (
                <VStack spacing={2} mt={3}>
                  <HStack width="100%">
                    <Input
                      value={exp.company}
                      onChange={(e) => handleChange(index, "company", e.target.value)}
                      placeholder="Company"
                      size="sm"
                      variant="filled"
                      flex="1"
                    />
                    <Input
                      value={exp.duration}
                      onChange={(e) => handleChange(index, "duration", e.target.value)}
                      placeholder="Duration"
                      size="sm"
                      variant="filled"
                      flex="1"
                    />
                  </HStack>
                  <Input
                    value={exp.role}
                    onChange={(e) => handleChange(index, "role", e.target.value)}
                    placeholder="Role"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={exp.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    placeholder="Job Description"
                    size="sm"
                    variant="filled"
                    as="textarea"
                    rows={2}
                  />
                  <Button
                    size="sm"
                    colorScheme="red"
                    leftIcon={<FaTrash />}
                    onClick={() => removeExperience(index)}
                    width="full"
                  >
                    Remove Experience
                  </Button>
                </VStack>
              )}
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No experience added yet
          </Text>
        )}

        {isEditing && (
          <Button
            colorScheme="blue"
            leftIcon={<FaPlus />}
            onClick={addExperience}
            variant="outline"
            size="md"
            mt={2}
          >
            Add Experience
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Experience;