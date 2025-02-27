import React, { useState } from "react";
import { Box, Heading, VStack, HStack, Icon, Text, Badge, Input, Button, Textarea } from "@chakra-ui/react";
import { FaTrophy, FaMedal, FaPlus, FaTrash } from "react-icons/fa";

const Achievements = ({ achievements, isEditing }) => {
  const [editableAchievements, setEditableAchievements] = useState(achievements || []);

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

      <VStack align="start" spacing={4} w="full">
        {editableAchievements.length > 0 ? (
          editableAchievements.map((achieve, index) => (
            <Box
              key={index}
              p={4}
              border="1px solid"
              borderColor="gray.100"
              borderRadius="lg"
              bg="white"
              transition="all 0.2s"
              _hover={{ bg: "gray.50" }}
              w="full"
            >
              {isEditing ? (
                <VStack spacing={2} align="stretch">
                  <Input
                    value={achieve.title}
                    onChange={(e) => handleChange(index, "title", e.target.value)}
                    placeholder="Achievement Title"
                    size="sm"
                    variant="filled"
                  />
                  <Textarea
                    value={achieve.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    placeholder="Description"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={achieve.year}
                    onChange={(e) => handleChange(index, "year", e.target.value)}
                    placeholder="Year"
                    type="number"
                    size="sm"
                    variant="filled"
                    maxW="100px"
                  />
                  <Button
                    size="sm"
                    colorScheme="red"
                    leftIcon={<FaTrash />}
                    onClick={() => removeAchievement(index)}
                    width="full"
                  >
                    Remove Achievement
                  </Button>
                </VStack>
              ) : (
                <HStack align="start" spacing={3}>
                  <Icon as={FaMedal} color="orange.500" boxSize={6} />
                  <VStack align="start" spacing={1}>
                    <Text fontSize="md" fontWeight="600" color="gray.800">
                      {achieve.title} <Badge colorScheme="blue">{achieve.year}</Badge>
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {achieve.description}
                    </Text>
                  </VStack>
                </HStack>
              )}
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No achievements added yet
          </Text>
        )}

        {isEditing && (
          <Button
            colorScheme="blue"
            leftIcon={<FaPlus />}
            onClick={addAchievement}
            variant="outline"
            size="md"
            mt={2}
          >
            Add Achievement
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Achievements;