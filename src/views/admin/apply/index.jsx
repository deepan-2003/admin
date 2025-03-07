import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import BannerList from './components/BannerList';
import BonafideForm from './components/BonafideForm';
import TransferCertificateForm from './components/TransferCertificateForm';
import WiFiRegistrationForm from './components/WiFiRegistrationForm';
import DuplicateIDForm from './components/DuplicateIDForm';
import DiscontinueRefundForm from './components/DiscontinueRefundForm';

const Apply = () => {
    const [selectedBanner, setSelectedBanner] = useState('Bonafide');
    // eslint-disable-next-line no-unused-vars
    const [bannerColor, setBannerColor] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [bannerIcon, setBannerIcon] = useState('');

    const renderForm = () => {
        switch (selectedBanner) {
            case 'Bonafide':
                return <BonafideForm bannerColor="blue.500" bannerIcon="GiDiploma" />;
            case 'Transfer Certificate':
                return <TransferCertificateForm bannerColor="red.500" bannerIcon="MdAssignment" />;
            case 'WiFi':
                return <WiFiRegistrationForm bannerColor="green.500" bannerIcon="MdWifi" />;
            case 'Duplicate ID':
                return <DuplicateIDForm bannerColor="purple.500" bannerIcon="MdPerson" />;
            case 'Discontinue Refund':
                return <DiscontinueRefundForm bannerColor="#C51077" bannerIcon="MdCancel" />;
            default:
                return null;
        }
    };

    return (
        <Flex
            h="100vh"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                w="280px"
                h="calc(100vh - 200px)" // Adjust height
                bg="#f9f9f9"
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                overflowY="auto" // Enables vertical scrolling for banners
                position="relative"
                style={{ overflowX: 'hidden' }} // Hide horizontal scrollbar
            >
                <Box
                    position="relative"
                    top="0" // Move the banners upwards
                >
                    <BannerList onSelectBanner={(bannerName) => {
                        setSelectedBanner(bannerName);
                        switch (bannerName) {
                            case 'Bonafide':
                                setBannerColor('blue.500');
                                setBannerIcon('GiDiploma');
                                break;
                            case 'Transfer Certificate':
                                setBannerColor('red.500');
                                setBannerIcon('MdAssignment');
                                break;
                            case 'WiFi':
                                setBannerColor('green.500');
                                setBannerIcon('MdWifi');
                                break;
                            case 'Duplicate ID':
                                setBannerColor('purple.500');
                                setBannerIcon('MdPerson');
                                break;
                            case 'Discontinue Refund':
                                setBannerColor('#C51077');
                                setBannerIcon('MdCancel');
                                break;
                            default:
                                break;
                        }
                    }} />
                </Box>
            </Box>
            <Box
                flex="1"
                overflowY="auto"
                p="20px"
                h="calc(100vh - 40px)" // Adjust the height to allow scrolling
                style={{ overflowX: 'hidden' }} // Hide horizontal scrollbar
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'gray.500',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'gray.100',
                    },
                }}
            >
                <Flex
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    {renderForm()}
                </Flex>
            </Box>
        </Flex>
    );
};

export default Apply;
