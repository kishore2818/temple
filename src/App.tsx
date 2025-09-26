import React, { useState } from 'react';
import { Home, ArrowLeft, Volume2 } from 'lucide-react';
import HomeScreen from './components/HomeScreen';
import LanguageSelection from './components/LanguageSelection';
import MainMenu from './components/MainMenu';
import DarshanTimings from './components/DarshanTimings';
import BookingTokens from './components/BookingTokens';
import TempleMap from './components/TempleMap';
import CrowdUpdates from './components/CrowdUpdates';
import Donations from './components/Donations';
import HeritageInfo from './components/HeritageInfo';
import HelpAssistance from './components/HelpAssistance';
import FeedbackSection from './components/FeedbackSection';

export type Screen = 
  | 'home' 
  | 'language' 
  | 'menu' 
  | 'darshan' 
  | 'booking' 
  | 'map' 
  | 'crowd' 
  | 'donations' 
  | 'heritage' 
  | 'help' 
  | 'feedback';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  });
  const [soundEnabled, setSoundEnabled] = useState(true);

  const navigateToScreen = (screen: Screen) => {
    if (soundEnabled) {
      // In a real implementation, you would play a bell sound here
      console.log('🔔 Navigation sound');
    }
    setCurrentScreen(screen);
  };

  const goBack = () => {
    switch (currentScreen) {
      case 'language':
        setCurrentScreen('home');
        break;
      default:
        setCurrentScreen('menu');
        break;
    }
  };

  const goHome = () => {
    setCurrentScreen('home');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateToScreen} language={selectedLanguage} />;
      case 'language':
        return (
          <LanguageSelection
            onLanguageSelect={setSelectedLanguage}
            onNavigate={navigateToScreen}
            currentLanguage={selectedLanguage}
          />
        );
      case 'menu':
        return <MainMenu onNavigate={navigateToScreen} language={selectedLanguage} />;
      case 'darshan':
        return <DarshanTimings language={selectedLanguage} />;
      case 'booking':
        return <BookingTokens language={selectedLanguage} />;
      case 'map':
        return <TempleMap language={selectedLanguage} />;
      case 'crowd':
        return <CrowdUpdates language={selectedLanguage} />;
      case 'donations':
        return <Donations language={selectedLanguage} />;
      case 'heritage':
        return <HeritageInfo language={selectedLanguage} />;
      case 'help':
        return <HelpAssistance language={selectedLanguage} />;
      case 'feedback':
        return <FeedbackSection language={selectedLanguage} />;
      default:
        return <HomeScreen onNavigate={navigateToScreen} language={selectedLanguage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Mandala Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-yellow-600"></div>
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full border-4 border-red-800"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-8 border-yellow-600"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-4 border-red-800"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border-6 border-yellow-600"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full border-6 border-red-800"></div>
      </div>

      {/* Navigation Bar */}
      {currentScreen !== 'home' && (
        <nav className="relative z-10 flex items-center justify-between p-4 bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg">
          <div className="flex items-center space-x-4">
            {currentScreen !== 'menu' && (
              <button
                onClick={goBack}
                className="flex items-center space-x-2 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg transition-colors"
              >
                <ArrowLeft size={24} />
                <span className="text-lg font-medium">Back</span>
              </button>
            )}
            <button
              onClick={goHome}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
            >
              <Home size={24} />
              <span className="text-lg font-medium">Home</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg transition-colors ${
                soundEnabled 
                  ? 'bg-yellow-600 hover:bg-yellow-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              <Volume2 size={24} />
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 bg-red-700 rounded-lg">
              <span>{selectedLanguage.flag}</span>
              <span className="text-lg font-medium">{selectedLanguage.name}</span>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        {renderCurrentScreen()}
      </main>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-red-800 to-yellow-600"></div>
    </div>
  );
}

export default App;