'use client';
import React, { useMemo } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { GrShift } from 'react-icons/gr';
import { BiAdjust } from 'react-icons/bi';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { IconType } from 'react-icons';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarItems {
  name: string;
  path: string;
  icon: IconType;
}
const SidebarItem = ({ item }: { item: SidebarItems }) => {
  const { name, icon: Icon, path } = item;
  const router = useRouter();
  const onClick = () => {
    router.push(path);
  };

  const pathname = usePathname();
  const isActive = useMemo(() => {
    return path === pathname;
  }, [path, pathname]);
  return (
    <div
      className={`flex items-center space-x-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-200 cursor-pointer hover:text-blue-400 ${
        isActive && 'bg-slate-200 text-blue-400'
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
};

export default SidebarItem;
