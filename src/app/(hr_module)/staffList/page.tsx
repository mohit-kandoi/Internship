'use client';
import React from 'react';
import App from './Table/App';
import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const StaffList = () => {
  const router = useRouter();
  function addStaff() {
    router.push('staffList/addstaff');
  }
  return (
    <NextUIProvider>
      <div>
        <h1 className="font-semibold text-center">STAFF LIST</h1>
        <div className="flex justify-end mb-2">
          <Button size="md" className="bg-gray-200" onClick={addStaff}>
            Add Staff
          </Button>
        </div>
        <App />
      </div>
    </NextUIProvider>
  );
};

export default StaffList;
