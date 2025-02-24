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
import { FaTrophy, FaMedal } from "react-icons/fa";

const Achievements = ({ achievements, isEditing }) => {
  const [editableAchievements, setEditableAchievements] = useState(achievements);

  const handleChange = (index, field, value) => {
    const updatedAchievements = [...editableAchievements];
    updatedAchievements[index][field] = value;
    setEditableAchievements(updatedAchievements);
  };

  const addAchievement = () => {
    setEditableAchievements([
      ...editableAchievements,
      { title: "", description: "", year: new Date().getFullYear() },
    ]);
  };

  const removeAchievement = (index) => {
    const updatedAchievements = editableAchievements.filter((_, i) => i !== index);
    setEditableAchievements(updatedAchievements);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaTrophy} color="yellow.500" mr={2} /> Achievements
      </Heading>

      <VStack align="start" spacing={5} w="full">
        {editableAchievements.map((achieve, index) => (
          <HStack
            key={index}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            w="full"
            bg="gray.50"
          >
            <Icon as={FaMedal} color="orange.500" boxSize={6} />
            <VStack align="start" spacing={1} w="full">
              {isEditing ? (
                <>
                  <Input
                    value={achieve.title}
                    onChange={(e) => handleChange(index, "title", e.target.value)}
                    placeholder="Achievement Title"
                  />
                  <Textarea
                    value={achieve.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    placeholder="Description"
                  />
                  <Input
                    value={achieve.year}
                    onChange={(e) => handleChange(index, "year", e.target.value)}
                    placeholder="Year"
                    type="number"
                    maxW="100px"
                  />
                  <Button colorScheme="red" size="sm" onClick={() => removeAchievement(index)}>
                    Remove
                  </Button>
                </>
              ) : (
                <>
                  <Text fontSize="md" fontWeight="bold">
                    {achieve.title} <Badge colorScheme="blue">{achieve.year}</Badge>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {achieve.description}
                  </Text>
                </>
              )}
            </VStack>
          </HStack>
        ))}
        {isEditing && (
          <Button colorScheme="blue" size="sm" onClick={addAchievement}>
            Add Achievement
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Achievements;
