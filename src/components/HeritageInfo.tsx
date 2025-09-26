import React, { useState } from 'react';
import { BookOpen, Calendar, Camera, Clock, MapPin, Star } from 'lucide-react';
import type { Language } from '../App';

interface HeritageInfoProps {
  language: Language;
}

interface Festival {
  name: string;
  nameHi: string;
  date: string;
  description: string;
  descriptionHi: string;
  significance: string;
  significanceHi: string;
}

const festivals: Festival[] = [
  {
    name: 'Maha Shivaratri',
    nameHi: 'महाशिवरात्रि',
    date: '2024-03-08',
    description: 'The great night of Lord Shiva',
    descriptionHi: 'भगवान शिव की महान रात्रि',
    significance: 'Night-long prayers and fasting',
    significanceHi: 'रात्रि भर प्रार्थना और उपवास'
  },
  {
    name: 'Diwali',
    nameHi: 'दीपावली',
    date: '2024-11-01',
    description: 'Festival of lights',
    descriptionHi: 'प्रकाश का त्योहार',
    significance: 'Victory of light over darkness',
    significanceHi: 'अंधकार पर प्रकाश की विजय'
  },
  {
    name: 'Navratri',
    nameHi: 'नवरात्रि',
    date: '2024-10-03',
    description: 'Nine nights of divine mother',
    descriptionHi: 'दिव्य माता की नौ रातें',
    significance: 'Worship of goddess Durga',
    significanceHi: 'देवी दुर्गा की आराधना'
  }
];

const HeritageInfo: React.FC<HeritageInfoProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'history' | 'architecture' | 'festivals' | 'gallery'>('history');

  const getFestivalName = (festival: Festival) => {
    return language.code === 'hi' ? festival.nameHi : festival.name;
  };

  const getFestivalDescription = (festival: Festival) => {
    return language.code === 'hi' ? festival.descriptionHi : festival.description;
  };

  const getFestivalSignificance = (festival: Festival) => {
    return language.code === 'hi' ? festival.significanceHi : festival.significance;
  };

  const upcomingFestivals = festivals.filter(festival => new Date(festival.date) > new Date()).slice(0, 3);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'विरासत और संस्कृति' : 'Heritage & Culture'}
            </h1>
            <BookOpen size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 'मंदिर का इतिहास और सांस्कृतिक विरासत' : 'Temple history and cultural heritage'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-lg p-1">
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <BookOpen size={20} />
              <span>{language.code === 'hi' ? 'इतिहास' : 'History'}</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'architecture'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <MapPin size={20} />
              <span>{language.code === 'hi' ? 'वास्तुकला' : 'Architecture'}</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('festivals')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'festivals'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Calendar size={20} />
              <span>{language.code === 'hi' ? 'त्योहार' : 'Festivals'}</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Camera size={20} />
              <span>{language.code === 'hi' ? 'गैलरी' : 'Gallery'}</span>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* History Tab */}
          {activeTab === 'history' && (
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'मंदिर का इतिहास' : 'Temple History'}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">
                      {language.code === 'hi' ? 'स्थापना' : 'Foundation'}
                    </h3>
                    <p className="text-yellow-700 leading-relaxed">
                      {language.code === 'hi' 
                        ? 'यह पवित्र मंदिर 12वीं शताब्दी में स्थापित किया गया था। महान राजा देवराज द्वारा निर्मित, यह मंदिर सदियों से भक्तों की आस्था का केंद्र रहा है।'
                        : 'This sacred temple was established in the 12th century. Built by the great King Devraj, this temple has been a center of devotion for centuries.'
                      }
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3">
                      {language.code === 'hi' ? 'महत्व' : 'Significance'}
                    </h3>
                    <p className="text-red-700 leading-relaxed">
                      {language.code === 'hi'
                        ? 'मंदिर अपनी चमत्कारिक शक्तियों के लिए प्रसिद्ध है। यहाँ के मुख्य देवता भगवान शिव हैं, जो भक्तों की मनोकामनाएं पूर्ण करते हैं।'
                        : 'The temple is renowned for its miraculous powers. The main deity is Lord Shiva, who fulfills the wishes of devotees.'
                      }
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3">
                      {language.code === 'hi' ? 'नवीनीकरण' : 'Renovation'}
                    </h3>
                    <p className="text-green-700 leading-relaxed">
                      {language.code === 'hi'
                        ? 'मंदिर का अंतिम बड़ा नवीनीकरण 2010 में किया गया था। आधुनिक सुविधाओं के साथ पारंपरिक वास्तुकला को संरक्षित किया गया है।'
                        : 'The temple underwent its last major renovation in 2010. Traditional architecture has been preserved with modern amenities.'
                      }
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-red-100 rounded-lg p-6 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <BookOpen size={40} className="text-white" />
                      </div>
                      <p className="text-red-800 font-medium">
                        {language.code === 'hi' ? 'ऐतिहासिक चित्र' : 'Historical Image'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-4">
                      {language.code === 'hi' ? 'मुख्य तथ्य' : 'Key Facts'}
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <Clock size={16} className="text-red-600" />
                        <span>{language.code === 'hi' ? 'स्थापना: 12वीं शताब्दी' : 'Founded: 12th Century'}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <MapPin size={16} className="text-red-600" />
                        <span>{language.code === 'hi' ? 'शैली: द्रविड़ वास्तुकला' : 'Style: Dravidian Architecture'}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star size={16} className="text-red-600" />
                        <span>{language.code === 'hi' ? 'मुख्य देवता: भगवान शिव' : 'Main Deity: Lord Shiva'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'वास्तुकला विशेषताएं' : 'Architectural Features'}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-yellow-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-yellow-800 mb-2">
                    {language.code === 'hi' ? 'गर्भगृह' : 'Sanctum'}
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    {language.code === 'hi' 
                      ? 'मुख्य देवता का पवित्र कक्ष'
                      : 'Sacred chamber of the main deity'
                    }
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-red-800 mb-2">
                    {language.code === 'hi' ? 'शिखर' : 'Shikhara'}
                  </h3>
                  <p className="text-red-700 text-sm">
                    {language.code === 'hi'
                      ? 'पारंपरिक मंदिर शिखर'
                      : 'Traditional temple spire'
                    }
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Camera size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-green-800 mb-2">
                    {language.code === 'hi' ? 'मंडप' : 'Mandapa'}
                  </h3>
                  <p className="text-green-700 text-sm">
                    {language.code === 'hi'
                      ? 'भक्तों के लिए सभा कक्ष'
                      : 'Assembly hall for devotees'
                    }
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'स्थापत्य विवरण' : 'Architectural Details'}
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-red-900">
                        {language.code === 'hi' ? 'स्तंभ कार्यकला' : 'Pillar Craftsmanship'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language.code === 'hi'
                          ? 'हाथ से नक्काशी किए गए जटिल स्तंभ'
                          : 'Intricately hand-carved pillars'
                        }
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-medium text-yellow-900">
                        {language.code === 'hi' ? 'दीवार चित्रकारी' : 'Wall Paintings'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language.code === 'hi'
                          ? 'पौराणिक कथाओं के चित्र'
                          : 'Mythological story paintings'
                        }
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-900">
                        {language.code === 'hi' ? 'पत्थर की नक्काशी' : 'Stone Carvings'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {language.code === 'hi'
                          ? 'देवी-देवताओं की मूर्तियां'
                          : 'Sculptures of deities'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'विशेष विशेषताएं' : 'Special Features'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">
                        {language.code === 'hi'
                          ? 'गुंबद में प्राकृतिक प्रकाश व्यवस्था'
                          : 'Natural lighting system in dome'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">
                        {language.code === 'hi'
                          ? 'वर्षा जल संग्रहण प्रणाली'
                          : 'Rainwater harvesting system'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">
                        {language.code === 'hi'
                          ? 'भूकंप प्रतिरोधी संरचना'
                          : 'Earthquake resistant structure'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">
                        {language.code === 'hi'
                          ? 'प्राकृतिक वायु संचार'
                          : 'Natural ventilation system'
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Festivals Tab */}
          {activeTab === 'festivals' && (
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'त्योहार और उत्सव' : 'Festivals & Celebrations'}
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {language.code === 'hi' ? 'आगामी त्योहार' : 'Upcoming Festivals'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {upcomingFestivals.map((festival, index) => (
                    <div key={index} className="bg-gradient-to-br from-yellow-50 to-red-50 border-2 border-yellow-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Calendar size={24} className="text-red-600" />
                        <span className="text-sm text-gray-600">
                          {new Date(festival.date).toLocaleDateString(language.code === 'hi' ? 'hi-IN' : 'en-IN')}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-red-900 mb-2">
                        {getFestivalName(festival)}
                      </h4>
                      <p className="text-red-700 text-sm mb-2">
                        {getFestivalDescription(festival)}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {getFestivalSignificance(festival)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'वार्षिक उत्सव' : 'Annual Celebrations'}
                  </h3>
                  <div className="space-y-4">
                    {festivals.map((festival, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-800">
                            {getFestivalName(festival)}
                          </h4>
                          <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded">
                            {new Date(festival.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {getFestivalSignificance(festival)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    {language.code === 'hi' ? 'त्योहार की जानकारी' : 'Festival Information'}
                  </h3>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        {language.code === 'hi'
                          ? 'त्योहारों के दौरान विशेष सजावट'
                          : 'Special decorations during festivals'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        {language.code === 'hi'
                          ? 'निःशुल्क प्रसादम् वितरण'
                          : 'Free prasadam distribution'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        {language.code === 'hi'
                          ? 'सांस्कृतिक कार्यक्रम आयोजन'
                          : 'Cultural program organization'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>
                        {language.code === 'hi'
                          ? 'विशेष पूजा और आरती'
                          : 'Special puja and aarti'
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-100 to-red-100 rounded-lg p-8 h-48 flex items-center justify-center group hover:shadow-xl transition-shadow">
                    <div className="text-center">
                      <Camera size={40} className="text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-red-800 font-medium">
                        {language.code === 'hi' ? 'मंदिर की तस्वीर' : 'Temple Image'}
                      </p>
                      <p className="text-sm text-red-600 mt-1">
                        #{index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  {language.code === 'hi'
                    ? 'मंदिर की सुंदरता को देखने के लिए व्यक्तिगत रूप से आएं'
                    : 'Visit personally to see the temple\'s beauty'
                  }
                </p>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 inline-block">
                  <p className="text-yellow-800 font-medium">
                    {language.code === 'hi'
                      ? 'फोटोग्राफी केवल अनुमतिशुदा क्षेत्रों में'
                      : 'Photography only in permitted areas'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeritageInfo;