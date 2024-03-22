'use client';
import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { GrShift } from 'react-icons/gr';
import { BiAdjust } from 'react-icons/bi';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { IconType } from 'react-icons';
import SidebarItem from './items';

const items = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: MdDashboard,
  },
  {
    name: 'Staff List',
    path: '/staffList',
    icon: FaList,
  },
  {
    name: 'Shifts',
    path: '/shifts',
    icon: GrShift,
  },
  {
    name: 'Routine',
    path: '/routine',
    icon: BiAdjust,
  },
  {
    name: 'Applications',
    path: '/applications',
    icon: MdOutlineSettingsApplications,
  },
];
interface SidebarItems {
  name: string;
  path: string;
  icon: IconType;
}

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 shadow-lg bg-white z-10">
      <div className="flex flex-col space-y-10 w-full p-4 text-center">
        <div className="flex flex-col space-y-2">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
