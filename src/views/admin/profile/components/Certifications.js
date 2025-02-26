import React, { useState } from "react";
import { Box, Heading, Text, VStack, Icon, Divider, Input, Button, HStack, Link } from "@chakra-ui/react";
import { FaCertificate, FaPlus, FaTrash } from "react-icons/fa";

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
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" minH="300px" width="100%">
      <Heading size="md" mb={4} display="flex" alignItems="center">
        <Icon as={FaCertificate} color="blue.500" mr={2} /> Certifications
      </Heading>

      <VStack align="start" spacing={3}>
        {editableCerts.length > 0 ? (
          editableCerts.map((cert, index) => (
            <Box key={index} width="100%">
              {isEditing ? (
                <VStack align="start" spacing={1} width="100%">
                  <Input size="md" value={cert.name} onChange={(e) => handleChange(index, "name", e.target.value)} placeholder="Certification Name" />
                  <Input size="md" value={cert.issuer} onChange={(e) => handleChange(index, "issuer", e.target.value)} placeholder="Issuer" />
                  <Input
                    size="md"
                    value={cert.year}
                    onChange={(e) => {
                      const newValue = e.target.value.replace(/[^0-9]/g, "");
                      handleChange(index, "year", newValue);
                    }}
                    placeholder="Year (Numbers Only)"
                  />
                  <Input size="md" value={cert.link} onChange={(e) => handleChange(index, "link", e.target.value)} placeholder="Certification Link" />
                  <Input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    onChange={(e) => handleFileChange(index, e.target.files[0])} 
                    placeholder="Upload Certification"
                  />
                  <Button size="md" colorScheme="red" leftIcon={<FaTrash />} onClick={() => removeCertification(index)}>
                    Remove
                  </Button>
                </VStack>
              ) : (
                <>
                  <Text fontSize="md" fontWeight="medium">🏆 {cert.name}</Text>
                  <Text fontSize="sm" color="gray.500">{cert.issuer} ({cert.year})</Text>
                  {cert.link && (
                    <Text fontSize="sm" color="blue.500" as="a" href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </Text>
                  )}
                  {cert.file && (
                    <Link href={URL.createObjectURL(cert.file)} target="_blank" color="green.500">
                      View Uploaded File
                    </Link>
                  )}
                </>
              )}
              {index !== editableCerts.length - 1 && <Divider />}
            </Box>
          ))
        ) : (
          <Text fontSize="sm" color="gray.500">No certifications available.</Text>
        )}
      </VStack>

      {isEditing && (
        <HStack mt={4}>
          <Button size="md" colorScheme="green" leftIcon={<FaPlus />} onClick={addCertification}>
            Add Certification
          </Button>
        </HStack>
      )}
    </Box>
  );
};

export default Certifications;
