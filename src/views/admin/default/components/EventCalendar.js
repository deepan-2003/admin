import { Box, Text, VStack, HStack, Icon, Divider, useBreakpointValue } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles for calendar
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";

// Sample events
const events = [
  { date: "2025-03-01", title: "National Day", type: "Holiday", color: "pink.200" },
  { date: "2025-03-10", title: "Summer Holiday Event", type: "Event", color: "blue.200" },
  { date: "2025-03-22", title: "School Function", type: "Event", color: "red.200" },
  { date: "2025-03-26", title: "Dean Meeting", type: "Event", color: "green.200" },
  { date: "2025-03-30", title: "Carnival in the City", type: "Holiday", color: "pink.200" },
];

// Motion Wrapper
const MotionBox = motion(Box);

const EventCalendar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <MotionBox
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="lg"
      w="100%"
      maxW={isMobile ? "100%" : "900px"}
      mx="auto"
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      gap={6}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Calendar Section */}
      <Box flex={isMobile ? "none" : "1"} p={4}>
        <Calendar
          tileContent={({ date }) => {
            const eventDay = events.find((e) => e.date === date.toISOString().split("T")[0]);
            return eventDay ? <Text fontSize="sm" color="red.500">•</Text> : null;
          }}
        />
      </Box>

      {/* Events List */}
      <VStack spacing={4} align="stretch" flex={isMobile ? "none" : "1"}>
        {events.map((event, index) => (
          <Box key={index} p={4} bg={event.color} borderRadius="lg" boxShadow="md">
            <HStack spacing={3}>
              <Icon as={FaRegCalendarAlt} color="gray.600" boxSize={5} />
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold">{event.title}</Text>
                <Text fontSize="sm" color="gray.600">{event.type}</Text>
              </VStack>
            </HStack>
            {index !== events.length - 1 && <Divider mt={3} />}
          </Box>
        ))}
      </VStack>
    </MotionBox>
  );
};

export default EventCalendar;
