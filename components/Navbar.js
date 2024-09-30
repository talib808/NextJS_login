"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
      
        <Link href="/dashboard" className="font-bold text-lg">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center">
        {user && <span className="mr-4">Welcome, {user.Name}</span>}
        
        
        <Link href="/dashboard" className="mr-4">
          Home
        </Link>
        
       
        <button onClick={handleLogout} className="mr-4">
          Logout
        </button>
        
        <ThemeToggle />
      </div>
    </nav>
  );
}
