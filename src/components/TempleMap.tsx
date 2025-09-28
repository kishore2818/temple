// // // import React, { useState } from 'react';
// // // import { MapPin, Navigation, Accessibility, ListRestart as Restroom, Phone, Heart, Car } from 'lucide-react';
// // // import type { Language } from '../App';

// // // interface TempleMapProps {
// // //   language: Language;
// // // }

// // // interface MapLocation {
// // //   id: string;
// // //   name: string;
// // //   nameHi: string;
// // //   x: number;
// // //   y: number;
// // //   type: 'main' | 'shrine' | 'facility' | 'entrance';
// // //   icon: React.ComponentType<{ size?: number; className?: string }>;
// // //   description: string;
// // //   descriptionHi: string;
// // // }

// // // const mapLocations: MapLocation[] = [
// // //   {
// // //     id: 'main-entrance',
// // //     name: 'Main Entrance',
// // //     nameHi: 'मुख्य प्रवेश द्वार',
// // //     x: 20,
// // //     y: 80,
// // //     type: 'entrance',
// // //     icon: Navigation,
// // //     description: 'Main entrance with security check',
// // //     descriptionHi: 'सुरक्षा जांच के साथ मुख्य प्रवेश'
// // //   },
// // //   {
// // //     id: 'main-temple',
// // //     name: 'Main Temple',
// // //     nameHi: 'मुख्य मंदिर',
// // //     x: 50,
// // //     y: 40,
// // //     type: 'main',
// // //     icon: Heart,
// // //     description: 'Main deity sanctum',
// // //     descriptionHi: 'मुख्य देवता गर्भगृह'
// // //   },
// // //   {
// // //     id: 'hanuman-shrine',
// // //     name: 'Hanuman Shrine',
// // //     nameHi: 'हनुमान मंदिर',
// // //     x: 25,
// // //     y: 50,
// // //     type: 'shrine',
// // //     icon: Heart,
// // //     description: 'Lord Hanuman shrine',
// // //     descriptionHi: 'हनुमान जी का मंदिर'
// // //   },
// // //   {
// // //     id: 'ganesha-shrine',
// // //     name: 'Ganesha Shrine',
// // //     nameHi: 'गणेश मंदिर',
// // //     x: 75,
// // //     y: 50,
// // //     type: 'shrine',
// // //     icon: Heart,
// // //     description: 'Lord Ganesha shrine',
// // //     descriptionHi: 'गणेश जी का मंदिर'
// // //   },
// // //   {
// // //     id: 'restroom',
// // //     name: 'Restrooms',
// // //     nameHi: 'शौचालय',
// // //     x: 15,
// // //     y: 20,
// // //     type: 'facility',
// // //     icon: Restroom,
// // //     description: 'Clean restroom facilities',
// // //     descriptionHi: 'स्वच्छ शौचालय सुविधा'
// // //   },
// // //   {
// // //     id: 'parking',
// // //     name: 'Parking Area',
// // //     nameHi: 'पार्किंग क्षेत्र',
// // //     x: 80,
// // //     y: 80,
// // //     type: 'facility',
// // //     icon: Car,
// // //     description: 'Vehicle parking area',
// // //     descriptionHi: 'वाहन पार्किंग क्षेत्र'
// // //   },
// // //   {
// // //     id: 'help-desk',
// // //     name: 'Help Desk',
// // //     nameHi: 'सहायता केंद्र',
// // //     x: 30,
// // //     y: 75,
// // //     type: 'facility',
// // //     icon: Phone,
// // //     description: 'Information and assistance',
// // //     descriptionHi: 'जानकारी और सहायता'
// // //   }
// // // ];

// // // const TempleMap: React.FC<TempleMapProps> = ({ language }) => {
// // //   const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
// // //   const [showFilters, setShowFilters] = useState({
// // //     main: true,
// // //     shrine: true,
// // //     facility: true,
// // //     entrance: true
// // //   });

// // //   const filteredLocations = mapLocations.filter(location => 
// // //     showFilters[location.type as keyof typeof showFilters]
// // //   );

// // //   const getLocationName = (location: MapLocation) => {
// // //     return language.code === 'hi' ? location.nameHi : location.name;
// // //   };

// // //   const getLocationDescription = (location: MapLocation) => {
// // //     return language.code === 'hi' ? location.descriptionHi : location.description;
// // //   };

// // //   const getTypeColor = (type: string) => {
// // //     switch (type) {
// // //       case 'main': return 'bg-red-600';
// // //       case 'shrine': return 'bg-yellow-600';
// // //       case 'facility': return 'bg-blue-600';
// // //       case 'entrance': return 'bg-green-600';
// // //       default: return 'bg-gray-600';
// // //     }
// // //   };

// // //   const getTypeLabel = (type: string) => {
// // //     const labels = {
// // //       main: language.code === 'hi' ? 'मुख्य' : 'Main',
// // //       shrine: language.code === 'hi' ? 'मंदिर' : 'Shrines',
// // //       facility: language.code === 'hi' ? 'सुविधाएं' : 'Facilities',
// // //       entrance: language.code === 'hi' ? 'प्रवेश' : 'Entrance'
// // //     };
// // //     return labels[type as keyof typeof labels] || type;
// // //   };

// // //   return (
// // //     <div className="min-h-screen p-8">
// // //       <div className="max-w-6xl mx-auto">
// // //         {/* Header */}
// // //         <div className="text-center mb-8">
// // //           <div className="flex items-center justify-center mb-4">
// // //             <MapPin size={40} className="text-red-800 mr-3" />
// // //             <h1 className="text-4xl font-bold text-red-900">
// // //               {language.code === 'hi' ? 'मंदिर मानचित्र' : 'Temple Map'}
// // //             </h1>
// // //             <MapPin size={40} className="text-red-800 ml-3" />
// // //           </div>
// // //           <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
// // //           <p className="text-xl text-red-700">
// // //             {language.code === 'hi' ? 'मंदिर परिसर का नक्शा' : 'Navigate the temple complex'}
// // //           </p>
// // //         </div>

// // //         <div className="grid lg:grid-cols-4 gap-8">
// // //           {/* Map Area */}
// // //           <div className="lg:col-span-3">
// // //             <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-2xl min-h-[500px]">
// // //               {/* Map Background */}
// // //               <div className="absolute inset-0 opacity-20">
// // //                 <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-300 rounded-lg transform rotate-45"></div>
// // //                 <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-300 rounded-lg transform -rotate-45"></div>
// // //                 <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-blue-300 rounded-full"></div>
// // //               </div>

// // //               {/* Location Markers */}
// // //               {filteredLocations.map((location) => {
// // //                 const IconComponent = location.icon;
// // //                 return (
// // //                   <button
// // //                     key={location.id}
// // //                     onClick={() => setSelectedLocation(location)}
// // //                     className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
// // //                     style={{ left: `${location.x}%`, top: `${location.y}%` }}
// // //                   >
// // //                     <div className={`${getTypeColor(location.type)} rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform border-4 border-white`}>
// // //                       <IconComponent size={24} className="text-white" />
// // //                     </div>
// // //                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
// // //                       {getLocationName(location)}
// // //                     </div>
// // //                   </button>
// // //                 );
// // //               })}

// // //               {/* You Are Here Marker */}
// // //               <div 
// // //                 className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
// // //                 style={{ left: '20%', top: '80%' }}
// // //               >
// // //                 <div className="bg-red-500 rounded-full p-2 shadow-lg border-4 border-white animate-pulse">
// // //                   <Navigation size={20} className="text-white" />
// // //                 </div>
// // //                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
// // //                   {language.code === 'hi' ? 'आप यहाँ हैं' : 'You are here'}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Sidebar */}
// // //           <div className="space-y-6">
// // //             {/* Filters */}
// // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // //               <h3 className="text-lg font-bold text-gray-800 mb-4">
// // //                 {language.code === 'hi' ? 'फिल्टर' : 'Filters'}
// // //               </h3>
// // //               <div className="space-y-3">
// // //                 {Object.entries(showFilters).map(([type, checked]) => (
// // //                   <label key={type} className="flex items-center space-x-3 cursor-pointer">
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={checked}
// // //                       onChange={(e) => setShowFilters({...showFilters, [type]: e.target.checked})}
// // //                       className="w-5 h-5 text-red-600"
// // //                     />
// // //                     <div className={`w-4 h-4 rounded-full ${getTypeColor(type)}`}></div>
// // //                     <span className="text-gray-700">{getTypeLabel(type)}</span>
// // //                   </label>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Accessibility Info */}
// // //             <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
// // //               <div className="flex items-center mb-3">
// // //                 <Accessibility size={24} className="text-blue-600 mr-2" />
// // //                 <h3 className="text-lg font-bold text-blue-800">
// // //                   {language.code === 'hi' ? 'सुगम्यता' : 'Accessibility'}
// // //                 </h3>
// // //               </div>
// // //               <ul className="text-sm text-blue-700 space-y-2">
// // //                 <li>• {language.code === 'hi' ? 'व्हीलचेयर सुगम रैंप' : 'Wheelchair accessible ramps'}</li>
// // //                 <li>• {language.code === 'hi' ? 'गाइड कुत्तों की अनुमति' : 'Guide dogs permitted'}</li>
// // //                 <li>• {language.code === 'hi' ? 'वरिष्ठ नागरिकों के लिए सीटें' : 'Senior citizen seating'}</li>
// // //                 <li>• {language.code === 'hi' ? 'सहायक कर्मचारी उपलब्ध' : 'Assistance staff available'}</li>
// // //               </ul>
// // //             </div>

// // //             {/* Location Details */}
// // //             {selectedLocation && (
// // //               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
// // //                 <h3 className="text-lg font-bold text-red-900 mb-2">
// // //                   {getLocationName(selectedLocation)}
// // //                 </h3>
// // //                 <p className="text-gray-600 mb-4">
// // //                   {getLocationDescription(selectedLocation)}
// // //                 </p>
// // //                 <div className="flex items-center space-x-2">
// // //                   <div className={`w-3 h-3 rounded-full ${getTypeColor(selectedLocation.type)}`}></div>
// // //                   <span className="text-sm text-gray-500">
// // //                     {getTypeLabel(selectedLocation.type)}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Emergency Contacts */}
// // //             <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
// // //               <h3 className="text-lg font-bold text-red-800 mb-3">
// // //                 {language.code === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contacts'}
// // //               </h3>
// // //               <div className="space-y-2 text-sm">
// // //                 <div className="flex items-center space-x-2">
// // //                   <Phone size={16} className="text-red-600" />
// // //                   <span className="text-red-700">
// // //                     {language.code === 'hi' ? 'सुरक्षा:' : 'Security:'} +91-9876543210
// // //                   </span>
// // //                 </div>
// // //                 <div className="flex items-center space-x-2">
// // //                   <Phone size={16} className="text-red-600" />
// // //                   <span className="text-red-700">
// // //                     {language.code === 'hi' ? 'प्राथमिक चिकित्सा:' : 'First Aid:'} +91-9876543211
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TempleMap;








// // import React, { useState } from 'react';
// // import { MapPin, Navigation, Accessibility, ListRestart as Restroom, Phone, Heart, Car } from 'lucide-react';
// // import type { Language } from '../App';

// // // Import your map image
// // import mapImage from '../photos/USER (15).png';

// // interface TempleMapProps {
// //   language: Language;
// // }

// // interface MapLocation {
// //   id: string;
// //   name: string;
// //   nameHi: string;
// //   x: number;
// //   y: number;
// //   type: 'main' | 'shrine' | 'facility' | 'entrance';
// //   icon: React.ComponentType<{ size?: number; className?: string }>;
// //   description: string;
// //   descriptionHi: string;
// // }

// // const mapLocations: MapLocation[] = [
// //   {
// //     id: 'main-entrance',
// //     name: 'Main Entrance',
// //     nameHi: 'मुख्य प्रवेश द्वार',
// //     x: 20,
// //     y: 80,
// //     type: 'entrance',
// //     icon: Navigation,
// //     description: 'Main entrance with security check',
// //     descriptionHi: 'सुरक्षा जांच के साथ मुख्य प्रवेश'
// //   },
// //   {
// //     id: 'main-temple',
// //     name: 'Main Temple',
// //     nameHi: 'मुख्य मंदिर',
// //     x: 52,
// //     y: 35,
// //     type: 'main',
// //     icon: Heart,
// //     description: 'Main deity sanctum',
// //     descriptionHi: 'मुख्य देवता गर्भगृह'
// //   },
// //   {
// //     id: 'hanuman-shrine',
// //     name: 'Hanuman Shrine',
// //     nameHi: 'हनुमान मंदिर',
// //     x: 25,
// //     y: 50,
// //     type: 'shrine',
// //     icon: Heart,
// //     description: 'Lord Hanuman shrine',
// //     descriptionHi: 'हनुमान जी का मंदिर'
// //   },
// //   {
// //     id: 'ganesha-shrine',
// //     name: 'Ganesha Shrine',
// //     nameHi: 'गणेश मंदिर',
// //     x: 75,
// //     y: 50,
// //     type: 'shrine',
// //     icon: Heart,
// //     description: 'Lord Ganesha shrine',
// //     descriptionHi: 'गणेश जी का मंदिर'
// //   },
// //   {
// //     id: 'restroom',
// //     name: 'Restrooms',
// //     nameHi: 'शौचालय',
// //     x: 15,
// //     y: 20,
// //     type: 'facility',
// //     icon: Restroom,
// //     description: 'Clean restroom facilities',
// //     descriptionHi: 'स्वच्छ शौचालय सुविधा'
// //   },
// //   {
// //     id: 'parking',
// //     name: 'Parking Area',
// //     nameHi: 'पार्किंग क्षेत्र',
// //     x: 80,
// //     y: 80,
// //     type: 'facility',
// //     icon: Car,
// //     description: 'Vehicle parking area',
// //     descriptionHi: 'वाहन पार्किंग क्षेत्र'
// //   },
// //   {
// //     id: 'help-desk',
// //     name: 'Help Desk',
// //     nameHi: 'सहायता केंद्र',
// //     x: 30,
// //     y: 75,
// //     type: 'facility',
// //     icon: Phone,
// //     description: 'Information and assistance',
// //     descriptionHi: 'जानकारी और सहायता'
// //   }
// // ];

// // const TempleMap: React.FC<TempleMapProps> = ({ language }) => {
// //   const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
// //   const [showFilters, setShowFilters] = useState({
// //     main: true,
// //     shrine: true,
// //     facility: true,
// //     entrance: true
// //   });

// //   const filteredLocations = mapLocations.filter(location => 
// //     showFilters[location.type as keyof typeof showFilters]
// //   );

// //   const getLocationName = (location: MapLocation) => {
// //     return language.code === 'hi' ? location.nameHi : location.name;
// //   };

// //   const getLocationDescription = (location: MapLocation) => {
// //     return language.code === 'hi' ? location.descriptionHi : location.description;
// //   };

// //   const getTypeColor = (type: string) => {
// //     switch (type) {
// //       case 'main': return 'bg-red-600';
// //       case 'shrine': return 'bg-yellow-600';
// //       case 'facility': return 'bg-blue-600';
// //       case 'entrance': return 'bg-green-600';
// //       default: return 'bg-gray-600';
// //     }
// //   };

// //   const getTypeLabel = (type: string) => {
// //     const labels = {
// //       main: language.code === 'hi' ? 'मुख्य' : 'Main',
// //       shrine: language.code === 'hi' ? 'मंदिर' : 'Shrines',
// //       facility: language.code === 'hi' ? 'सुविधाएं' : 'Facilities',
// //       entrance: language.code === 'hi' ? 'प्रवेश' : 'Entrance'
// //     };
// //     return labels[type as keyof typeof labels] || type;
// //   };

// //   return (
// //     <div className="min-h-screen p-8">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-8">
// //           <div className="flex items-center justify-center mb-4">
// //             <MapPin size={40} className="text-red-800 mr-3" />
// //             <h1 className="text-4xl font-bold text-red-900">
// //               {language.code === 'hi' ? 'मंदिर मानचित्र' : 'Temple Map'}
// //             </h1>
// //             <MapPin size={40} className="text-red-800 ml-3" />
// //           </div>
// //           <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
// //           <p className="text-xl text-red-700">
// //             {language.code === 'hi' ? 'मंदिर परिसर का नक्शा' : 'Navigate the temple complex'}
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-4 gap-8">
// //           {/* Map Area */}
// //           <div className="lg:col-span-3">
// //             <div className="relative bg-gray-100 rounded-2xl p-4 shadow-2xl min-h-[500px] overflow-hidden">
// //               {/* Map Image Background */}
// //               <div className="absolute inset-0">
// //                 <img 
// //                   src={mapImage} 
// //                   alt={language.code === 'hi' ? 'मंदिर मानचित्र' : 'Temple Map'}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black bg-opacity-10"></div>
// //               </div>

// //               {/* Location Markers */}
// //               {filteredLocations.map((location) => {
// //                 const IconComponent = location.icon;
// //                 return (
// //                   <button
// //                     key={location.id}
// //                     onClick={() => setSelectedLocation(location)}
// //                     className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
// //                     style={{ left: `${location.x}%`, top: `${location.y}%` }}
// //                   >
// //                     <div className={`${getTypeColor(location.type)} rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform border-4 border-white`}>
// //                       <IconComponent size={24} className="text-white" />
// //                     </div>
// //                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
// //                       {getLocationName(location)}
// //                     </div>
// //                   </button>
// //                 );
// //               })}

// //               {/* You Are Here Marker */}
// //               <div 
// //                 className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
// //                 style={{ left: '20%', top: '80%' }}
// //               >
// //                 <div className="bg-red-500 rounded-full p-2 shadow-lg border-4 border-white animate-pulse">
// //                   <Navigation size={20} className="text-white" />
// //                 </div>
// //                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold z-20">
// //                   {language.code === 'hi' ? 'आप यहाँ हैं' : 'You are here'}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Sidebar */}
// //           <div className="space-y-6">
// //             {/* Filters */}
// //             <div className="bg-white rounded-xl shadow-lg p-6">
// //               <h3 className="text-lg font-bold text-gray-800 mb-4">
// //                 {language.code === 'hi' ? 'फिल्टर' : 'Filters'}
// //               </h3>
// //               <div className="space-y-3">
// //                 {Object.entries(showFilters).map(([type, checked]) => (
// //                   <label key={type} className="flex items-center space-x-3 cursor-pointer">
// //                     <input
// //                       type="checkbox"
// //                       checked={checked}
// //                       onChange={(e) => setShowFilters({...showFilters, [type]: e.target.checked})}
// //                       className="w-5 h-5 text-red-600"
// //                     />
// //                     <div className={`w-4 h-4 rounded-full ${getTypeColor(type)}`}></div>
// //                     <span className="text-gray-700">{getTypeLabel(type)}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Accessibility Info */}
// //             <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
// //               <div className="flex items-center mb-3">
// //                 <Accessibility size={24} className="text-blue-600 mr-2" />
// //                 <h3 className="text-lg font-bold text-blue-800">
// //                   {language.code === 'hi' ? 'सुगम्यता' : 'Accessibility'}
// //                 </h3>
// //               </div>
// //               <ul className="text-sm text-blue-700 space-y-2">
// //                 <li>• {language.code === 'hi' ? 'व्हीलचेयर सुगम रैंप' : 'Wheelchair accessible ramps'}</li>
// //                 <li>• {language.code === 'hi' ? 'गाइड कुत्तों की अनुमति' : 'Guide dogs permitted'}</li>
// //                 <li>• {language.code === 'hi' ? 'वरिष्ठ नागरिकों के लिए सीटें' : 'Senior citizen seating'}</li>
// //                 <li>• {language.code === 'hi' ? 'सहायक कर्मचारी उपलब्ध' : 'Assistance staff available'}</li>
// //               </ul>
// //             </div>

// //             {/* Location Details */}
// //             {selectedLocation && (
// //               <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
// //                 <h3 className="text-lg font-bold text-red-900 mb-2">
// //                   {getLocationName(selectedLocation)}
// //                 </h3>
// //                 <p className="text-gray-600 mb-4">
// //                   {getLocationDescription(selectedLocation)}
// //                 </p>
// //                 <div className="flex items-center space-x-2">
// //                   <div className={`w-3 h-3 rounded-full ${getTypeColor(selectedLocation.type)}`}></div>
// //                   <span className="text-sm text-gray-500">
// //                     {getTypeLabel(selectedLocation.type)}
// //                   </span>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Emergency Contacts */}
// //             <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
// //               <h3 className="text-lg font-bold text-red-800 mb-3">
// //                 {language.code === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contacts'}
// //               </h3>
// //               <div className="space-y-2 text-sm">
// //                 <div className="flex items-center space-x-2">
// //                   <Phone size={16} className="text-red-600" />
// //                   <span className="text-red-700">
// //                     {language.code === 'hi' ? 'सुरक्षा:' : 'Security:'} +91-9876543210
// //                   </span>
// //                 </div>
// //                 <div className="flex items-center space-x-2">
// //                   <Phone size={16} className="text-red-600" />
// //                   <span className="text-red-700">
// //                     {language.code === 'hi' ? 'प्राथमिक चिकित्सा:' : 'First Aid:'} +91-9876543211
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TempleMap;





// import React, { useState, useRef, useEffect } from 'react';
// import { MapPin, Navigation, Accessibility, ListRestart as Restroom, Phone, Heart, Car, Users, Home, Utensils, BookOpen } from 'lucide-react';
// import type { Language } from '../App';

// // Import your map image
// import mapImage from '../photos/USER (15).png';

// interface TempleMapProps {
//   language: Language;
// }

// interface MapLocation {
//   id: string;
//   name: string;
//   nameHi: string;
//   x: number;
//   y: number;
//   type: 'main' | 'shrine' | 'facility' | 'entrance' | 'office' | 'accommodation' | 'museum';
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   description: string;
//   descriptionHi: string;
// }

// const mapLocations: MapLocation[] = [
//   {
//     id: 'coastal-water-tower',
//     name: 'Coastal Water Tower',
//     nameHi: 'तटीय जल टावर',
//     x: 50,
//     y: 15,
//     type: 'main',
//     icon: Home,
//     description: 'Main water tower structure',
//     descriptionHi: 'मुख्य जल टावर संरचना'
//   },
//   {
//     id: 'main-entrance',
//     name: 'Main Entrance',
//     nameHi: 'मुख्य प्रवेश द्वार',
//     x: 20,
//     y: 80,
//     type: 'entrance',
//     icon: Navigation,
//     description: 'Main entrance with security check',
//     descriptionHi: 'सुरक्षा जांच के साथ मुख्य प्रवेश'
//   },
//   {
//     id: 'prabba-fabian-museum',
//     name: 'Prabba Fabian Museum',
//     nameHi: 'प्रब्बा फैबियन संग्रहालय',
//     x: 30,
//     y: 25,
//     type: 'museum',
//     icon: BookOpen,
//     description: 'Cultural and historical museum',
//     descriptionHi: 'सांस्कृतिक और ऐतिहासिक संग्रहालय'
//   },
//   {
//     id: 'somnati-temke',
//     name: 'Somnati Temke Complex',
//     nameHi: 'सोमनाटी टेमके परिसर',
//     x: 40,
//     y: 35,
//     type: 'facility',
//     icon: Users,
//     description: 'Multi-purpose complex',
//     descriptionHi: 'बहुउद्देशीय परिसर'
//   },
//   {
//     id: 'garryyard-swinton',
//     name: 'Garryyard Swinton',
//     nameHi: 'गैरीयार्ड स्विंटन',
//     x: 60,
//     y: 45,
//     type: 'accommodation',
//     icon: Home,
//     description: 'Guest accommodation area',
//     descriptionHi: 'अतिथि आवास क्षेत्र'
//   },
//   {
//     id: 'riffway-marabay',
//     name: 'Riffway Marabay',
//     nameHi: 'रिफवे माराबे',
//     x: 70,
//     y: 55,
//     type: 'facility',
//     icon: Car,
//     description: 'Transportation and parking area',
//     descriptionHi: 'परिवहन और पार्किंग क्षेत्र'
//   },
//   {
//     id: 'thveni-sandir',
//     name: 'Thveni Sandir',
//     nameHi: 'थवेनी सैंडिर',
//     x: 55,
//     y: 65,
//     type: 'shrine',
//     icon: Heart,
//     description: 'Meditation and prayer area',
//     descriptionHi: 'ध्यान और प्रार्थना क्षेत्र'
//   },
//   {
//     id: 'accommodation-office',
//     name: 'Accommodation Office',
//     nameHi: 'आवास कार्यालय',
//     x: 35,
//     y: 75,
//     type: 'office',
//     icon: Users,
//     description: 'Guest accommodation services',
//     descriptionHi: 'अतिथि आवास सेवाएं'
//   },
//   {
//     id: 'trust-office',
//     name: 'Trust Office',
//     nameHi: 'ट्रस्ट कार्यालय',
//     x: 65,
//     y: 25,
//     type: 'office',
//     icon: Users,
//     description: 'Administrative office',
//     descriptionHi: 'प्रशासनिक कार्यालय'
//   },
//   {
//     id: 'grid-office',
//     name: 'Grid Office',
//     nameHi: 'ग्रिड कार्यालय',
//     x: 75,
//     y: 35,
//     type: 'office',
//     icon: Users,
//     description: 'Infrastructure management',
//     descriptionHi: 'अवसंरचना प्रबंधन'
//   },
//   {
//     id: 'restroom',
//     name: 'Restrooms',
//     nameHi: 'शौचालय',
//     x: 15,
//     y: 20,
//     type: 'facility',
//     icon: Restroom,
//     description: 'Clean restroom facilities',
//     descriptionHi: 'स्वच्छ शौचालय सुविधा'
//   },
//   {
//     id: 'parking',
//     name: 'Parking Area',
//     nameHi: 'पार्किंग क्षेत्र',
//     x: 85,
//     y: 70,
//     type: 'facility',
//     icon: Car,
//     description: 'Vehicle parking area',
//     descriptionHi: 'वाहन पार्किंग क्षेत्र'
//   },
//   {
//     id: 'help-desk',
//     name: 'Help Desk',
//     nameHi: 'सहायता केंद्र',
//     x: 25,
//     y: 60,
//     type: 'facility',
//     icon: Phone,
//     description: 'Information and assistance',
//     descriptionHi: 'जानकारी और सहायता'
//   }
// ];

// const TempleMap: React.FC<TempleMapProps> = ({ language }) => {
//   const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
//   const [showFilters, setShowFilters] = useState({
//     main: true,
//     shrine: true,
//     facility: true,
//     entrance: true,
//     office: true,
//     accommodation: true,
//     museum: true
//   });
//   const [scale, setScale] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
//   const mapContainerRef = useRef<HTMLDivElement>(null);

//   const filteredLocations = mapLocations.filter(location => 
//     showFilters[location.type as keyof typeof showFilters]
//   );

//   // Zoom functionality
//   const handleZoomIn = () => {
//     setScale(prev => Math.min(prev + 0.2, 3));
//   };

//   const handleZoomOut = () => {
//     setScale(prev => Math.max(prev - 0.2, 0.5));
//   };

//   const handleResetZoom = () => {
//     setScale(1);
//     setPosition({ x: 0, y: 0 });
//   };

//   // Drag functionality
//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     setPosition({
//       x: e.clientX - startPosition.x,
//       y: e.clientY - startPosition.y
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   // Touch events for mobile
//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (e.touches.length === 1) {
//       setIsDragging(true);
//       setStartPosition({
//         x: e.touches[0].clientX - position.x,
//         y: e.touches[0].clientY - position.y
//       });
//     }
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging || e.touches.length !== 1) return;
//     setPosition({
//       x: e.touches[0].clientX - startPosition.x,
//       y: e.touches[0].clientY - startPosition.y
//     });
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   const getLocationName = (location: MapLocation) => {
//     return language.code === 'hi' ? location.nameHi : location.name;
//   };

//   const getLocationDescription = (location: MapLocation) => {
//     return language.code === 'hi' ? location.descriptionHi : location.description;
//   };

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case 'main': return 'bg-red-600';
//       case 'shrine': return 'bg-purple-600';
//       case 'facility': return 'bg-blue-600';
//       case 'entrance': return 'bg-green-600';
//       case 'office': return 'bg-orange-600';
//       case 'accommodation': return 'bg-teal-600';
//       case 'museum': return 'bg-indigo-600';
//       default: return 'bg-gray-600';
//     }
//   };

//   const getTypeLabel = (type: string) => {
//     const labels = {
//       main: language.code === 'hi' ? 'मुख्य' : 'Main',
//       shrine: language.code === 'hi' ? 'मंदिर' : 'Shrines',
//       facility: language.code === 'hi' ? 'सुविधाएं' : 'Facilities',
//       entrance: language.code === 'hi' ? 'प्रवेश' : 'Entrance',
//       office: language.code === 'hi' ? 'कार्यालय' : 'Offices',
//       accommodation: language.code === 'hi' ? 'आवास' : 'Accommodation',
//       museum: language.code === 'hi' ? 'संग्रहालय' : 'Museum'
//     };
//     return labels[type as keyof typeof labels] || type;
//   };

//   return (
//     <div className="min-h-screen p-4 bg-gradient-to-br from-blue-50 to-green-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className="flex items-center justify-center mb-3">
//             <MapPin size={36} className="text-blue-800 mr-3" />
//             <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
//               {language.code === 'hi' ? 'तटीय जल टावर मानचित्र' : 'Coastal Water Tower Map'}
//             </h1>
//             <MapPin size={36} className="text-blue-800 ml-3" />
//           </div>
//           <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-800 mx-auto mb-3"></div>
//           <p className="text-lg text-blue-700">
//             {language.code === 'hi' ? 'परिसर का विस्तृत नक्शा' : 'Detailed complex map'}
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-4 gap-6">
//           {/* Map Area */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-2xl p-4">
//               {/* Zoom Controls */}
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {language.code === 'hi' ? 'मानचित्र नियंत्रण' : 'Map Controls'}
//                 </h3>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={handleZoomOut}
//                     className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     title={language.code === 'hi' ? 'छोटा करें' : 'Zoom Out'}
//                   >
//                     <span className="text-lg font-bold">-</span>
//                   </button>
//                   <button
//                     onClick={handleResetZoom}
//                     className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
//                     title={language.code === 'hi' ? 'मूल आकार' : 'Reset Zoom'}
//                   >
//                     <span className="text-sm font-bold">100%</span>
//                   </button>
//                   <button
//                     onClick={handleZoomIn}
//                     className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     title={language.code === 'hi' ? 'बड़ा करें' : 'Zoom In'}
//                   >
//                     <span className="text-lg font-bold">+</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Map Container */}
//               <div 
//                 ref={mapContainerRef}
//                 className="relative bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-inner min-h-[500px] max-h-[70vh] cursor-move"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//                 style={{
//                   cursor: isDragging ? 'grabbing' : 'grab'
//                 }}
//               >
//                 {/* Map Image */}
//                 <div 
//                   className="absolute inset-0"
//                   style={{
//                     transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
//                     transition: isDragging ? 'none' : 'transform 0.2s ease',
//                     backgroundImage: `url(${mapImage})`,
//                     backgroundSize: 'contain',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center'
//                   }}
//                 >
//                   <img 
//                     src={mapImage} 
//                     alt={language.code === 'hi' ? 'तटीय जल टावर मानचित्र' : 'Coastal Water Tower Map'}
//                     className="w-full h-full object-contain"
//                     draggable="false"
//                   />
//                 </div>

//                 {/* Location Markers */}
//                 {filteredLocations.map((location) => {
//                   const IconComponent = location.icon;
//                   return (
//                     <button
//                       key={location.id}
//                       onClick={() => setSelectedLocation(location)}
//                       className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
//                       style={{ left: `${location.x}%`, top: `${location.y}%` }}
//                     >
//                       <div className={`
//                         ${getTypeColor(location.type)} 
//                         rounded-full p-2 shadow-2xl 
//                         group-hover:scale-125 transition-all duration-200 
//                         border-4 border-white
//                         hover:animate-pulse
//                       `}>
//                         <IconComponent size={20} className="text-white" />
//                       </div>
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 shadow-lg">
//                         {getLocationName(location)}
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black bg-opacity-90 rotate-45"></div>
//                       </div>
//                     </button>
//                   );
//                 })}

//                 {/* You Are Here Marker */}
//                 <div 
//                   className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
//                   style={{ left: '20%', top: '80%' }}
//                 >
//                   <div className="bg-red-500 rounded-full p-3 shadow-2xl border-4 border-white animate-pulse">
//                     <Navigation size={24} className="text-white" />
//                   </div>
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-bold z-20">
//                     {language.code === 'hi' ? 'आप यहाँ हैं' : 'You are here'}
//                   </div>
//                 </div>
//               </div>

//               {/* Map Instructions */}
//               <div className="mt-3 text-center text-sm text-gray-600">
//                 <p>
//                   {language.code === 'hi' 
//                     ? 'ज़ूम करने के लिए +/- बटन दबाएं। खींचने के लिए मानचित्र को पकड़ें।' 
//                     : 'Use +/- buttons to zoom. Click and drag to pan the map.'
//                   }
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">
//                 {language.code === 'hi' ? 'स्थान फिल्टर' : 'Location Filters'}
//               </h3>
//               <div className="space-y-3 max-h-60 overflow-y-auto">
//                 {Object.entries(showFilters).map(([type, checked]) => (
//                   <label key={type} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
//                     <input
//                       type="checkbox"
//                       checked={checked}
//                       onChange={(e) => setShowFilters({...showFilters, [type]: e.target.checked})}
//                       className="w-4 h-4 text-blue-600 rounded"
//                     />
//                     <div className={`w-3 h-3 rounded-full ${getTypeColor(type)}`}></div>
//                     <span className="text-sm text-gray-700 flex-1">{getTypeLabel(type)}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Selected Location Details */}
//             {selectedLocation && (
//               <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600">
//                 <div className="flex items-center mb-3">
//                   <div className={`p-2 rounded-full mr-3 ${getTypeColor(selectedLocation.type)}`}>
//                     <selectedLocation.icon size={20} className="text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">
//                     {getLocationName(selectedLocation)}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-3">
//                   {getLocationDescription(selectedLocation)}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                     {getTypeLabel(selectedLocation.type)}
//                   </span>
//                   <button 
//                     onClick={() => setSelectedLocation(null)}
//                     className="text-xs text-red-600 hover:text-red-800"
//                   >
//                     {language.code === 'hi' ? 'बंद करें' : 'Close'}
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-br from-blue-500 to-green-600 rounded-xl shadow-lg p-5 text-white">
//               <h3 className="text-lg font-bold mb-3">
//                 {language.code === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
//               </h3>
//               <div className="grid grid-cols-2 gap-2">
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg text-sm transition-all">
//                   {language.code === 'hi' ? 'दिशा निर्देश' : 'Directions'}
//                 </button>
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg text-sm transition-all">
//                   {language.code === 'hi' ? 'सहेजें' : 'Save Map'}
//                 </button>
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg text-sm transition-all">
//                   {language.code === 'hi' ? 'साझा करें' : 'Share'}
//                 </button>
//                 <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg text-sm transition-all">
//                   {language.code === 'hi' ? 'छापें' : 'Print'}
//                 </button>
//               </div>
//             </div>

//             {/* Emergency Contacts */}
//             <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
//               <h3 className="text-lg font-bold text-red-800 mb-3">
//                 {language.code === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contacts'}
//               </h3>
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center space-x-2">
//                   <Phone size={16} className="text-red-600" />
//                   <span className="text-red-700">
//                     {language.code === 'hi' ? 'सुरक्षा:' : 'Security:'} +91-9876543210
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Phone size={16} className="text-red-600" />
//                   <span className="text-red-700">
//                     {language.code === 'hi' ? 'प्राथमिक चिकित्सा:' : 'First Aid:'} +91-9876543211
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Phone size={16} className="text-red-600" />
//                   <span className="text-red-700">
//                     {language.code === 'hi' ? 'प्रशासन:' : 'Administration:'} +91-9876543212
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TempleMap;




import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import type { Language } from '../App';

// Import your map image
import mapImage from '../photos/USER (15).png';

interface TempleMapProps {
  language: Language;
}

interface MapLocation {
  id: string;
  name: string;
  nameHi: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  type: 'main' | 'shrine' | 'facility' | 'entrance' | 'office' | 'accommodation' | 'museum';
  description: string;
  descriptionHi: string;
}

const mapLocations: MapLocation[] = [
  {
    id: 'coastal-water-tower',
    name: 'Main Temple ',
    nameHi: 'तटीय जल टावर',
    x: 50,
    y: 30,
    type: 'main',
    description: 'Main place to vist',
    descriptionHi: 'मुख्य जल टावर संरचना'
  },
  {
    id: 'main-entrance',
    name: 'Main Entrance',
    nameHi: 'मुख्य प्रवेश द्वार',
    x: 25,
    y: 85,
    type: 'entrance',
    description: 'Main entrance with security check',
    descriptionHi: 'सुरक्षा जांच के साथ मुख्य प्रवेश'
  },
  {
    id: 'prabba-fabian-museum',
    name: 'Prabba Fabian Museum',
    nameHi: 'प्रब्बा फैबियन संग्रहालय',
    x: 40,
    y: 25,
    type: 'museum',
    description: 'Cultural and historical museum',
    descriptionHi: 'सांस्कृतिक और ऐतिहासिक संग्रहालय'
  },
  {
    id: 'somnati-temke',
    name: 'Somnati Temke Complex',
    nameHi: 'सोमनाटी टेमके परिसर',
    x: 60,
    y: 40,
    type: 'facility',
    description: 'Multi-purpose complex',
    descriptionHi: 'बहुउद्देशीय परिसर'
  },
  {
    id: 'garryyard-swinton',
    name: 'Garryyard Swinton',
    nameHi: 'गैरीयार्ड स्विंटन',
    x: 70,
    y: 50,
    type: 'accommodation',
    description: 'Guest accommodation area',
    descriptionHi: 'अतिथि आवास क्षेत्र'
  },
  {
    id: 'riffway-marabay',
    name: 'Riffway Marabay',
    nameHi: 'रिफवे माराबे',
    x: 75,
    y: 65,
    type: 'facility',
    description: 'Transportation and parking area',
    descriptionHi: 'परिवहन और पार्किंग क्षेत्र'
  },
  {
    id: 'thveni-sandir',
    name: 'Thveni Sandir',
    nameHi: 'थवेनी सैंडिर',
    x: 55,
    y: 60,
    type: 'shrine',
    description: 'Meditation and prayer area',
    descriptionHi: 'ध्यान और प्रार्थना क्षेत्र'
  },
  {
    id: 'accommodation-office',
    name: 'Accommodation Office',
    nameHi: 'आवास कार्यालय',
    x: 45,
    y: 70,
    type: 'office',
    description: 'Guest accommodation services',
    descriptionHi: 'अतिथि आवास सेवाएं'
  },
  {
    id: 'trust-office',
    name: 'Trust Office',
    nameHi: 'ट्रस्ट कार्यालय',
    x: 65,
    y: 35,
    type: 'office',
    description: 'Administrative office',
    descriptionHi: 'प्रशासनिक कार्यालय'
  },
  {
    id: 'grid-office',
    name: 'Grid Office',
    nameHi: 'ग्रिड कार्यालय',
    x: 80,
    y: 45,
    type: 'office',
    description: 'Infrastructure management',
    descriptionHi: 'अवसंरचना प्रबंधन'
  },
  {
    id: 'restroom',
    name: 'Restrooms',
    nameHi: 'शौचालय',
    x: 35,
    y: 45,
    type: 'facility',
    description: 'Clean restroom facilities',
    descriptionHi: 'स्वच्छ शौचालय सुविधा'
  },
  {
    id: 'parking',
    name: 'Parking Area',
    nameHi: 'पार्किंग क्षेत्र',
    x: 85,
    y: 75,
    type: 'facility',
    description: 'Vehicle parking area',
    descriptionHi: 'वाहन पार्किंग क्षेत्र'
  },
  {
    id: 'help-desk',
    name: 'Help Desk',
    nameHi: 'सहायता केंद्र',
    x: 30,
    y: 55,
    type: 'facility',
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
    entrance: true,
    office: true,
    accommodation: true,
    museum: true
  });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [mapDimensions, setMapDimensions] = useState({ width: 800, height: 600 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Set fixed map dimensions based on image aspect ratio
  useEffect(() => {
    const img = new Image();
    img.src = mapImage;
    img.onload = () => {
      // Set fixed dimensions while maintaining aspect ratio
      const aspectRatio = img.width / img.height;
      const containerWidth = 800; // Fixed width
      const containerHeight = containerWidth / aspectRatio;
      setMapDimensions({ width: containerWidth, height: containerHeight });
    };
  }, []);

  const filteredLocations = mapLocations.filter(location => 
    showFilters[location.type as keyof typeof showFilters]
  );

  // Zoom functionality
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile/kiosk
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - startPosition.x,
      y: e.touches[0].clientY - startPosition.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Kiosk-friendly large button handlers
  const handleLargeZoomIn = () => {
    handleZoomIn();
  };

  const handleLargeZoomOut = () => {
    handleZoomOut();
  };

  const handleLargeReset = () => {
    handleResetZoom();
  };

  const getLocationName = (location: MapLocation) => {
    return language.code === 'hi' ? location.nameHi : location.name;
  };

  const getLocationDescription = (location: MapLocation) => {
    return language.code === 'hi' ? location.descriptionHi : location.description;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'main': return 'bg-red-600';
      case 'shrine': return 'bg-purple-600';
      case 'facility': return 'bg-blue-600';
      case 'entrance': return 'bg-green-600';
      case 'office': return 'bg-orange-600';
      case 'accommodation': return 'bg-teal-600';
      case 'museum': return 'bg-indigo-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      main: language.code === 'hi' ? 'मुख्य' : 'Main',
      shrine: language.code === 'hi' ? 'मंदिर' : 'Shrines',
      facility: language.code === 'hi' ? 'सुविधाएं' : 'Facilities',
      entrance: language.code === 'hi' ? 'प्रवेश' : 'Entrance',
      office: language.code === 'hi' ? 'कार्यालय' : 'Offices',
      accommodation: language.code === 'hi' ? 'आवास' : 'Accommodation',
      museum: language.code === 'hi' ? 'संग्रहालय' : 'Museum'
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-3">
            <MapPin size={36} className="text-blue-800 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
              {language.code === 'hi' ? 'तटीय जल टावर मानचित्र' : 'Coastal Water Tower Map'}
            </h1>
            <MapPin size={36} className="text-blue-800 ml-3" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-800 mx-auto mb-3"></div>
          <p className="text-lg text-blue-700">
            {language.code === 'hi' ? 'परिसर का विस्तृत नक्शा' : 'Detailed complex map'}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-2xl p-4">
              {/* Zoom Controls - Larger for kiosk */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {language.code === 'hi' ? 'मानचित्र नियंत्रण' : 'Map Controls'}
                </h3>
                <div className="flex space-x-3">
                  <button
                    onClick={handleLargeZoomOut}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors text-xl font-bold min-w-[60px]"
                    title={language.code === 'hi' ? 'छोटा करें' : 'Zoom Out'}
                  >
                    -
                  </button>
                  <button
                    onClick={handleLargeReset}
                    className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors text-lg font-bold min-w-[80px]"
                    title={language.code === 'hi' ? 'मूल आकार' : 'Reset Zoom'}
                  >
                    100%
                  </button>
                  <button
                    onClick={handleLargeZoomIn}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors text-xl font-bold min-w-[60px]"
                    title={language.code === 'hi' ? 'बड़ा करें' : 'Zoom In'}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div 
                ref={mapContainerRef}
                className="relative bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-inner mx-auto touch-pan-x touch-pan-y"
                style={{
                  width: `${mapDimensions.width}px`,
                  height: `${mapDimensions.height}px`,
                  maxWidth: '100%',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Map Image */}
                <div 
                  className="absolute inset-0"
                  style={{
                    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                    transition: isDragging ? 'none' : 'transform 0.2s ease',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <img 
                    src={mapImage} 
                    alt={language.code === 'hi' ? 'तटीय जल टावर मानचित्र' : 'Coastal Water Tower Map'}
                    className="w-full h-full object-contain"
                    draggable="false"
                  />
                </div>

                {/* Location Markers - Numbered markers */}
                {filteredLocations.map((location, index) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                    style={{ 
                      left: `${location.x}%`, 
                      top: `${location.y}%` 
                    }}
                  >
                    <div className={`
                      ${getTypeColor(location.type)} 
                      rounded-full p-3 shadow-2xl 
                      group-hover:scale-125 transition-all duration-200 
                      border-4 border-white
                      hover:animate-pulse
                      min-w-[50px] min-h-[50px] flex items-center justify-center
                    `}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black bg-opacity-90 text-white px-4 py-3 rounded-lg text-lg font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 shadow-lg">
                      {getLocationName(location)}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black bg-opacity-90 rotate-45"></div>
                    </div>
                  </button>
                ))}

                {/* You Are Here Marker */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: '25%', top: '85%' }}
                >
                  <div className="bg-red-500 rounded-full p-4 shadow-2xl border-4 border-white animate-pulse">
                    <Navigation size={28} className="text-white" />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-red-600 text-white px-4 py-3 rounded-lg text-lg font-bold z-20 whitespace-nowrap">
                    {language.code === 'hi' ? 'आप यहाँ हैं' : 'You are here'}
                  </div>
                </div>
              </div>

              {/* Map Instructions - Larger text for kiosk */}
              <div className="mt-4 text-center text-lg text-gray-600">
                <p className="mb-2">
                  {language.code === 'hi' 
                    ? 'ज़ूम करने के लिए +/- बटन दबाएं। खींचने के लिए मानचित्र को पकड़ें।' 
                    : 'Use +/- buttons to zoom. Click and drag to pan the map.'
                  }
                </p>
                <p className="text-blue-600 font-medium">
                  {language.code === 'hi'
                    ? 'संख्याओं पर क्लिक करें स्थानों का विवरण देखने के लिए'
                    : 'Click on numbers to see location details'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language.code === 'hi' ? 'स्थान फिल्टर' : 'Location Filters'}
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {Object.entries(showFilters).map(([type, checked]) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded-lg text-lg">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setShowFilters({...showFilters, [type]: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <div className={`w-4 h-4 rounded-full ${getTypeColor(type)}`}></div>
                    <span className="text-gray-700 flex-1">{getTypeLabel(type)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Selected Location Details */}
            {selectedLocation && (
              <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full mr-4 ${getTypeColor(selectedLocation.type)}`}>
                    <span className="text-white font-bold text-lg">
                      {filteredLocations.findIndex(loc => loc.id === selectedLocation.id) + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {getLocationName(selectedLocation)}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {getLocationDescription(selectedLocation)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-2 rounded-full text-base font-medium bg-gray-100 text-gray-800">
                    {getTypeLabel(selectedLocation.type)}
                  </span>
                  <button 
                    onClick={() => setSelectedLocation(null)}
                    className="text-lg text-red-600 hover:text-red-800 font-medium"
                  >
                    {language.code === 'hi' ? 'बंद करें' : 'Close'}
                  </button>
                </div>
              </div>
            )}

            {/* Location List */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language.code === 'hi' ? 'स्थान सूची' : 'Location List'}
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {filteredLocations.map((location, index) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg text-left"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(location.type)}`}>
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-lg font-medium text-gray-700">{getLocationName(location)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-green-600 rounded-xl shadow-lg p-5 text-white">
              <h3 className="text-xl font-bold mb-4">
                {language.code === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-lg font-medium transition-all hover:scale-105">
                  {language.code === 'hi' ? 'दिशा निर्देश' : 'Directions'}
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-lg font-medium transition-all hover:scale-105">
                  {language.code === 'hi' ? 'सहेजें' : 'Save Map'}
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-lg font-medium transition-all hover:scale-105">
                  {language.code === 'hi' ? 'साझा करें' : 'Share'}
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg text-lg font-medium transition-all hover:scale-105">
                  {language.code === 'hi' ? 'छापें' : 'Print'}
                </button>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                {language.code === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contacts'}
              </h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-red-600" />
                  <span className="text-red-700 font-medium">
                    {language.code === 'hi' ? 'सुरक्षा:' : 'Security:'} +91-9876543210
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-red-600" />
                  <span className="text-red-700 font-medium">
                    {language.code === 'hi' ? 'प्राथमिक चिकित्सा:' : 'First Aid:'} +91-9876543211
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-red-600" />
                  <span className="text-red-700 font-medium">
                    {language.code === 'hi' ? 'प्रशासन:' : 'Administration:'} +91-9876543212
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