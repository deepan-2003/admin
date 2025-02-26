import React, { useState } from "react";
import { Box, Button, Input, Text, Textarea, VStack, HStack, IconButton } from "@chakra-ui/react";
import { Trash, Plus } from "lucide-react";

const Experience = ({ experiences, setExperiences, isEditing, setIsEditing }) => {
  const [localExperiences, setLocalExperiences] = useState([...experiences]);


  const handleChange = (index, field, value) => {
    const updatedExperiences = [...localExperiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    setLocalExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setLocalExperiences([...localExperiences, { company: "", role: "", duration: "", description: "" }]);
  };

  const removeExperience = (index) => {
    setLocalExperiences(localExperiences.filter((_, i) => i !== index));
  };

  return (
    <Box p={6} borderRadius="2xl" bg="white" boxShadow="xl" w="100%">
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">💼 Experience</Text>
      </HStack>

      {localExperiences.length === 0 && !isEditing ? (
        <Text color="gray.500">No experience added yet.</Text>
      ) : (
        <VStack align="start" spacing={4}>
          {localExperiences.map((exp, index) => (
            <Box key={index} w="100%" p={4} borderRadius="lg" bg="gray.100">
              {isEditing ? (
                <VStack align="start" spacing={2}>
                  <Input
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) => handleChange(index, "company", e.target.value)}
                  />
                  <Input
                    placeholder="Role"
                    value={exp.role}
                    onChange={(e) => handleChange(index, "role", e.target.value)}
                  />
                  <Input
                    placeholder="Duration"
                    value={exp.duration}
                    onChange={(e) => handleChange(index, "duration", e.target.value)}
                  />
                  <Textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                  />
                  <IconButton icon={<Trash size={18} />} colorScheme="red" onClick={() => removeExperience(index)} />
                </VStack>
              ) : (
                <VStack align="start" spacing={1}>
                  {exp.company && <Text fontSize="lg" fontWeight="bold">{exp.company}</Text>}
                  {(exp.role || exp.duration) && <Text color="gray.600">{exp.role} {exp.role && exp.duration && "•"} {exp.duration}</Text>}
                  {exp.description && <Text fontSize="sm" color="gray.500">{exp.description}</Text>}
                </VStack>
              )}
            </Box>
          ))}
        </VStack>
      )}

      {isEditing && (
        <Button leftIcon={<Plus size={18} />} colorScheme="green" mt={4} onClick={addExperience}>
          Add Experience
        </Button>
      )}
    </Box>
  );
};

export default Experience;
