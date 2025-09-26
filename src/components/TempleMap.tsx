import React, { useState } from 'react';
import { MapPin, Navigation, Accessibility, ListRestart as Restroom, Phone, Heart, Car } from 'lucide-react';
import type { Language } from '../App';

interface TempleMapProps {
  language: Language;
}

interface MapLocation {
  id: string;
  name: string;
  nameHi: string;
  x: number;
  y: number;
  type: 'main' | 'shrine' | 'facility' | 'entrance';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  descriptionHi: string;
}

const mapLocations: MapLocation[] = [
  {
    id: 'main-entrance',
    name: 'Main Entrance',
    nameHi: 'मुख्य प्रवेश द्वार',
    x: 20,
    y: 80,
    type: 'entrance',
    icon: Navigation,
    description: 'Main entrance with security check',
    descriptionHi: 'सुरक्षा जांच के साथ मुख्य प्रवेश'
  },
  {
    id: 'main-temple',
    name: 'Main Temple',
    nameHi: 'मुख्य मंदिर',
    x: 50,
    y: 40,
    type: 'main',
    icon: Heart,
    description: 'Main deity sanctum',
    descriptionHi: 'मुख्य देवता गर्भगृह'
  },
  {
    id: 'hanuman-shrine',
    name: 'Hanuman Shrine',
    nameHi: 'हनुमान मंदिर',
    x: 25,
    y: 50,
    type: 'shrine',
    icon: Heart,
    description: 'Lord Hanuman shrine',
    descriptionHi: 'हनुमान जी का मंदिर'
  },
  {
    id: 'ganesha-shrine',
    name: 'Ganesha Shrine',
    nameHi: 'गणेश मंदिर',
    x: 75,
    y: 50,
    type: 'shrine',
    icon: Heart,
    description: 'Lord Ganesha shrine',
    descriptionHi: 'गणेश जी का मंदिर'
  },
  {
    id: 'restroom',
    name: 'Restrooms',
    nameHi: 'शौचालय',
    x: 15,
    y: 20,
    type: 'facility',
    icon: Restroom,
    description: 'Clean restroom facilities',
    descriptionHi: 'स्वच्छ शौचालय सुविधा'
  },
  {
    id: 'parking',
    name: 'Parking Area',
    nameHi: 'पार्किंग क्षेत्र',
    x: 80,
    y: 80,
    type: 'facility',
    icon: Car,
    description: 'Vehicle parking area',
    descriptionHi: 'वाहन पार्किंग क्षेत्र'
  },
  {
    id: 'help-desk',
    name: 'Help Desk',
    nameHi: 'सहायता केंद्र',
    x: 30,
    y: 75,
    type: 'facility',
    icon: Phone,
    description: 'Information and assistance',
    descriptionHi: 'जानकारी और सहायता'
  }
];

const TempleMap: React.FC<TempleMapProps> = ({ language }) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [showFilters, setShowFilters] = useState({
    main: true,
    shrine: true,
    facility: true,
    entrance: true
  });

  const filteredLocations = mapLocations.filter(location => 
    showFilters[location.type as keyof typeof showFilters]
  );

  const getLocationName = (location: MapLocation) => {
    return language.code === 'hi' ? location.nameHi : location.name;
  };

  const getLocationDescription = (location: MapLocation) => {
    return language.code === 'hi' ? location.descriptionHi : location.description;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'main': return 'bg-red-600';
      case 'shrine': return 'bg-yellow-600';
      case 'facility': return 'bg-blue-600';
      case 'entrance': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      main: language.code === 'hi' ? 'मुख्य' : 'Main',
      shrine: language.code === 'hi' ? 'मंदिर' : 'Shrines',
      facility: language.code === 'hi' ? 'सुविधाएं' : 'Facilities',
      entrance: language.code === 'hi' ? 'प्रवेश' : 'Entrance'
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'मंदिर मानचित्र' : 'Temple Map'}
            </h1>
            <MapPin size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 'मंदिर परिसर का नक्शा' : 'Navigate the temple complex'}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-3">
            <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-2xl min-h-[500px]">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-300 rounded-lg transform rotate-45"></div>
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-300 rounded-lg transform -rotate-45"></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-blue-300 rounded-full"></div>
              </div>

              {/* Location Markers */}
              {filteredLocations.map((location) => {
                const IconComponent = location.icon;
                return (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  >
                    <div className={`${getTypeColor(location.type)} rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform border-4 border-white`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {getLocationName(location)}
                    </div>
                  </button>
                );
              })}

              {/* You Are Here Marker */}
              <div 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: '20%', top: '80%' }}
              >
                <div className="bg-red-500 rounded-full p-2 shadow-lg border-4 border-white animate-pulse">
                  <Navigation size={20} className="text-white" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                  {language.code === 'hi' ? 'आप यहाँ हैं' : 'You are here'}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {language.code === 'hi' ? 'फिल्टर' : 'Filters'}
              </h3>
              <div className="space-y-3">
                {Object.entries(showFilters).map(([type, checked]) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setShowFilters({...showFilters, [type]: e.target.checked})}
                      className="w-5 h-5 text-red-600"
                    />
                    <div className={`w-4 h-4 rounded-full ${getTypeColor(type)}`}></div>
                    <span className="text-gray-700">{getTypeLabel(type)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Accessibility Info */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Accessibility size={24} className="text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-blue-800">
                  {language.code === 'hi' ? 'सुगम्यता' : 'Accessibility'}
                </h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• {language.code === 'hi' ? 'व्हीलचेयर सुगम रैंप' : 'Wheelchair accessible ramps'}</li>
                <li>• {language.code === 'hi' ? 'गाइड कुत्तों की अनुमति' : 'Guide dogs permitted'}</li>
                <li>• {language.code === 'hi' ? 'वरिष्ठ नागरिकों के लिए सीटें' : 'Senior citizen seating'}</li>
                <li>• {language.code === 'hi' ? 'सहायक कर्मचारी उपलब्ध' : 'Assistance staff available'}</li>
              </ul>
            </div>

            {/* Location Details */}
            {selectedLocation && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
                <h3 className="text-lg font-bold text-red-900 mb-2">
                  {getLocationName(selectedLocation)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getLocationDescription(selectedLocation)}
                </p>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getTypeColor(selectedLocation.type)}`}></div>
                  <span className="text-sm text-gray-500">
                    {getTypeLabel(selectedLocation.type)}
                  </span>
                </div>
              </div>
            )}

            {/* Emergency Contacts */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">
                {language.code === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contacts'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-red-600" />
                  <span className="text-red-700">
                    {language.code === 'hi' ? 'सुरक्षा:' : 'Security:'} +91-9876543210
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-red-600" />
                  <span className="text-red-700">
                    {language.code === 'hi' ? 'प्राथमिक चिकित्सा:' : 'First Aid:'} +91-9876543211
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleMap;