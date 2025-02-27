import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdSchedule,
  MdCalendar,
  MdToday,
  MdLibraryBooks
} from 'react-icons/md';

import { AttendanceIcon } from 'components/icons/Icons';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

import Timetable from 'views/admin/timetable';
import CoursePage from 'views/admin/courses'; // Import the Courses page



// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
 
  {
    name: 'Timetable',
    layout: '/admin',
    path: '/timetable',
    icon: <Icon as={MdToday} width="20px" height="20px" color="inherit" />,
    component: <Timetable />, // Ensure this matches your export
  },

  {
    name: 'Courses', // Adding Courses page
    layout: '/admin',
    path: '/courses',
    icon: <Icon as={MdLibraryBooks} width="20px" height="20px" color="inherit" />, // Use MdLibraryBooks for a course-related icon
    component: <CoursePage />, // Ensure this matches your export
  },
  
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;