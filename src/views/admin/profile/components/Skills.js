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
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Skills = ({ professionalSkills, softSkills, isEditing }) => {
  const [editedProfessionalSkills, setEditedProfessionalSkills] = useState(professionalSkills);
  const [editedSoftSkills, setEditedSoftSkills] = useState(softSkills);
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
      <Heading size="lg" mb={5} textAlign="center">Professional & Soft Skills</Heading>

      <VStack align="start" spacing={5} w="full">
        {/* Professional Skills with Circular Progress */}
        <Box w="full">
          <Text fontSize="md" fontWeight="bold" mb={4}>Technical Skills</Text>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
            {editedProfessionalSkills.map((skill, index) => (
              <Box key={index} textAlign="center">
                {isEditing ? (
                  <>
                    <Input
                      value={skill.name}
                      onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                      size="sm"
                      mb={2}
                    />
                    <Input
                      type="number"
                      value={skill.level}
                      onChange={(e) => handleSkillChange(index, "level", e.target.value)}
                      size="sm"
                      width="60px"
                      mb={2}
                    />
                    <Button size="xs" colorScheme="red" onClick={() => handleDeleteSkill(index)}>
                      <Icon as={FaTrash} />
                    </Button>
                  </>
                ) : (
                  <CircularProgress value={skill.level} size="60px" color="blue.400">
                    <CircularProgressLabel fontSize="xs">{skill.level}%</CircularProgressLabel>
                  </CircularProgress>
                )}
                <Text fontSize="sm" fontWeight="medium" mt={2}>{skill.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
          {isEditing && (
            <VStack mt={4} spacing={2} align="start">
              <Input
                placeholder="New Skill Name"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                size="sm"
              />
              <Input
                type="number"
                placeholder="Level (%)"
                value={newSkill.level}
                onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                size="sm"
                width="60px"
              />
              <Button size="sm" colorScheme="green" onClick={handleAddSkill} leftIcon={<FaPlus />}>Add Skill</Button>
            </VStack>
          )}
        </Box>

        {/* Soft Skills */}
        <Box w="full">
          <Text fontSize="md" fontWeight="bold" mb={2}>Soft Skills</Text>
          <Wrap spacing={3}>
            {editedSoftSkills.map((skill, index) => (
              <WrapItem key={index}>
                <Tag colorScheme="teal" size="lg">{skill}</Tag>
                {isEditing && (
                  <Button size="xs" colorScheme="red" ml={2} onClick={() => handleDeleteSoftSkill(index)}>
                    <Icon as={FaTrash} />
                  </Button>
                )}
              </WrapItem>
            ))}
          </Wrap>
          {isEditing && (
            <VStack mt={4} spacing={2} align="start">
              <Input
                placeholder="New Soft Skill"
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                size="sm"
              />
              <Button size="sm" colorScheme="green" onClick={handleAddSoftSkill} leftIcon={<FaPlus />}>Add Soft Skill</Button>
            </VStack>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default Skills;
