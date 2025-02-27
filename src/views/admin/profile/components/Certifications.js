import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Badge, Input, Button, Link, Flex } from "@chakra-ui/react";
import { FaCertificate, FaPlus, FaTrash, FaEye } from "react-icons/fa";

const Certifications = ({ certificates, isEditing, onSave }) => {
  const [editableCerts, setEditableCerts] = useState(certificates || []);

  const handleChange = (index, field, value) => {
    const updatedCerts = [...editableCerts];
    updatedCerts[index][field] = value;
    setEditableCerts(updatedCerts);
  };

  const handleFileChange = (index, file) => {
    const updatedCerts = [...editableCerts];
    updatedCerts[index].file = file;
    setEditableCerts(updatedCerts);
  };

  const addCertification = () => {
    setEditableCerts([...editableCerts, { name: "", issuer: "", year: "", link: "", file: null }]);
  };

  const removeCertification = (index) => {
    const updatedCerts = editableCerts.filter((_, i) => i !== index);
    setEditableCerts(updatedCerts);
  };

  return (
    <Box p={6} bg="white" borderRadius="xl" width="100%" maxW="800px" mx="auto">
      <Heading size="lg" mb={4} textAlign="center">
        <Icon as={FaCertificate} color="blue.600" mr={2} /> Certifications
      </Heading>

      <VStack spacing={3} align="stretch">
        {editableCerts.length > 0 ? (
          editableCerts.map((cert, index) => (
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
                    value={cert.name}
                    onChange={(e) => handleChange(index, "name", e.target.value)}
                    placeholder="Certification Name"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={cert.issuer}
                    onChange={(e) => handleChange(index, "issuer", e.target.value)}
                    placeholder="Issuer"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={cert.year}
                    onChange={(e) => {
                      const newValue = e.target.value.replace(/[^0-9]/g, "");
                      handleChange(index, "year", newValue);
                    }}
                    placeholder="Year (Numbers Only)"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    value={cert.link}
                    onChange={(e) => handleChange(index, "link", e.target.value)}
                    placeholder="Certification Link"
                    size="sm"
                    variant="filled"
                  />
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                    size="sm"
                    variant="filled"
                  />
                  <Button
                    size="sm"
                    colorScheme="red"
                    leftIcon={<FaTrash />}
                    onClick={() => removeCertification(index)}
                    width="full"
                  >
                    Remove Certification
                  </Button>
                </VStack>
              ) : (
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Text fontSize="md" fontWeight="600" color="gray.800">
                      {cert.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {cert.issuer} · <Badge colorScheme="blue" variant="subtle">{cert.year}</Badge>
                    </Text>
                  </Box>
                  {(cert.link || cert.file) && (
                    <Link
                      href={cert.link || URL.createObjectURL(cert.file)}
                      isExternal
                      color="blue.500"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                      whiteSpace="nowrap" // Ensure text stays in one line
                    >
                      <Icon as={FaEye} mr={1} /> View Certification
                    </Link>
                  )}
                </Flex>
              )}
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No certifications added yet
          </Text>
        )}

        {isEditing && (
          <Button
            colorScheme="blue"
            leftIcon={<FaPlus />}
            onClick={addCertification}
            variant="outline"
            size="md"
            mt={2}
          >
            Add Certification
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Certifications;