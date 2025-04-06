import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-green-100">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-xl font-bold">Welcome to the Home Page.</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
