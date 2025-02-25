/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";

import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import TodaysCourses from "./components/TodaysCourses";
import ProfileDisplay from "./components/ProfileDisplay";
import CGPAIndicator from "./components/CGPAIndicator";
import NoticeBoard from "./components/NoticeBoard";
import EventCalendar from "./components/EventCalendar";
export default function UserReports() {
  const notices = [
    { title: "Exam Schedule Released", date: "Feb 25, 2025", description: "Check the website for details." },
    { title: "Hackathon Registration Open", date: "Feb 27, 2025", description: "Register before March 1st!" },
    { title: "Guest Lecture on AI", date: "March 3, 2025", description: "Join Dr. Smith's session on AI advancements." },
  ];
  const courses = [
    { name: "Biology Molecular", code: "BIO101", lessons: 21, assignments: 5, duration: "50 min", attendance: 79 },
    { name: "Color Theory", code: "ART102", lessons: 10, assignments: 2, duration: "45 min", attendance: 64 },
    { name: "Color Theory", code: "ART102", lessons: 10, assignments: 2, duration: "45 min", attendance: 64 },
    { name: "Color Theory", code: "ART102", lessons: 10, assignments: 2, duration: "45 min", attendance: 64 },
    { name: "Color Theory", code: "ART102", lessons: 10, assignments: 2, duration: "45 min", attendance: 64 },

  ];

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='New Tasks'
          value='154'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid> */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px"  mb='20px'>
      <ProfileDisplay
        name="Arka Maulana"
        location="Surakarta, INA"
        courses={24}
        certifications={18}
        avatar="/avatar.png" // Change this path
      />
      <CGPAIndicator cgpa={8.5} /> {/* Adjust CGPA dynamically */}
    </SimpleGrid>
      

      
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <TodaysCourses courses={courses}/>
        <Tasks />
       
      </SimpleGrid>
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
       
      </SimpleGrid> */}
     

 <NoticeBoard notices={notices} showCalendar={true} />;
 <EventCalendar />
    </Box>
  );
}
