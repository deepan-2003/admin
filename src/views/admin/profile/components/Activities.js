import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Input,
  Button,
  Badge,
} from "@chakra-ui/react";
import { FaTasks, FaPlus, FaTrash } from "react-icons/fa";

const Activities = ({ activities, isEditing, onSave }) => {
  const [editableActivities, setEditableActivities] = useState(activities || []);

  useEffect(() => {
    setEditableActivities(activities); // Sync with the initial activities when editing starts
  }, [activities]);

  const handleChange = (index, field, value) => {
    const updatedActivities = [...editableActivities];
    updatedActivities[index][field] = value;
    setEditableActivities(updatedActivities);
  };

  const addActivity = () => {
    setEditableActivities([
      ...editableActivities,
      { role: "", organization: "", year: new Date().getFullYear(), type: "General" },
    ]);
  };

  const removeActivity = (index) => {
    const updatedActivities = editableActivities.filter((_, i) => i !== index);
    setEditableActivities(updatedActivities);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaTasks} color="green.500" mr={2} /> Activities & Responsibilities
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {editableActivities.length > 0 ? (
          editableActivities.map((activity, index) => (
            <Box
              key={index}
              p={4}
              border="1px solid"
              borderColor="gray.100"
              borderRadius="lg"
              bg="white"
              transition="all 0.2s"
              _hover={{ bg: "gray.50" }}
            >
              {isEditing ? (
                <VStack spacing={2} align="stretch">
                  <Input
                    value={activity.role}
                    onChange={(e) => handleChange(index, "role", e.target.value)}
                    placeholder="Role"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={activity.organization}
                    onChange={(e) => handleChange(index, "organization", e.target.value)}
                    placeholder="Organization"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={activity.year}
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
                    onClick={() => removeActivity(index)}
                    width="full"
                  >
                    Remove Activity
                  </Button>
                </VStack>
              ) : (
                <VStack align="start" spacing={1}>
                  <Text fontSize="md" fontWeight="600" color="gray.800">
                    {activity.role}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {activity.organization} · <Badge colorScheme="blue" variant="subtle">{activity.year}</Badge>
                  </Text>
                </VStack>
              )}
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No activities added yet
          </Text>
        )}
      </SimpleGrid>

      {isEditing && (
        <Button
          colorScheme="blue"
          leftIcon={<FaPlus />}
          onClick={addActivity}
          variant="outline"
          size="md"
          mt={4}
        >
          Add Activity
        </Button>
      )}
    </Box>
  );
};

export default Activities;