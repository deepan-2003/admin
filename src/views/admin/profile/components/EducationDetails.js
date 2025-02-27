import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Flex, Input, Button } from "@chakra-ui/react";
import { FaGraduationCap, FaUniversity, FaSchool, FaPlus, FaTrash } from "react-icons/fa";

const EducationDetails = ({ education, isEditing, onSave }) => {
  const [editableEducation, setEditableEducation] = useState(education || []);

  const handleChange = (index, field, value) => {
    const updatedEducation = [...editableEducation];
    updatedEducation[index][field] = value;
    setEditableEducation(updatedEducation);
  };

  const addEducation = () => {
    setEditableEducation([...editableEducation, { 
      degree: "", 
      institution: "", 
      year: "", 
      score: "", 
      level: "School" 
    }]);
  };

  const removeEducation = (index) => {
    const updatedEducation = editableEducation.filter((_, i) => i !== index);
    setEditableEducation(updatedEducation);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="100%" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaGraduationCap} color="blue.500" mr={2} aria-hidden="true" /> 
        Education Details
      </Heading>

      <VStack align="start" spacing={6} w="full">
        {editableEducation.length > 0 ? (
          editableEducation.map((edu, index) => (
            <Flex key={index} p={4} border="1px solid" borderColor="gray.200" borderRadius="lg" w="full" bg="gray.50" align="center" gap={4}>
              <Icon as={edu.level === "College" ? FaUniversity : FaSchool} color={edu.level === "College" ? "green.500" : "purple.500"} boxSize={8} />
              <VStack align="start" spacing={1} w="full">
                {isEditing ? (
                  <>
                    <Input 
                      value={edu.degree}
                      onChange={(e) => handleChange(index, "degree", e.target.value)}
                      placeholder="Degree"
                      size="sm"
                      variant="filled"
                    />
                    <Input 
                      value={edu.institution}
                      onChange={(e) => handleChange(index, "institution", e.target.value)}
                      placeholder="Institution"
                      size="sm"
                      variant="filled"
                    />
                    <Input 
                      value={edu.year}
                      onChange={(e) => handleChange(index, "year", e.target.value)}
                      placeholder="Year"
                      size="sm"
                      variant="filled"
                    />
                    <Input 
                      value={edu.score}
                      onChange={(e) => handleChange(index, "score", e.target.value)}
                      placeholder={edu.level === "College" ? "CGPA" : "Percentage"}
                      size="sm"
                      variant="filled"
                    />
                  </>
                ) : (
                  <>
                    <Text fontSize="md" fontWeight="bold">
                      {edu.degree} <Badge colorScheme="blue">{edu.year}</Badge>
                    </Text>
                    <Text fontSize="sm" color="gray.600">{edu.institution}</Text>
                    <Text fontSize="sm"><b>{edu.level === "College" ? "CGPA" : "Percentage"}:</b> {edu.score}</Text>
                  </>
                )}
              </VStack>
              {isEditing && (
                <Button colorScheme="red" onClick={() => removeEducation(index)}>
                  <Icon as={FaTrash} />
                </Button>
              )}
            </Flex>
          ))
        ) : (
          <Text fontSize="md" color="gray.500" textAlign="center">No education details available.</Text>
        )}

        {isEditing && (
          <Button
            colorScheme="blue"
            leftIcon={<FaPlus />}
            onClick={addEducation}
            variant="outline"
            size="md"
            mt={2}
          >
            Add Education
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default EducationDetails;