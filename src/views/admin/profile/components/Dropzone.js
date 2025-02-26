import React, { useState } from "react";
import { Button, Flex, Input, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

function Dropzone({ content = "Drag & drop files here or click to upload", onFileUpload, acceptedFormats = "" }) {
  const [fileName, setFileName] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFormats,
    onDrop: (acceptedFiles) => {
      setFileName(acceptedFiles[0]?.name);
      if (onFileUpload) onFileUpload(acceptedFiles);
    },
  });

  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");

  return (
    <Flex
      align="center"
      justify="center"
      bg={bg}
      border="2px dashed"
      borderColor={borderColor}
      borderRadius="16px"
      w="100%"
      minH="120px"
      cursor="pointer"
      p={4}
      {...getRootProps()}
    >
      <Input {...getInputProps()} />
      <VStack spacing={2}>
        <Button variant="outline" colorScheme="blue">
          {content}
        </Button>
        {fileName && <Text fontSize="sm" color="gray.600">📂 {fileName}</Text>}
      </VStack>
    </Flex>
  );
}

export default Dropzone;
