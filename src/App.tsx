import { useState } from 'react';
import Main from './pages/Main';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      {!showWelcome && <Main />}
    </>
  );
}

export default App;
