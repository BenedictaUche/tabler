import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
