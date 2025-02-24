import React, { useState } from "react";
import { 
  Avatar, Box, Text, useColorModeValue, Grid, GridItem, Input
} from "@chakra-ui/react";
import Card from "components/card/Card.js";

export default function Banner(props) {
  const { banner, avatar, name, education, department, workHistory, organization, birthday, languages, isEditing } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("white !important", "#111C44 !important");
  const bgColor = useColorModeValue("gray.100", "gray.700");

  // Editable Fields State
  const [editableData, setEditableData] = useState({
    name,
    education,
    department,
    workHistory,
    organization,
    birthday,
    languages,
  });

  const handleChange = (field, value) => {
    setEditableData({ ...editableData, [field]: value });
  };

  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center" p="20px">
      {/* Background Banner */}
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="150px"
        w="100%"
      />
      
      {/* Profile Picture */}
      <Avatar
        mx="auto"
        src={avatar}
        h="120px"
        w="120px"
        mt="-60px"
        border="4px solid"
        borderColor={borderColor}
      />

      {/* Name Field */}
      {isEditing ? (
        <Input
          value={editableData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          fontSize="2xl"
          fontWeight="bold"
          mt="15px"
          textAlign="center"
        />
      ) : (
        <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="15px" textAlign="center">
          {editableData.name}
        </Text>
      )}

      {/* Student Information Grid */}
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={5} w="100%">
        {[
          { label: "Education", field: "education" },
          { label: "Department", field: "department" },
          { label: "Organization", field: "organization" },
          { label: "Work History", field: "workHistory" },
          { label: "Birthday", field: "birthday" },
          { label: "Languages", field: "languages" },
        ].map(({ label, field }) => (
          <GridItem key={field} bg={bgColor} p={3} borderRadius="10px">
            <Text color={textColorPrimary} fontSize="md" fontWeight="bold">{label}</Text>
            {isEditing ? (
              <Input
                value={editableData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                fontSize="sm"
              />
            ) : (
              <Text color={textColorSecondary} fontSize="sm">{editableData[field]}</Text>
            )}
          </GridItem>
        ))}
      </Grid>

      
    </Card>
  );
}
