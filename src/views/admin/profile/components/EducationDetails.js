import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Flex, Input, Button } from "@chakra-ui/react";
import { FaGraduationCap, FaUniversity, FaSchool, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const EducationDetails = ({ education, isEditing }) => {
  const [editableEducation, setEditableEducation] = useState(education);
  const [newEdu, setNewEdu] = useState({ degree: "", institution: "", year: "", score: "", level: "School" });
  const [editingIndex, setEditingIndex] = useState(null); // State to track which item is being edited
  const [editingEdu, setEditingEdu] = useState({ degree: "", institution: "", year: "", score: "" });



  const handleAddEducation = () => {
    if (newEdu.degree && newEdu.institution && newEdu.year && newEdu.score) {
      setEditableEducation([...editableEducation, newEdu]);
      setNewEdu({ degree: "", institution: "", year: "", score: "", level: "School" });
    }
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = editableEducation.filter((_, i) => i !== index);
    setEditableEducation(updatedEducation);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditingEdu(editableEducation[index]); // Set the current item to be edited
  };

  const handleUpdateEducation = () => {
    const updatedEducation = [...editableEducation];
    updatedEducation[editingIndex] = editingEdu; // Update the entry being edited
    setEditableEducation(updatedEducation);
    setEditingIndex(null); // Reset the editing index
    setEditingEdu({ degree: "", institution: "", year: "", score: "" }); // Reset editing state
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="100%" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaGraduationCap} color="blue.500" mr={2} aria-hidden="true" /> 
        Education Details
      </Heading>

      {editableEducation.length > 0 ? (
        <VStack align="start" spacing={6} w="full">
          {editableEducation.map((edu, index) => (
            <Flex key={index} p={4} border="1px solid" borderColor="gray.200" borderRadius="lg" w="full" bg="gray.50" align="center" gap={4}>
              <Icon as={edu.level === "College" ? FaUniversity : FaSchool} color={edu.level === "College" ? "green.500" : "purple.500"} boxSize={8} />
              <VStack align="start" spacing={1} w="full">
                {isEditing ? (
                  <>
                    <Input 
                      value={editingIndex === index ? editingEdu.degree : edu.degree}
                      onChange={(e) => setEditingEdu({ ...editingEdu, degree: e.target.value })}
                      placeholder="Degree"
                    />
                    <Input 
                      value={editingIndex === index ? editingEdu.institution : edu.institution}
                      onChange={(e) => setEditingEdu({ ...editingEdu, institution: e.target.value })}
                      placeholder="Institution"
                    />
                    <Input 
                      value={editingIndex === index ? editingEdu.year : edu.year}
                      onChange={(e) => setEditingEdu({ ...editingEdu, year: e.target.value })}
                      placeholder="Year"
                    />
                    <Input 
                      value={editingIndex === index ? editingEdu.score : edu.score}
                      onChange={(e) => setEditingEdu({ ...editingEdu, score: e.target.value })}
                      placeholder={edu.level === "College" ? "CGPA" : "Percentage"}
                    />
                    <Button 
                      colorScheme="blue" 
                      onClick={() => handleUpdateEducation(index)}
                      leftIcon={<FaEdit />}
                      ml={2} // Space between the delete button
                    >
                      Update
                    </Button>
                    <Button 
                      colorScheme="red" 
                      onClick={() => handleDeleteEducation(index)}
                      leftIcon={<FaTrash />}
                    >
                      Delete
                    </Button>
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
              {isEditing && editingIndex !== index && (
                <Button onClick={() => handleEditClick(index)} leftIcon={<FaEdit />}>Edit</Button>
              )}
            </Flex>
          ))}
        </VStack>
      ) : (
        <Text fontSize="md" color="gray.500" textAlign="center">No education details available.</Text>
      )}

      {isEditing && (
        <VStack spacing={4} mt={6}>
          <Heading size="md">Add New Education</Heading>
          <Input 
            value={newEdu.degree}
            onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
            placeholder="Degree"
          />
          <Input 
            value={newEdu.institution}
            onChange={(e) => setNewEdu({ ...newEdu, institution: e.target.value })}
            placeholder="Institution"
          />
          <Input 
            value={newEdu.year}
            onChange={(e) => setNewEdu({ ...newEdu, year: e.target.value })}
            placeholder="Year"
          />
          <Input 
            value={newEdu.score}
            onChange={(e) => setNewEdu({ ...newEdu, score: e.target.value })}
            placeholder={newEdu.level === "College" ? "CGPA" : "Percentage"}
          />
          <Flex alignItems="center" gap={2}>
            <Button colorScheme="teal" onClick={handleAddEducation} leftIcon={<FaPlus />}>
              Add
            </Button>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};

export default EducationDetails;
