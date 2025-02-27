import React, { useState, useEffect } from "react";
import { Avatar, Box, Text, useColorModeValue, Grid, GridItem, Input, IconButton } from "@chakra-ui/react";
import { FaCamera, FaTrash } from "react-icons/fa";
import Card from "components/card/Card.js";

export default function Banner(props) {
  const { 
    banner, avatar, name, institution, degree, branch, currentsemester, dob, gender, mobileno, mailid, 
    isEditing 
  } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("white !important", "#111C44 !important");
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");

  // Editable Fields State
  const [editableData, setEditableData] = useState({
    name, institution, degree, branch, currentsemester, dob, gender, mobileno, mailid
  });

  const [profilePic, setProfilePic] = useState(avatar); // Profile picture state

  // Update local state when props change
  useEffect(() => {
    setEditableData({ name, institution, degree, branch, currentsemester, dob, gender, mobileno, mailid });
    setProfilePic(avatar); // Update profile picture if props change
  }, [name, institution, degree, branch, currentsemester, dob, gender, mobileno, mailid, avatar]);

  const handleChange = (field, value) => {
    setEditableData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center" p="20px" w="100%">
      {/* Background Banner */}
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="150px"
        w="100%"
        position="relative"
      />
      
      {/* Profile Picture */}
      <Box position="relative" mx="auto" w="120px" h="120px">
        <Avatar
          src={profilePic}
          h="120px"
          w="120px"
          mt="-60px"
          border="4px solid"
          borderColor={borderColor}
          _hover={{ opacity: isEditing ? 0.8 : 1, cursor: isEditing ? "pointer" : "default" }}
        />
        {isEditing && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
            <IconButton
              icon={<FaCamera />}
              position="absolute"
              bottom="50px"
              right="5px"
              size="sm"
              borderRadius="full"
              bg="gray.600"
              color="white"
              _hover={{ bg: "gray.500" }}
              onClick={() => document.querySelector('input[type="file"]').click()}
            />
          </>
        )}
      </Box>

      {/* Name Field */}
      {isEditing ? (
        <Input
          value={editableData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          fontSize="2xl"
          fontWeight="bold"
          mt="-50px"
          textAlign="center"
          variant="filled"
        />
      ) : (
        <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="-50px" textAlign="center">
          {editableData.name}
        </Text>
      )}

      {/* Student Information Grid */}
      <Grid templateColumns="repeat(2, 1fr)" gap={3} mt={5} w="100%">
        {[
          { label: "Institution", field: "institution" },
          { label: "Degree", field: "degree" },
          { label: "Branch", field: "branch" },
          { label: "Current Semester", field: "currentsemester" },
          { label: "Date of Birth", field: "dob" },
          { label: "Gender", field: "gender" },
          { label: "Mobile No", field: "mobileno" },
          { label: "Mail Id", field: "mailid" },
        ].map(({ label, field }) => (
          <GridItem 
            key={field} 
            bg={bgColor} 
            p={2} 
            borderRadius="10px"
            minH="50px"
            w="100%" 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            position="relative"
            _hover={{ bg: hoverBgColor, cursor: isEditing ? "pointer" : "default" }}
          >
            <Text 
              color={textColorPrimary} 
              fontSize="sm" 
              fontWeight="bold"
              whiteSpace="nowrap"
            >
              {label}
            </Text>
            {isEditing ? (
              <Input
                value={editableData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                fontSize="sm"
                textAlign="center"
                mt="1"
                w="100%" 
                p="1"  
                wordBreak="break-word"
                whiteSpace="normal"
                variant="filled"
              />
            ) : (
              <Text color={textColorSecondary} fontSize="sm" textAlign="center" mt="1" wordBreak="break-word" whiteSpace="normal">
                {editableData[field]}
              </Text>
            )}
            {/* Trash Icon for Editing Mode */}
            {isEditing && (
              <IconButton
                icon={<FaTrash />}
                size="xs"
                colorScheme="red"
                position="absolute"
                top={1}
                right={1}
                onClick={() => handleChange(field, "")} // Clear the field
              />
            )}
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
}