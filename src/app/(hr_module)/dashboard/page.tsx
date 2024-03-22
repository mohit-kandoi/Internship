// pages/index.tsx
'use client';
import React from 'react';
import DropdownComponent from './dropdown';
import CustomPieChart from './piechart';
import { Card, CardBody } from '@nextui-org/react';

const Dashboard: React.FC = () => {
  const onDuty = 50;
  const onLeave = 50;

  return (
    <div className="w-full h-screen flex flex-col">
      {/* First row */}
      <div className="w-full h-1/6 flex  m-2 bg-gray-100">
        <div className="w-1/4 m-1 ">
          <Card className="bg-white h-full">
            <CardBody>
              <p className=" text-center bg-gray-200 rounded-md p-1 ml-4 mr-4">
                Staff on Duty
              </p>
              <p className=" text-center">{onDuty}</p>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/4 m-1">
          <Card className="bg-white h-full">
            <CardBody>
              <p className="text-center bg-gray-200 rounded-md p-1 ml-4 mr-4">
                Staff on Leave
              </p>
              <p className="text-center">50</p>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/4 m-1">
          <Card className="bg-white h-full">
            <CardBody>
              <p className=" text-center bg-gray-200 rounded-md p-1 ml-4 mr-4">
                Applications
              </p>
              <p className=" text-center"></p>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/4 m-1">
          <Card className="bg-white h-full">
            <CardBody>
              <p className=" text-center bg-gray-200 rounded-md p-1 ml-4 mr-4">
                Total Applications
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Second row */}
      <div className="w-full h-3/6 flex  m-2">
        <div className="w-3/5 bg-gray-100 m-1">
          <div className="flex-col">
            <div className="flex justify-end">
              <DropdownComponent />
            </div>
            <div>
              <CustomPieChart value1={125} value2={5} />
            </div>
          </div>
        </div>
        <div className="w-2/5 m-1">
          <Card className="bg-white h-full">
            <CardBody>
              <p className="text-center bg-gray-200 rounded-md p-1 ml-4 mr-4">
                NOTICES
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Third row */}
      <div className="w-full h-2/6 bg-gray-100  m-2 text-center">Table</div>
    </div>
  );
};

export default Dashboard;
