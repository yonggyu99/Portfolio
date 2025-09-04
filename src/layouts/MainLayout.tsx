import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      <main className="flex items-center justify-center min-h-screen pt-20 pb-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
