import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Link, Input, Button, HStack } from "@chakra-ui/react";
import { FaRegFolderOpen, FaPlus, FaTrash } from "react-icons/fa";


const Projects = ({ projects, isEditing, onSave }) => {
  const [editableProjects, setEditableProjects] = useState(projects || []);

  const handleChange = (index, field, value) => {
    const updatedProjects = [...editableProjects];
    updatedProjects[index][field] = value;
    setEditableProjects(updatedProjects);
  };

  const addProject = () => {
    setEditableProjects([...editableProjects, { 
      title: "", 
      domain: "", 
      timePeriod: "", 
      description: "", 
      link: "" 
    }]);
  };

  const removeProject = (index) => {
    const updatedProjects = editableProjects.filter((_, i) => i !== index);
    setEditableProjects(updatedProjects);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" width="100%" maxW="800px" mx="auto">
      <Heading size="lg" mb={4} textAlign="center">
        <Icon as={FaRegFolderOpen} color="blue.600" mr={2} /> Professional Projects
      </Heading>

      <VStack spacing={3} align="stretch">
        {editableProjects.length > 0 ? (
          editableProjects.map((project, index) => (
            <Box
              key={index}
              p={4}
              border="1px solid"
              borderColor="gray.100"
              borderRadius="lg"
              bg="white"
              transition="all 0.2s"
              _hover={{
                bg: "gray.50",
                ".project-description": {
                  opacity: 1,
                  maxHeight: "200px",
                  mt: 2
                }
              }}
              position="relative"
            >
              {/* Project Header */}
              <HStack justifyContent="space-between" mb={1}>
                <Text fontSize="md" fontWeight="600" color="gray.800">
                  {project.title}
                </Text>
                <HStack spacing={2}>
                  {project.domain && (
                    <Badge colorScheme="gray" variant="subtle">
                      {project.domain}
                    </Badge>
                  )}
                  {project.timePeriod && (
                    <Badge colorScheme="blue" variant="subtle">
                      {project.timePeriod}
                    </Badge>
                  )}
                </HStack>
              </HStack>

              {/* Hoverable Description */}
              <Box
                className="project-description"
                opacity="0"
                maxHeight="0"
                overflow="hidden"
                transition="opacity 0.2s ease-in-out, max-height 0.2s ease-in-out, margin-top 0.2s ease-in-out"
              >
                {project.description && (
                  <Text fontSize="sm" color="gray.600" mt={2}>
                    {project.description}
                  </Text>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    isExternal
                    color="blue.500"
                    fontSize="sm"
                    mt={2}
                    display="inline-block"
                  >
                    View Project
                  </Link>
                )}
              </Box>

              {/* Edit Fields */}
              {isEditing && (
                <VStack spacing={2} mt={3}>
                  <Input
                    value={project.title}
                    onChange={(e) => handleChange(index, "title", e.target.value)}
                    placeholder="Project Title"
                    size="sm"
                    variant="filled"
                  />
                  <HStack width="100%">
                    <Input
                      value={project.domain}
                      onChange={(e) => handleChange(index, "domain", e.target.value)}
                      placeholder="Domain"
                      size="sm"
                      variant="filled"
                      flex="1"
                    />
                    <Input
                      value={project.timePeriod}
                      onChange={(e) => handleChange(index, "timePeriod", e.target.value)}
                      placeholder="Time Period"
                      size="sm"
                      variant="filled"
                      flex="1"
                    />
                  </HStack>
                  <Input
                    value={project.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    placeholder="Description"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={project.link}
                    onChange={(e) => handleChange(index, "link", e.target.value)}
                    placeholder="Project URL"
                    size="sm"
                    variant="filled"
                  />
                  <Button
                    size="sm"
                    colorScheme="red"
                    leftIcon={<FaTrash />}
                    onClick={() => removeProject(index)}
                    width="full"
                  >
                    Remove Project
                  </Button>
                </VStack>
              )}
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No projects added yet
          </Text>
        )}

        {isEditing && (
          <Button
            colorScheme="blue"
            leftIcon={<FaPlus />}
            onClick={addProject}
            variant="outline"
            size="md"
            mt={2}
          >
            Add Project
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Projects;