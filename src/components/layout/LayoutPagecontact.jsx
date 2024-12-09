import React from 'react';
import NavBarContact from './NavBarContact';

export function LayoutPagecontact({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBarContact />
      {children}
    </div>
  );
}