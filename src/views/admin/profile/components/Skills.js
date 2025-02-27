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
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaPlus, FaTrash, FaCogs, FaCode, FaUsers } from "react-icons/fa";

const Skills = ({ professionalSkills, softSkills, isEditing }) => {
  const [editedProfessionalSkills, setEditedProfessionalSkills] = useState(professionalSkills || []);
  const [editedSoftSkills, setEditedSoftSkills] = useState(softSkills || []);
  const [newSkill, setNewSkill] = useState({ name: "", level: "" });
  const [newSoftSkill, setNewSoftSkill] = useState("");

  const handleSkillChange = (index, field, newValue) => {
    if (field === "level") {
      const level = parseInt(newValue, 10);
      if (isNaN(level) || level < 1 || level > 100) {
        alert("Please enter a valid skill level between 1 and 100.");
        return;
      }
    }
    const updatedSkills = [...editedProfessionalSkills];
    updatedSkills[index][field] = newValue;
    setEditedProfessionalSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    const level = parseInt(newSkill.level, 10);
    if (!newSkill.name || isNaN(level) || level < 1 || level > 100) {
      alert("Please enter a valid skill name and level between 1 and 100.");
      return;
    }
    setEditedProfessionalSkills([...editedProfessionalSkills, newSkill]);
    setNewSkill({ name: "", level: "" });
  };

  const handleDeleteSkill = (index) => {
    setEditedProfessionalSkills(editedProfessionalSkills.filter((_, i) => i !== index));
  };

  const handleAddSoftSkill = () => {
    if (newSoftSkill) {
      setEditedSoftSkills([...editedSoftSkills, newSoftSkill]);
      setNewSoftSkill("");
    }
  };

  const handleDeleteSoftSkill = (index) => {
    setEditedSoftSkills(editedSoftSkills.filter((_, i) => i !== index));
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      {/* Main Heading with Icon */}
      <HStack align="center" justify="center" mb={5}>
        <Icon as={FaCogs} color="blue.500" boxSize={6} mr={2} />
        <Heading size="lg" textAlign="center">
          Professional & Soft Skills
        </Heading>
      </HStack>

      <VStack align="start" spacing={4} w="full">
        {/* Professional Skills with Circular Progress */}
        <Box w="full">
          <HStack align="center" mb={3}>
            <Icon as={FaCode} color="blue.500" mr={2} />
            <Text fontSize="lg" fontWeight="bold">
              Technical Skills
            </Text>
          </HStack>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
            {editedProfessionalSkills.map((skill, index) => (
              <Box
                key={index}
                textAlign="center"
                p={3}
                border="1px solid"
                borderColor="gray.100"
                borderRadius="lg"
                bg="white"
                transition="all 0.2s"
                _hover={{ bg: "gray.50" }}
                position="relative" // Add relative positioning for the trash icon
              >
                {isEditing ? (
                  <VStack spacing={2} align="stretch">
                    <Input
                      value={skill.name}
                      onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                      placeholder="Skill Name"
                      size="sm"
                      variant="filled"
                    />
                    <Input
                      type="number"
                      value={skill.level}
                      onChange={(e) => handleSkillChange(index, "level", e.target.value)}
                      placeholder="Level (%)"
                      size="sm"
                      variant="filled"
                      maxW="100px"
                    />
                  </VStack>
                ) : (
                  <>
                    <CircularProgress value={skill.level} size="60px" color="blue.400">
                      <CircularProgressLabel fontSize="xs">{skill.level}%</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontSize="sm" fontWeight="medium" mt={2}>
                      {skill.name}
                    </Text>
                  </>
                )}
                {/* Add trash icon for editing mode */}
                {isEditing && (
                  <Button
                    size="xs"
                    colorScheme="red"
                    position="absolute"
                    top={2}
                    right={2}
                    onClick={() => handleDeleteSkill(index)}
                  >
                    <Icon as={FaTrash} />
                  </Button>
                )}
              </Box>
            ))}
          </SimpleGrid>
          {isEditing && (
            <VStack mt={3} spacing={2} align="start">
              <Input
                placeholder="New Skill Name"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                size="sm"
                variant="filled"
              />
              <Input
                type="number"
                placeholder="Level (%)"
                value={newSkill.level}
                onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                size="sm"
                variant="filled"
                maxW="100px"
              />
              <Button
                size="sm"
                colorScheme="blue"
                leftIcon={<FaPlus />}
                onClick={handleAddSkill}
                variant="outline"
              >
                Add Skill
              </Button>
            </VStack>
          )}
        </Box>

        {/* Soft Skills */}
        <Box w="full">
          <HStack align="center" mb={2}>
            <Icon as={FaUsers} color="teal.500" mr={2} />
            <Text fontSize="lg" fontWeight="bold">
              Soft Skills
            </Text>
          </HStack>
          <Wrap spacing={2}>
            {editedSoftSkills.map((skill, index) => (
              <WrapItem key={index}>
                <Tag colorScheme="teal" size="lg">
                  {skill}
                </Tag>
                {isEditing && (
                  <Button
                    size="xs"
                    colorScheme="red"
                    ml={1}
                    onClick={() => handleDeleteSoftSkill(index)}
                  >
                    <Icon as={FaTrash} />
                  </Button>
                )}
              </WrapItem>
            ))}
          </Wrap>
          {isEditing && (
            <VStack mt={3} spacing={2} align="start">
              <Input
                placeholder="New Soft Skill"
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                size="sm"
                variant="filled"
              />
              <Button
                size="sm"
                colorScheme="blue"
                leftIcon={<FaPlus />}
                onClick={handleAddSoftSkill}
                variant="outline"
              >
                Add Soft Skill
              </Button>
            </VStack>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default Skills;