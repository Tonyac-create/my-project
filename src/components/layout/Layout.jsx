import React from 'react';
import NavBar from './NavBar';

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
    </div>
  );
}