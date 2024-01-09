import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ }) => {
  return (
      <Navbar />
  );
};

export default Layout;