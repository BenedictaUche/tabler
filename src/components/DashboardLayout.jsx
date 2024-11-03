import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <Header />
      <main className="sm:p-6 p-1 pt-20 sm:pt-40">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
