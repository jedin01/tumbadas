// AppLayout.tsx
import React, { ReactNode } from 'react';
import ToasterProvider from '../components/ToasterProvider';
import Navbar from '../components/Navbar';
import Menu from '../components/menu/Menu';
import Footer from '../components/Footer';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div
      id="rootContainer"
      className="w-full p-0 m-0 overflow-visible min-h-screen flex flex-col justify-between"
    >
      <ToasterProvider />
      {/* ScrollRestoration é do react-router, no Inertia não precisa */}
      <div>
        <Navbar />
        <div className="w-full flex gap-0 pt-20 xl:pt-[96px] 2xl:pt-[112px] mb-auto">
          <div className="hidden xl:block xl:w-[250px] 2xl:w-[280px] 3xl:w-[350px] border-r-2 border-base-300 dark:border-slate-700 px-3 xl:px-4 xl:py-1">
            <Menu />
          </div>
          <div className="w-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
