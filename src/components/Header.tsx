import Logo from './Logo';
import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // 메뉴 클릭 시 닫기
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // 스크롤 다운 - 헤더 완전히 숨기기
        gsap.to([headerRef.current, mobileMenuRef.current], {
          y: '-100%',
          duration: 0.6,
          ease: 'power2.inOut',
        });
      } else if (currentScrollY < lastScrollY.current) {
        // 스크롤 업 - 헤더 보이기
        gsap.to([headerRef.current, mobileMenuRef.current], {
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-6 backdrop-blur-sm"
      >
        <nav className="flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white text-xl hover:text-secondary transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl hover:text-secondary transition-colors duration-300"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </header>

      {/* Mobile Dropdown Menu - 헤더와 동일한 스타일 */}
      <div
        ref={mobileMenuRef}
        className={`fixed left-0 right-0 md:hidden backdrop-blur-sm px-4 md:px-8 transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'z-[60] opacity-100'
            : 'z-[-1] opacity-0 pointer-events-none'
        }`}
        style={{
          top: '72px',
        }}
      >
        <ul className="flex flex-col space-y-6 py-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white text-xl hover:text-secondary transition-colors duration-300 w-full text-left"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
