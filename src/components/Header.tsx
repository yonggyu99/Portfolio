import Logo from './Logo';

const Header = () => {
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
  };

  return (
    <header className="fixed top-0 left-0 right-2 z-50 px-8 py-6">
      <nav className="flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer"
        >
          <Logo />
        </button>

        <ul className="flex space-x-8">
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
      </nav>
    </header>
  );
};

export default Header;
