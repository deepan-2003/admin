import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  VStack,
} from "@chakra-ui/react";
import Banner from "views/admin/profile/components/Banner";
import EducationDetails from "views/admin/profile/components/EducationDetails";
import Skills from "views/admin/profile/components/Skills";
import Projects from "views/admin/profile/components/Projects";
import Experience from "views/admin/profile/components/Experience";
import Certifications from "views/admin/profile/components/Certifications";
import Activities from "views/admin/profile/components/Activities";
import Achievements from "views/admin/profile/components/Achievements";
import Publications from "views/admin/profile/components/Publications";
import CgpaAnalysis from "views/admin/profile/components/CgpaAnalysis";

import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";

export default function Overview() {
  const [isMainEditing, setIsMainEditing] = useState(false);
  const [editingStates, setEditingStates] = useState({
    banner: false,
    education: false,
    skills: false,
    projects: false,
    experience: false,
    certifications: false,
    activities: false,
    achievements: false,
    publications: false,
    cgpa: false,
  });

  const handleMainEditToggle = () => {
    setIsMainEditing((prev) => !prev);
    if (isMainEditing) {
      // Logic to save the changes can be added here if needed
      setEditingStates({
        banner: false,
        education: false,
        skills: false,
        projects: false,
        experience: false,
        certifications: false,
        activities: false,
        achievements: false,
        publications: false,
        cgpa: false,
      });
    } else {
      // When entering edit mode, ensure all component editing states are reset
      setEditingStates({
        banner: false,
        education: false,
        skills: false,
        projects: false,
        experience: false,
        certifications: false,
        activities: false,
        achievements: false,
        publications: false,
        cgpa: false,
      });
    }
  };

  const handleComponentEditToggle = (component) => {
    setEditingStates((prev) => ({
      ...prev,
      [component]: !prev[component],
    }));
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Button onClick={handleMainEditToggle} colorScheme="blue" size="lg" mb={4}>
        {isMainEditing ? "Save Changes" : "Edit Profile"}
      </Button>

      {/* Banner, Education, and Skills */}
      <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap="24px" mb="24px" alignItems="stretch">
        <Box height="450px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Banner
            banner={banner}
            avatar={avatar}
            name="Mohamed Riffath K"
            institution="Madras Institute of Technology"
            degree="Bachelors in Engineering"
            branch="Computer Technology"
            currentsemester="8"
            dob="18-12-2023"
            gender="Male"
            mobileno="8667546405"
            mailid="riffath786mohamed@gmail.com"
            isEditing={editingStates.banner}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('banner')} colorScheme="blue" size="sm">
                {editingStates.banner ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>

        <Box height="450px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <EducationDetails
            education={[
              { level: "College", degree: "B.Tech in Computer Science", institution: "Stanford University", year: "2024", score: "8.9 CGPA" },
              { level: "College", degree: "M.Tech in Artificial Intelligence", institution: "MIT", year: "2026", score: "9.2 CGPA" },
              { level: "School", degree: "High School Diploma", institution: "ABC High School", year: "2020", score: "92%" },
              { level: "School", degree: "SSLC", institution: "ABC High School", year: "2018", score: "92%" },
            ]}
            isEditing={editingStates.education}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('education')} colorScheme="blue" size="sm">
                {editingStates.education ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>

        <Box height="450px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Skills
            professionalSkills={[
              { name: "Python", level: 90 },
              { name: "Machine Learning", level: 85 },
              { name: "React.js", level: 80 },
              { name: "Java", level: 75 },
              { name: "UI/UX", level: 80 },
              { name: "C++", level: 80 },
            ]}
            softSkills={["Leadership", "Communication", "Problem Solving", "Teamwork","Communication", "Problem Solving"]}
            isEditing={editingStates.skills}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('skills')} colorScheme="blue" size="sm">
                {editingStates.skills ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>
      </Grid>

      {/* Projects and Experience */}
      <Grid templateColumns="repeat(2, 1fr)" gap="24px" mb="24px" alignItems="stretch">
        <Box height="350px" overflowY="auto" css={{ scrollbarWidth: "none", msOverflowStyle: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          <Projects
            projects={[
              { title: "AI Chatbot", domain: "NLP", timePeriod: "2023", description: "A chatbot powered by AI for customer service." },
              { title: "Real-Time Translation", domain: "AI/ML", timePeriod: "2022", description: "A tool for translating languages in real time." },
              { title: "Weather App", domain: "Web Development", timePeriod: "2021", description: "An app that provides real-time weather updates." },
              { title: "E-Commerce Platform", domain: "E-Commerce", timePeriod: "2020", description: "A platform for buying and selling products." },
            ]}
            isEditing={editingStates.projects}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle("projects")} colorScheme="blue" size="sm">
                {editingStates.projects ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>

        <Box height="350px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Experience
            experiences={[
              { 
                role: "Software Engineer", 
                company: "Google", 
                duration: "2021 - Present", 
                description: "Developed scalable backend systems using Go and Kubernetes. Collaborated with cross-functional teams to deliver high-quality software solutions." 
              },
              { 
                role: "Research Intern", 
                company: "Facebook AI", 
                duration: "2020 - 2021", 
                description: "Conducted research on natural language processing (NLP) models. Published a paper on transformer-based architectures for text summarization." 
              },
              { 
                role: "Junior Developer", 
                company: "Startup Inc.", 
                duration: "2019 - 2020", 
                description: "Built and maintained RESTful APIs using Node.js and Express. Assisted in the development of the company's flagship web application." 
              },
            ]}
            isEditing={editingStates.experience}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('experience')} colorScheme="blue" size="sm">
                {editingStates.experience ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>
      </Grid>

      {/* Certifications, Activities, and Achievements */}
      <Grid templateColumns="repeat(3, 1fr)" gap="24px" mb="24px" alignItems="stretch">
        <Box height="350px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Certifications
            certificates={[
              { name: "AI & Machine Learning", issuer: "Coursera", year: "2024", link: "https://example.com" },
              { name: "Cloud Computing", issuer: "AWS", year: "2023", link: "https://example.com" },
              { name: "Data Science", issuer: "edX", year: "2022", link: "https://example.com" },
              { name: "Cybersecurity Essentials", issuer: "Cisco", year: "2021", link: "https://example.com" },
            ]}
            isEditing={editingStates.certifications}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('certifications')} colorScheme="blue" size="sm">
                {editingStates.certifications ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>

        <Box height="350px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Activities
            activities={[
              { role: "Lead Organizer", organization: "TechFest 2024", year: "2024", type: "Leadership" },
              { role: "Hackathon Judge", organization: "AI Challenge", year: "2023", type: "Task-Based" },
              { role: "Workshop Facilitator", organization: "Coding Bootcamp", year: "2022", type: "Teaching" },
              { role: "Volunteer", organization: "Local NGO", year: "2021", type: "Community Service" },
            ]}
            isEditing={editingStates.activities}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('activities')} colorScheme="blue" size="sm">
                {editingStates.activities ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>

        <Box height="350px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Achievements
            achievements={[
              { title: "Best Research Paper Award", description: "Received for outstanding AI research", year: "2023" },
              { title: "Hackathon Winner", description: "Won first place in a global AI hackathon", year: "2022" },
              { title: "Innovative Project Award", description: "Recognized for innovative solutions in technology.", year: "2021" },
              { title: "Employee of the Year", description: "Awarded for exceptional performance in 2020.", year: "2020" },
            ]}
            isEditing={editingStates.achievements}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('achievements')} colorScheme="blue" size="sm">
                {editingStates.achievements ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>
      </Grid>

      {/* CGPA Analysis and Publications */}
      <Grid templateColumns="repeat(2, 1fr)" gap="24px" mb="24px" alignItems="stretch">
        <Box height="450px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <CgpaAnalysis
            data={[
              { semester: "Sem 1", cgpa: 8.9 },
              { semester: "Sem 2", cgpa: 9.0 },
              { semester: "Sem 3", cgpa: 8.7 },
              { semester: "Sem 4", cgpa: 9.2 },
              { semester: "Sem 5", cgpa: 7.2 },
              { semester: "Sem 6", cgpa: 6.2 },
            ]}
          />
          
        </Box>

        <Box height="400px" overflowY="auto" css={{ scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Publications
            publications={[
              { title: "Deep Learning for Image Recognition", journal: "IEEE Transactions", authors: "John Doe, Jane Smith", year: "2023", link: "https://example.com" },
              { title: "AI in Healthcare", journal: "Nature AI", authors: "Alice Brown, Bob White", year: "2022", link: "https://example.com" },
              { title: "Blockchain Technology in Finance", journal: "Financial Tech Journal", authors: "Charlie Green, Emma Black", year: "2021", link: "https://example.com" },
              { title: "Quantum Computing Basics", journal: "Quantum Journal", authors: "Daniel Grey, Fiona Blue", year: "2020", link: "https://example.com" },
            ]}
            isEditing={editingStates.publications}
          />
          {isMainEditing && (
            <VStack mt={4}>
              <Button onClick={() => handleComponentEditToggle('publications')} colorScheme="blue" size="sm">
                {editingStates.publications ? "Save" : "Edit"}
              </Button>
            </VStack>
          )}
        </Box>
      </Grid>
    </Box>
  );
}