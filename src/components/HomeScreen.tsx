import React, { useEffect, useState } from 'react';
import { Sparkles, Bell } from 'lucide-react';
import type { Screen, Language } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  language: Language;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, language }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const welcomeMessages = {
    en: 'Welcome to Divine Temple',
    hi: 'दिव्य मंदिर में आपका स्वागत है',
    ta: 'திவ்ய கோவிலுக்கு வரவேற்கிறோம்',
    te: 'దివ్య ఆలయానికి స్వాగతం'
  };

  const getMessage = (key: string) => {
    return (welcomeMessages as any)[language.code] || welcomeMessages.en;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Temple Image Placeholder */}
      <div className="relative mb-8">
        <div className="w-80 h-80 bg-gradient-to-b from-yellow-400 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
          <div className="w-64 h-64 bg-gradient-to-t from-red-900 to-yellow-500 rounded-full flex items-center justify-center">
            <Bell size={120} className="text-white animate-pulse" />
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <Sparkles size={32} className="text-red-800" />
        </div>
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-red-900 mb-4 tracking-wide">
          {getMessage('welcome')}
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-6"></div>
        <p className="text-2xl text-red-700 font-medium">
          {currentTime.toLocaleTimeString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          })}
        </p>
        <p className="text-xl text-gray-700 mt-2">
          {currentTime.toLocaleDateString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      {/* Start Button */}
      <button
        onClick={() => onNavigate('language')}
        className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-400 hover:to-red-500 text-white text-3xl font-bold py-6 px-16 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300"
      >
        <div className="flex items-center space-x-4">
          <Sparkles size={36} className="animate-pulse" />
          <span>Start Here / यहाँ शुरू करें</span>
          <Sparkles size={36} className="animate-pulse" />
        </div>
      </button>

      {/* Language Indicator */}
      <div className="absolute bottom-8 left-8">
        <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg">
          <p className="text-sm text-gray-600 mb-2">Current Language</p>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{language.flag}</span>
            <span className="text-lg font-medium text-gray-800">{language.name}</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-8 border-yellow-400 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute top-8 right-8 w-32 h-32 border-4 border-red-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-6 border-yellow-600 rounded-full opacity-20 animate-bounce"></div>
    </div>
  );
};

export default HomeScreen;