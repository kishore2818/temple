import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import type { Screen, Language } from '../App';

interface LanguageSelectionProps {
  onLanguageSelect: (language: Language) => void;
  onNavigate: (screen: Screen) => void;
  currentLanguage: Language;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' }
];

const LanguageSelection: React.FC<LanguageSelectionProps> = ({
  onLanguageSelect,
  onNavigate,
  currentLanguage
}) => {
  const handleLanguageSelect = (language: Language) => {
    onLanguageSelect(language);
    setTimeout(() => onNavigate('menu'), 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Globe size={60} className="text-red-800 mr-4" />
            <h1 className="text-5xl font-bold text-red-900">Select Language</h1>
            <Globe size={60} className="text-red-800 ml-4" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-2xl text-red-700">भाषा चुनें / Choose your preferred language</p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 ${
                currentLanguage.code === language.code
                  ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-red-50'
                  : 'border-red-200 hover:border-yellow-400'
              }`}
            >
              {/* Selection Indicator */}
              {currentLanguage.code === language.code && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {language.flag}
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-2">
                  {language.name}
                </h3>
                <p className="text-lg text-red-700 font-medium">
                  {language.nativeName}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('menu')}
            className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Continue with {currentLanguage.name} / {currentLanguage.nativeName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;