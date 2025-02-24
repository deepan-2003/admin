import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Tag,
  Wrap,
  WrapItem,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
  Input,
} from "@chakra-ui/react";

const Skills = ({ professionalSkills, softSkills, isEditing }) => {
  const [editedProfessionalSkills, setEditedProfessionalSkills] = useState(professionalSkills);

  const handleSkillChange = (index, newValue) => {
    const updatedSkills = [...editedProfessionalSkills];
    updatedSkills[index].level = newValue;
    setEditedProfessionalSkills(updatedSkills);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">Professional & Soft Skills</Heading>

      <VStack align="start" spacing={5} w="full">
        
        {/* Professional Skills with Circular Progress */}
        <Box w="full">
          <Text fontSize="md" fontWeight="bold" mb={4}>Technical Skills</Text>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
            {editedProfessionalSkills.map((skill, index) => (
              <Box key={index} textAlign="center">
                {isEditing ? (
                  <Input
                    type="number"
                    value={skill.level}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    size="sm"
                    width="60px"
                    mb={2}
                  />
                ) : (
                  <CircularProgress value={skill.level} size="60px" color="blue.400">
                    <CircularProgressLabel fontSize="xs">{skill.level}%</CircularProgressLabel>
                  </CircularProgress>
                )}
                <Text fontSize="sm" fontWeight="medium" mt={2}>{skill.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Soft Skills */}
        <Box w="full">
          <Text fontSize="md" fontWeight="bold" mb={2}>Soft Skills</Text>
          <Wrap spacing={3}>
            {softSkills.map((skill, index) => (
              <WrapItem key={index}>
                <Tag colorScheme="teal" size="lg">{skill}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

      </VStack>
    </Box>
  );
};

export default Skills;
