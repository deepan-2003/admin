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
  Select,
} from "@chakra-ui/react";
import { FaTasks, FaUsers, FaClipboardCheck } from "react-icons/fa";

const Activities = ({ activities, isEditing, onSave }) => {
  const [editableActivities, setEditableActivities] = useState(activities);

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
        {editableActivities.map((activity, index) => (
          <VStack
            key={index}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            bg="gray.50"
            spacing={2}
            align="start"
          >
            <Icon as={activity.type === "Leadership" ? FaUsers : FaClipboardCheck} color="teal.500" boxSize={6} />
            
            {isEditing ? (
              <>
                <Input
                  value={activity.role}
                  onChange={(e) => handleChange(index, "role", e.target.value)}
                  placeholder="Role"
                />
                <Input
                  value={activity.organization}
                  onChange={(e) => handleChange(index, "organization", e.target.value)}
                  placeholder="Organization"
                />
                <Input
                  value={activity.year}
                  onChange={(e) => handleChange(index, "year", e.target.value)}
                  type="number"
                  maxW="100px"
                />
                <Select
                  value={activity.type}
                  onChange={(e) => handleChange(index, "type", e.target.value)}
                >
                  <option value="General">General</option>
                  <option value="Leadership">Leadership</option>
                </Select>
                <Button colorScheme="red" size="sm" onClick={() => removeActivity(index)}>
                  Remove
                </Button>
              </>
            ) : (
              <>
                <Text fontSize="md" fontWeight="bold">{activity.role}</Text>
                <Text fontSize="sm" color="gray.600">
                  {activity.organization} ({activity.year})
                </Text>
              </>
            )}
          </VStack>
        ))}
      </SimpleGrid>

      {isEditing && (
        <>
          <Button colorScheme="blue" size="sm" mt={4} onClick={addActivity}>
            Add Activity
          </Button>

        </>
      )}
    </Box>
  );
};

export default Activities;
