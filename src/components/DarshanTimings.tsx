import React, { useState } from 'react';
import { Clock, Bell, Sun, Moon, Calendar, AlertCircle } from 'lucide-react';
import type { Language } from '../App';

interface DarshanTimingsProps {
  language: Language;
}

interface TimeSlot {
  time: string;
  name: string;
  nameHi: string;
  type: 'morning' | 'evening' | 'special';
  status: 'upcoming' | 'ongoing' | 'completed';
  crowdLevel: 'low' | 'medium' | 'high';
}

const DarshanTimings: React.FC<DarshanTimingsProps> = ({ language }) => {
  const [selectedTab, setSelectedTab] = useState<'daily' | 'special'>('daily');

  const dailyTimings: TimeSlot[] = [
    {
      time: '5:00 AM - 6:30 AM',
      name: 'Mangal Aarti',
      nameHi: 'मंगल आरती',
      type: 'morning',
      status: 'completed',
      crowdLevel: 'low'
    },
    {
      time: '7:00 AM - 12:00 PM',
      name: 'Morning Darshan',
      nameHi: 'प्रातः दर्शन',
      type: 'morning',
      status: 'ongoing',
      crowdLevel: 'high'
    },
    {
      time: '12:00 PM - 1:00 PM',
      name: 'Bhog Aarti',
      nameHi: 'भोग आरती',
      type: 'morning',
      status: 'upcoming',
      crowdLevel: 'medium'
    },
    {
      time: '4:00 PM - 8:00 PM',
      name: 'Evening Darshan',
      nameHi: 'सायं दर्शन',
      type: 'evening',
      status: 'upcoming',
      crowdLevel: 'high'
    },
    {
      time: '8:00 PM - 8:30 PM',
      name: 'Sandhya Aarti',
      nameHi: 'संध्या आरती',
      type: 'evening',
      status: 'upcoming',
      crowdLevel: 'medium'
    },
    {
      time: '9:00 PM - 9:30 PM',
      name: 'Shayan Aarti',
      nameHi: 'शयन आरती',
      type: 'evening',
      status: 'upcoming',
      crowdLevel: 'low'
    }
  ];

  const specialTimings: TimeSlot[] = [
    {
      time: '6:00 PM - 10:00 PM',
      name: 'Pradosh Vrat Special',
      nameHi: 'प्रदोष व्रत विशेष',
      type: 'special',
      status: 'upcoming',
      crowdLevel: 'high'
    },
    {
      time: '11:00 PM - 12:00 AM',
      name: 'Midnight Special Darshan',
      nameHi: 'मध्यरात्रि विशेष दर्शन',
      type: 'special',
      status: 'upcoming',
      crowdLevel: 'medium'
    }
  ];

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getNextPuja = () => {
    const upcoming = dailyTimings.find(slot => slot.status === 'upcoming');
    return upcoming || dailyTimings[0];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 border-green-500 text-green-800';
      case 'upcoming': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'completed': return 'bg-gray-100 border-gray-400 text-gray-600';
      default: return 'bg-gray-100 border-gray-400 text-gray-600';
    }
  };

  const getCrowdColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const nextPuja = getNextPuja();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Clock size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'दर्शन समय' : 'Darshan Timings'}
            </h1>
            <Clock size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            Current Time: {getCurrentTime()}
          </p>
        </div>

        {/* Next Puja Alert */}
        <div className="bg-gradient-to-r from-yellow-100 to-red-100 border-l-4 border-yellow-500 p-6 mb-8 rounded-lg shadow-lg">
          <div className="flex items-center">
            <AlertCircle className="text-yellow-600 mr-3" size={24} />
            <div>
              <h3 className="text-lg font-bold text-red-900">
                {language.code === 'hi' ? 'अगली पूजा' : 'Next Puja'}
              </h3>
              <p className="text-red-800">
                {language.code === 'hi' ? nextPuja.nameHi : nextPuja.name} - {nextPuja.time}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-8 bg-white rounded-lg shadow-lg p-1">
          <button
            onClick={() => setSelectedTab('daily')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              selectedTab === 'daily'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>{language.code === 'hi' ? 'दैनिक' : 'Daily'}</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('special')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              selectedTab === 'special'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Bell size={20} />
              <span>{language.code === 'hi' ? 'विशेष' : 'Special'}</span>
            </div>
          </button>
        </div>

        {/* Timings List */}
        <div className="space-y-4">
          {(selectedTab === 'daily' ? dailyTimings : specialTimings).map((slot, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                slot.status === 'ongoing' ? 'border-green-500' : 
                slot.status === 'upcoming' ? 'border-yellow-500' : 'border-gray-400'
              } transition-all hover:shadow-xl`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    slot.type === 'morning' ? 'bg-yellow-100' :
                    slot.type === 'evening' ? 'bg-red-100' : 'bg-purple-100'
                  }`}>
                    {slot.type === 'morning' ? (
                      <Sun size={24} className="text-yellow-600" />
                    ) : slot.type === 'evening' ? (
                      <Moon size={24} className="text-red-600" />
                    ) : (
                      <Bell size={24} className="text-purple-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900">
                      {language.code === 'hi' ? slot.nameHi : slot.name}
                    </h3>
                    <p className="text-red-700 text-lg">{slot.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border-2 ${getStatusColor(slot.status)}`}>
                    {slot.status === 'ongoing' ? (language.code === 'hi' ? 'चल रही' : 'Ongoing') :
                     slot.status === 'upcoming' ? (language.code === 'hi' ? 'आगामी' : 'Upcoming') :
                     (language.code === 'hi' ? 'समाप्त' : 'Completed')}
                  </span>
                  <p className={`text-sm mt-2 font-medium ${getCrowdColor(slot.crowdLevel)}`}>
                    {language.code === 'hi' ? 'भीड़: ' : 'Crowd: '}
                    {slot.crowdLevel === 'high' ? (language.code === 'hi' ? 'अधिक' : 'High') :
                     slot.crowdLevel === 'medium' ? (language.code === 'hi' ? 'मध्यम' : 'Medium') :
                     (language.code === 'hi' ? 'कम' : 'Low')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">
            {language.code === 'hi' ? 'महत्वपूर्ण जानकारी' : 'Important Information'}
          </h3>
          <ul className="text-red-800 space-y-2">
            <li>• {language.code === 'hi' ? 'दर्शन के लिए कोई प्रवेश शुल्क नहीं है' : 'No entry fee for darshan'}</li>
            <li>• {language.code === 'hi' ? 'फोटोग्राफी अनुमतिशुदा क्षेत्रों में ही' : 'Photography only in permitted areas'}</li>
            <li>• {language.code === 'hi' ? 'कृपया मंदिर की शुद्धता बनाए रखें' : 'Please maintain temple sanctity'}</li>
            <li>• {language.code === 'hi' ? 'विशेष अवसरों पर समय में परिवर्तन हो सकता है' : 'Timings may change on special occasions'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DarshanTimings;