import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Main from './pages/Main';
import WelcomeScreen from './components/common/WelcomeScreen';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <Toaster />
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      {!showWelcome && <Main />}
    </>
  );
}

export default App;
