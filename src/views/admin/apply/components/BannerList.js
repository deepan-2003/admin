import React from 'react';
import banners from '../variables/banners.json';
import {
    Box,
    Text,
    Flex,
    Icon,
    VStack,
} from '@chakra-ui/react';
import {
    MdAssignment,
    MdFileCopy,
    MdWifi,
    MdPerson,
    MdLock,
    MdCancel, // Import the cancel icon
} from 'react-icons/md';
import { GiDiploma } from 'react-icons/gi';
import { FaIdCard } from 'react-icons/fa'; // Import FaIdCard

const iconComponentMap = {
    "MdAssignment": MdAssignment,
    "MdFileCopy": MdFileCopy,
    "MdWifi": MdWifi,
    "MdPerson": MdPerson,
    "MdLock": MdLock,
    "GiDiploma": GiDiploma,
    "MdCancel": MdCancel, // Add the cancel icon to the map
    "FaIdCard": FaIdCard, // Add FaIdCard to the map
};

const colors = [
    "blue.500",
    "red.500",
    "yellow.600", // Vibrant yellow
    "orange.500",
    "pink.500",
];

const BannerList = ({ onSelectBanner }) => {
    return (
        <Box
            w="100%"
            h="100%"
            overflowY="auto"
            p="10px"
            bg="#f9f9f9"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            style={{ marginTop: '30px' }} // Maintain the original position
        >
            <VStack spacing="10px" align="stretch">
                {banners.map((banner, index) => {
                    let bannerColor;

                    // Update the icon and color for Bonafide
                    if (banner.name === 'Bonafide') {
                        banner.icon = 'GiDiploma';
                        bannerColor = 'blue.500'; // Use a consistent blue color
                    }

                    // Update the icon and color for Transfer Certificate
                    if (banner.name === 'Transfer Certificate') {
                        banner.icon = 'MdAssignment';
                        bannerColor = 'red.500'; // Use a consistent red color
                    }

                    // Update the icon and color for Discontinue Refund
                    if (banner.name === 'Discontinue Refund') {
                        banner.icon = 'MdCancel';
                        bannerColor = '#C51077'; // Use a darker pink color
                    }

                    // Update the color for WiFi
                    if (banner.name === 'WiFi') {
                        bannerColor = 'green.500'; // Assign green color to WiFi
                    }

                    // Default color for other banners
                    if (!bannerColor) {
                        bannerColor = colors[index % colors.length];
                    }

                    // Special color for Duplicate ID
                    if (banner.name === 'Duplicate ID') {
                        banner.icon = 'FaIdCard'; // Use FaIdCard for Duplicate ID
                        bannerColor = 'purple.500';
                    }

                    return (
                        <Box
                            key={banner.name}
                            w="100%"
                            h="120px" // Increased height
                            p="20px" // Increased padding
                            cursor="pointer"
                            border="1px solid #ddd"
                            borderRadius="10px"
                            bgGradient={`linear-gradient(to bottom, #f0f0f0, #e0e0e0)`} // Gradient background
                            _hover={{
                                bgGradient: `linear-gradient(to bottom, #e0e0f0, #d0d0d0)`, // Hover gradient
                                transform: 'scale(1.05)',
                                transition: 'transform 0.2s ease-in-out',
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" // Subtle shadow on hover
                            }}
                            onClick={() => onSelectBanner(banner.name)}
                        >
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                h="100%"
                            >
                                <Icon
                                    as={iconComponentMap[banner.icon]}
                                    boxSize="30px" // Reduced icon size
                                    color={bannerColor} // Assign the specific color for Discontinue Refund or use the regular color
                                    mb="15px" // Increased margin bottom
                                />
                                <Text
                                    fontWeight="bold"
                                    fontSize="lg"
                                    textAlign="center"
                                    w="100%"
                                    color={bannerColor} // Match text color with icon
                                >
                                    {banner.name}
                                </Text>
                            </Flex>
                        </Box>
                    );
                })}
            </VStack>
        </Box>
    );
};

export default BannerList;
