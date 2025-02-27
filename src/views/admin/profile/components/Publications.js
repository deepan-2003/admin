import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Link, Input, Button } from "@chakra-ui/react";
import { FaBook, FaExternalLinkAlt, FaPlus, FaTrash } from "react-icons/fa";

const Publications = ({ publications, isEditing, onSave }) => {
  const [editablePubs, setEditablePubs] = useState(publications || []);

  const handleChange = (index, field, value) => {
    const updatedPubs = [...editablePubs];
    updatedPubs[index][field] = value;
    setEditablePubs(updatedPubs);
  };

  const addPublication = () => {
    setEditablePubs([...editablePubs, { title: "", authors: "", journal: "", year: "", link: "" }]);
  };

  const removePublication = (index) => {
    const updatedPubs = editablePubs.filter((_, i) => i !== index);
    setEditablePubs(updatedPubs);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" width="100%" maxW="900px" mx="auto">
      <Heading size="lg" mb={5} textAlign="center">
        <Icon as={FaBook} color="blue.500" mr={2} /> Publications
      </Heading>

      <VStack align="start" spacing={4}>
        {editablePubs.length > 0 ? (
          editablePubs.map((pub, index) => (
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
                    value={pub.title}
                    onChange={(e) => handleChange(index, "title", e.target.value)}
                    placeholder="Title"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={pub.authors}
                    onChange={(e) => handleChange(index, "authors", e.target.value)}
                    placeholder="Authors"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={pub.journal}
                    onChange={(e) => handleChange(index, "journal", e.target.value)}
                    placeholder="Journal/Conference"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={pub.year.replace(/[^0-9]/g, "")}
                    onChange={(e) => handleChange(index, "year", e.target.value)}
                    placeholder="Year (Numbers Only)"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={pub.link}
                    onChange={(e) => handleChange(index, "link", e.target.value)}
                    placeholder="Paper Link"
                    size="sm"
                    variant="filled"
                  />
                  <Button
                    size="sm"
                    colorScheme="red"
                    leftIcon={<FaTrash />}
                    onClick={() => removePublication(index)}
                    width="full"
                  >
                    Remove Publication
                  </Button>
                </VStack>
              ) : (
                <>
                  <Text fontSize="md" fontWeight="600" color="gray.800">
                    {pub.title} <Badge colorScheme="blue">{pub.year}</Badge>
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {pub.journal} | <b>Authors:</b> {pub.authors}
                  </Text>
                  {pub.link && (
                    <Link
                      href={pub.link}
                      isExternal
                      color="blue.500"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                    >
                      View Paper <Icon as={FaExternalLinkAlt} ml={1} />
                    </Link>
                  )}
                </>
              )}
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No publications added yet
          </Text>
        )}
      </VStack>

      {isEditing && (
        <Button
          colorScheme="blue"
          leftIcon={<FaPlus />}
          onClick={addPublication}
          variant="outline"
          size="md"
          mt={4}
        >
          Add Publication
        </Button>
      )}
    </Box>
  );
};

export default Publications;