import { Box, Text, VStack, HStack, Icon, Divider, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars-2";
import { FaBell, FaCalendarAlt, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { renderTrack, renderThumb, renderView } from "../../../../components/scrollbar/Scrollbar";

const MotionBox = motion(Box);

// Custom Notice Card Templates
const noticeTemplates = [
  { bg: "blue.50", icon: FaBell, iconColor: "blue.500" }, // General Notice
  { bg: "yellow.50", icon: FaExclamationTriangle, iconColor: "yellow.500" }, // Warning
  { bg: "green.50", icon: FaCheckCircle, iconColor: "green.500" }, // Success
];

const NoticeBoard = ({ notices, showCalendar }) => {
  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="lg"
      w="100%"
      maxW="100%"
      mx="auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
        Notice Board
      </Text>

      {/* Optional Calendar Section */}
      {showCalendar && (
        <Box bg="gray.100" p={3} borderRadius="lg" textAlign="center" mb={4}>
          <Icon as={FaCalendarAlt} color="purple.500" mr={2} />
          <strong>Upcoming Event:</strong> Workshop on AI - March 5th
        </Box>
      )}

      <Scrollbars
        autoHeight
        autoHeightMax={300}
        renderTrackVertical={renderTrack}
        renderThumbVertical={renderThumb}
        renderView={renderView}
      >
        <VStack spacing={4} align="stretch">
          {notices.map((notice, index) => {
            const template = noticeTemplates[index % noticeTemplates.length]; // Rotate templates
            return (
              <Box key={index} p={4} bg={template.bg} borderRadius="lg" boxShadow="md">
                <HStack spacing={3}>
                  <Icon as={template.icon} color={template.iconColor} boxSize={6} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{notice.title}</Text>
                    <Text fontSize="sm" color="gray.500">{notice.date}</Text>
                  </VStack>
                </HStack>
                <Text fontSize="sm" mt={2}>{notice.description}</Text>
                {index !== notices.length - 1 && <Divider mt={3} />}
              </Box>
            );
          })}
        </VStack>
      </Scrollbars>

      <Button mt={4} colorScheme="blue" w="full">
        View All Notices
      </Button>
    </MotionBox>
  );
};

export default NoticeBoard;
