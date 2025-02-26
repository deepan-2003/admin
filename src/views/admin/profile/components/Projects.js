import React, { useState } from "react";
import { Text, useColorModeValue, Box, Button, Input, VStack, HStack, IconButton } from "@chakra-ui/react";
import { Save, Trash2, Plus } from "lucide-react";
import Card from "components/card/Card.js";
import Project from "views/admin/profile/components/Project";
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";

export default function Projects() {
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState([
    { image: Project1, title: "Technology behind the Blockchain", link: "#" },
    { image: Project2, title: "Greatest way to a good Economy", link: "#" },
    { image: Project3, title: "Most essential tips for Burnout", link: "#" },
  ]);

  // Define missing variables
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue("0px 18px 40px rgba(112, 144, 176, 0.12)", "unset");

  // Define missing functions
  const handleMainEdit = () => {
  setIsEditing(true);
  console.log("Edit Mode Enabled:", true);
};

  const handleMainSave = () => setIsEditing(false);

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjects(updatedProjects);
  };

  const addProject = () => {
    console.log("Add Project Clicked");
    setProjects([...projects, { image: "", title: "", link: "" }]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <HStack justifyContent="space-between" mb={4}>
        <Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
          All projects
        </Text>
        <Button 
          leftIcon={isEditing ? <Save size={18} /> : null} 
          colorScheme={isEditing ? "blue" : "teal"} 
          onClick={isEditing ? handleMainSave : handleMainEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
      </HStack>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Here you can find more details about your projects. Keep your user engaged by providing meaningful information.
      </Text>
      <VStack spacing={4} align="stretch">
        {projects.map((project, index) => (
          <Box key={index} p={4} borderRadius="lg" bg="gray.100" boxShadow={cardShadow}>
            {isEditing ? (
              <VStack align="start" spacing={2}>
                <Input
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <Input
                  placeholder="Project Link"
                  value={project.link}
                  onChange={(e) => handleChange(index, "link", e.target.value)}
                />
                <IconButton
                  aria-label="Remove Project"
                  icon={<Trash2 />}
                  colorScheme="red"
                  onClick={() => removeProject(index)}
                />
              </VStack>
            ) : (
              <Project
                boxShadow={cardShadow}
                image={project.image}
                ranking={index + 1}
                link={project.link}
                title={project.title}
              />
            )}
          </Box>
        ))}
      </VStack>
      {isEditing && (
        <Button leftIcon={<Plus />} colorScheme="blue" mt={4} onClick={addProject}>
          Add Project
        </Button>
      )}
    </Card>
  );
}