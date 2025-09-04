import Logo from './Logo';

const Header = () => {
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-2 z-50 px-8 py-6">
      <nav className="flex justify-between items-center">
        <Logo />

        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white text-xl hover:text-secondary transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
