import { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      <main className="flex flex-col items-center justify-start pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
