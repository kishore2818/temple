import React, { useState, useEffect } from 'react';
import { Users, Clock, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import type { Language } from '../App';

interface CrowdUpdatesProps {
  language: Language;
}

interface CrowdData {
  time: string;
  level: 'low' | 'medium' | 'high';
  waitTime: number;
  capacity: number;
}

const CrowdUpdates: React.FC<CrowdUpdatesProps> = ({ language }) => {
  const [currentCrowd, setCurrentCrowd] = useState<CrowdData>({
    time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    level: 'medium',
    waitTime: 25,
    capacity: 65
  });

  const [hourlyData] = useState<CrowdData[]>([
    { time: '6:00 AM', level: 'low', waitTime: 5, capacity: 25 },
    { time: '7:00 AM', level: 'medium', waitTime: 15, capacity: 45 },
    { time: '8:00 AM', level: 'high', waitTime: 35, capacity: 80 },
    { time: '9:00 AM', level: 'high', waitTime: 45, capacity: 90 },
    { time: '10:00 AM', level: 'high', waitTime: 40, capacity: 85 },
    { time: '11:00 AM', level: 'medium', waitTime: 25, capacity: 60 },
    { time: '12:00 PM', level: 'medium', waitTime: 20, capacity: 55 },
    { time: '1:00 PM', level: 'low', waitTime: 10, capacity: 35 },
    { time: '2:00 PM', level: 'low', waitTime: 8, capacity: 30 },
    { time: '3:00 PM', level: 'low', waitTime: 12, capacity: 40 },
    { time: '4:00 PM', level: 'medium', waitTime: 20, capacity: 50 },
    { time: '5:00 PM', level: 'medium', waitTime: 30, capacity: 65 },
    { time: '6:00 PM', level: 'high', waitTime: 40, capacity: 85 },
    { time: '7:00 PM', level: 'high', waitTime: 50, capacity: 95 },
    { time: '8:00 PM', level: 'medium', waitTime: 25, capacity: 55 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setCurrentCrowd(prev => ({
        ...prev,
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        waitTime: Math.max(5, prev.waitTime + Math.floor(Math.random() * 10 - 5)),
        capacity: Math.max(20, Math.min(100, prev.capacity + Math.floor(Math.random() * 20 - 10)))
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getCrowdColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100 border-green-300';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      case 'high': return 'text-red-600 bg-red-100 border-red-300';
      default: return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  const getCrowdLabel = (level: string) => {
    const labels = {
      low: language.code === 'hi' ? 'कम भीड़' : 'Low Crowd',
      medium: language.code === 'hi' ? 'मध्यम भीड़' : 'Medium Crowd',
      high: language.code === 'hi' ? 'अधिक भीड़' : 'High Crowd'
    };
    return labels[level as keyof typeof labels] || level;
  };

  const getBestTimes = () => {
    const lowCrowdTimes = hourlyData.filter(data => data.level === 'low');
    return lowCrowdTimes.slice(0, 3);
  };

  const getTrend = () => {
    const currentHour = new Date().getHours();
    const nextHour = currentHour + 1;
    const currentData = hourlyData.find(d => parseInt(d.time) === currentHour);
    const nextData = hourlyData.find(d => parseInt(d.time) === nextHour);
    
    if (!currentData || !nextData) return 'stable';
    
    return nextData.capacity > currentData.capacity ? 'increasing' : 'decreasing';
  };

  const trend = getTrend();
  const bestTimes = getBestTimes();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Users size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'भीड़ की स्थिति' : 'Crowd Updates'}
            </h1>
            <Users size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 'वर्तमान प्रतीक्षा समय और भीड़ का स्तर' : 'Current wait times and crowd levels'}
          </p>
        </div>

        {/* Current Status Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Current Crowd Level */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-red-600">
            <div className="flex items-center justify-between mb-4">
              <Users size={40} className="text-red-600" />
              <span className="text-sm text-gray-500">
                {language.code === 'hi' ? 'अपडेट:' : 'Updated:'} {currentCrowd.time}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {language.code === 'hi' ? 'वर्तमान भीड़' : 'Current Crowd'}
            </h3>
            <div className={`inline-block px-4 py-2 rounded-full text-lg font-bold border-2 ${getCrowdColor(currentCrowd.level)}`}>
              {getCrowdLabel(currentCrowd.level)}
            </div>
            <p className="text-3xl font-bold text-red-900 mt-4">
              {currentCrowd.capacity}%
            </p>
            <p className="text-gray-600">
              {language.code === 'hi' ? 'क्षमता का' : 'of capacity'}
            </p>
          </div>

          {/* Wait Time */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-yellow-600">
            <div className="flex items-center justify-between mb-4">
              <Clock size={40} className="text-yellow-600" />
              <div className={`flex items-center space-x-1 ${
                trend === 'increasing' ? 'text-red-600' : 
                trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'
              }`}>
                {trend === 'increasing' ? <TrendingUp size={20} /> : 
                 trend === 'decreasing' ? <TrendingDown size={20} /> : null}
                <span className="text-sm">
                  {trend === 'increasing' ? (language.code === 'hi' ? 'बढ़ रहा' : 'Rising') :
                   trend === 'decreasing' ? (language.code === 'hi' ? 'घट रहा' : 'Falling') :
                   (language.code === 'hi' ? 'स्थिर' : 'Stable')}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {language.code === 'hi' ? 'प्रतीक्षा समय' : 'Wait Time'}
            </h3>
            <p className="text-3xl font-bold text-yellow-700">
              {currentCrowd.waitTime} {language.code === 'hi' ? 'मिनट' : 'min'}
            </p>
            <p className="text-gray-600 mt-2">
              {language.code === 'hi' ? 'अनुमानित समय' : 'Estimated time'}
            </p>
          </div>

          {/* Best Time Alert */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-2xl p-8 border-l-4 border-green-600">
            <div className="flex items-center mb-4">
              <AlertTriangle size={40} className="text-green-600 mr-3" />
              <h3 className="text-lg font-bold text-green-800">
                {language.code === 'hi' ? 'सर्वोत्तम समय' : 'Best Time'}
              </h3>
            </div>
            <div className="space-y-2">
              {bestTimes.map((time, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-green-700 font-medium">{time.time}</span>
                  <span className="text-sm text-green-600">
                    {time.waitTime} {language.code === 'hi' ? 'मिनट' : 'min'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hourly Crowd Graph */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {language.code === 'hi' ? 'आज का भीड़ ट्रेंड' : "Today's Crowd Trend"}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {hourlyData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-2">
                  <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className={`w-full ${
                        data.level === 'low' ? 'bg-green-400' :
                        data.level === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                      } transition-all duration-500 rounded-lg`}
                      style={{ 
                        height: `${data.capacity}%`,
                        marginTop: `${100 - data.capacity}%`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">
                    {data.capacity}%
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-800">{data.time}</p>
                <p className="text-xs text-gray-600">
                  {data.waitTime} {language.code === 'hi' ? 'मिनट' : 'min'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              {language.code === 'hi' ? 'सुझाव' : 'Recommendations'}
            </h3>
            <ul className="space-y-3 text-blue-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'सुबह 6-7 बजे कम भीड़ रहती है' : 'Visit between 6-7 AM for less crowd'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'दोपहर 1-3 बजे सबसे कम भीड़' : 'Afternoon 1-3 PM has lowest crowd'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'शाम 7-8 बजे सबसे अधिक भीड़' : 'Evening 7-8 PM has highest crowd'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'त्योहारों पर अधिक समय लग सकता है' : 'Allow extra time during festivals'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">
              {language.code === 'hi' ? 'महत्वपूर्ण सूचना' : 'Important Information'}
            </h3>
            <ul className="space-y-3 text-yellow-700">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'डेटा हर 5 मिनट में अपडेट होता है' : 'Data updates every 5 minutes'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'प्रतीक्षा समय अनुमानित है' : 'Wait times are estimated'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'विशेष दिनों में समय भिन्न हो सकता है' : 'Times may vary on special days'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'मौसम का भी प्रभाव पड़ता है' : 'Weather conditions may affect timing'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdUpdates;