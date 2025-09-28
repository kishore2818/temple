// import React from 'react';
// import { Globe, ArrowRight } from 'lucide-react';
// import type { Screen, Language } from '../App';

// interface LanguageSelectionProps {
//   onLanguageSelect: (language: Language) => void;
//   onNavigate: (screen: Screen) => void;
//   currentLanguage: Language;
// }

// const languages: Language[] = [
//   { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
//   { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
//   { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
//   { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
//   { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
//   { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
//   { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
//   { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' }
// ];

// const LanguageSelection: React.FC<LanguageSelectionProps> = ({
//   onLanguageSelect,
//   onNavigate,
//   currentLanguage
// }) => {
//   const handleLanguageSelect = (language: Language) => {
//     onLanguageSelect(language);
//     setTimeout(() => onNavigate('menu'), 300);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8">
//       <div className="max-w-4xl w-full">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-6">
//             <Globe size={60} className="text-red-800 mr-4" />
//             <h1 className="text-5xl font-bold text-red-900">Select Language</h1>
//             <Globe size={60} className="text-red-800 ml-4" />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
//           <p className="text-2xl text-red-700">भाषा चुनें / Choose your preferred language</p>
//         </div>

//         {/* Language Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {languages.map((language) => (
//             <button
//               key={language.code}
//               onClick={() => handleLanguageSelect(language)}
//               className={`group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 ${
//                 currentLanguage.code === language.code
//                   ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-red-50'
//                   : 'border-red-200 hover:border-yellow-400'
//               }`}
//             >
//               {/* Selection Indicator */}
//               {currentLanguage.code === language.code && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//                   <ArrowRight size={16} className="text-white" />
//                 </div>
//               )}
              
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
//                   {language.flag}
//                 </div>
//                 <h3 className="text-xl font-bold text-red-900 mb-2">
//                   {language.name}
//                 </h3>
//                 <p className="text-lg text-red-700 font-medium">
//                   {language.nativeName}
//                 </p>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
//             </button>
//           ))}
//         </div>

//         {/* Continue Button */}
//         <div className="text-center">
//           <button
//             onClick={() => onNavigate('menu')}
//             className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
//           >
//             Continue with {currentLanguage.name} / {currentLanguage.nativeName}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LanguageSelection;




// import React, { useState } from 'react';
// import { Globe, ArrowRight, AlertTriangle, Phone, Shield, Heart, Flame, Users, Car, HelpCircle } from 'lucide-react';
// import type { Screen, Language } from '../App';

// interface LanguageSelectionProps {
//   onLanguageSelect: (language: Language) => void;
//   onNavigate: (screen: Screen) => void;
//   currentLanguage: Language;
// }

// const languages: Language[] = [
//   { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
//   { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
//   { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
//   { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
//   { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
//   { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
//   { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
//   { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' }
// ];

// const emergencyTypes = [
//   {
//     id: 'medical',
//     emoji: '🏥',
//     title: 'Medical Emergency',
//     subtitle: 'Ambulance & Medical Help',
//     description: 'Require immediate medical assistance',
//     color: 'from-red-500 to-pink-600',
//     icon: Heart
//   },
//   {
//     id: 'police',
//     emoji: '🚔',
//     title: 'Police Assistance',
//     subtitle: 'Security & Law Enforcement',
//     description: 'Need police or security help',
//     color: 'from-blue-500 to-blue-700',
//     icon: Shield
//   },
//   {
//     id: 'fire',
//     emoji: '🔥',
//     title: 'Fire Emergency',
//     subtitle: 'Fire Department',
//     description: 'Fire outbreak or smoke detected',
//     color: 'from-orange-500 to-red-600',
//     icon: Flame
//   },
//   {
//     id: 'harassment',
//     emoji: '🚨',
//     title: 'Harassment',
//     subtitle: 'Immediate Intervention',
//     description: 'Facing harassment or threat',
//     color: 'from-purple-500 to-red-600',
//     icon: Users
//   },
//   {
//     id: 'accident',
//     emoji: '🚑',
//     title: 'Accident',
//     subtitle: 'Road or Workplace Accident',
//     description: 'Accident with injuries',
//     color: 'from-yellow-500 to-orange-600',
//     icon: Car
//   },
//   {
//     id: 'other',
//     emoji: '⚠️',
//     title: 'Other Emergency',
//     subtitle: 'General Emergency Help',
//     description: 'Other critical situation',
//     color: 'from-gray-500 to-gray-700',
//     icon: HelpCircle
//   }
// ];

// const LanguageSelection: React.FC<LanguageSelectionProps> = ({
//   onLanguageSelect,
//   onNavigate,
//   currentLanguage
// }) => {
//   const [showEmergencyModal, setShowEmergencyModal] = useState(false);
//   const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
//   const [isConfirming, setIsConfirming] = useState(false);

//   const handleLanguageSelect = (language: Language) => {
//     onLanguageSelect(language);
//     setTimeout(() => onNavigate('menu'), 300);
//   };

//   const handleEmergencyClick = () => {
//     setShowEmergencyModal(true);
//     setSelectedEmergency(null);
//     setIsConfirming(false);
//   };

//   const handleEmergencyTypeSelect = (typeId: string) => {
//     setSelectedEmergency(typeId);
//     setIsConfirming(true);
//   };

//   const handleConfirmEmergency = () => {
//     if (selectedEmergency) {
//       // Here you would typically send the emergency request
//       console.log(`Emergency requested: ${selectedEmergency}`);
//       alert(`EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title} - Help is on the way!`);
//       setShowEmergencyModal(false);
//       setSelectedEmergency(null);
//       setIsConfirming(false);
//     }
//   };

//   const handleCancelEmergency = () => {
//     setShowEmergencyModal(false);
//     setSelectedEmergency(null);
//     setIsConfirming(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
//       {/* Emergency Button */}
//       <button
//         onClick={handleEmergencyClick}
//         className="fixed top-8 right-8 z-50 group animate-pulse hover:animate-none"
//       >
//         <div className="relative">
//           <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
//           <div className="relative bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
//             <AlertTriangle size={32} className="text-white" />
//           </div>
//         </div>
//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
//           EMERGENCY
//         </div>
//       </button>

//       {/* Emergency Modal */}
//       {showEmergencyModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <AlertTriangle size={40} className="mr-4" />
//                   <div>
//                     <h2 className="text-3xl font-bold">Emergency Assistance</h2>
//                     <p className="text-red-100 text-lg">Select the type of emergency</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleCancelEmergency}
//                   className="text-white hover:text-red-200 text-2xl font-bold bg-red-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>

//             {/* Emergency Types Grid */}
//             <div className="p-6 max-h-[60vh] overflow-y-auto">
//               <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//                 {emergencyTypes.map((type) => (
//                   <button
//                     key={type.id}
//                     onClick={() => handleEmergencyTypeSelect(type.id)}
//                     className={`bg-gradient-to-br ${type.color} text-white rounded-2xl p-4 text-left transform hover:scale-105 transition-all duration-200 border-4 ${
//                       selectedEmergency === type.id ? 'border-yellow-400 scale-105' : 'border-transparent'
//                     }`}
//                   >
//                     <div className="flex items-center mb-3">
//                       <span className="text-3xl mr-3">{type.emoji}</span>
//                       <type.icon size={24} className="text-white opacity-90" />
//                     </div>
//                     <h3 className="font-bold text-xl mb-1">{type.title}</h3>
//                     <p className="text-white opacity-90 text-sm mb-2">{type.subtitle}</p>
//                     <p className="text-white opacity-80 text-xs">{type.description}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Confirmation Section */}
//             {isConfirming && selectedEmergency && (
//               <div className="bg-yellow-50 border-t border-yellow-200 p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <AlertTriangle size={32} className="text-yellow-600 mr-4" />
//                     <div>
//                       <h3 className="text-xl font-bold text-yellow-800">
//                         Confirm Emergency: {emergencyTypes.find(t => t.id === selectedEmergency)?.title}
//                       </h3>
//                       <p className="text-yellow-700">
//                         Emergency services will be notified immediately
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex gap-4">
//                     <button
//                       onClick={handleCancelEmergency}
//                       className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleConfirmEmergency}
//                       className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200"
//                     >
//                       CONFIRM EMERGENCY
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Footer Instructions */}
//             {!isConfirming && (
//               <div className="bg-gray-100 p-4 text-center">
//                 <p className="text-gray-600 text-sm">
//                   <strong>Important:</strong> Use this only for genuine emergencies. False alerts may lead to legal action.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="max-w-4xl w-full">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-6">
//             <Globe size={60} className="text-red-800 mr-4" />
//             <h1 className="text-5xl font-bold text-red-900">Select Language</h1>
//             <Globe size={60} className="text-red-800 ml-4" />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
//           <p className="text-2xl text-red-700">भाषा चुनें / Choose your preferred language</p>
//         </div>

//         {/* Language Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {languages.map((language) => (
//             <button
//               key={language.code}
//               onClick={() => handleLanguageSelect(language)}
//               className={`group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 ${
//                 currentLanguage.code === language.code
//                   ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-red-50'
//                   : 'border-red-200 hover:border-yellow-400'
//               }`}
//             >
//               {/* Selection Indicator */}
//               {currentLanguage.code === language.code && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//                   <ArrowRight size={16} className="text-white" />
//                 </div>
//               )}
              
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
//                   {language.flag}
//                 </div>
//                 <h3 className="text-xl font-bold text-red-900 mb-2">
//                   {language.name}
//                 </h3>
//                 <p className="text-lg text-red-700 font-medium">
//                   {language.nativeName}
//                 </p>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
//             </button>
//           ))}
//         </div>

//         {/* Continue Button */}
//         <div className="text-center">
//           <button
//             onClick={() => onNavigate('menu')}
//             className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
//           >
//             Continue with {currentLanguage.name} / {currentLanguage.nativeName}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LanguageSelection;





// import React, { useState } from 'react';
// import { Globe, ArrowRight, AlertTriangle, Phone, Shield, Heart, Flame, Users, Car, HelpCircle, CheckCircle } from 'lucide-react';
// import type { Screen, Language } from '../App';

// interface LanguageSelectionProps {
//   onLanguageSelect: (language: Language) => void;
//   onNavigate: (screen: Screen) => void;
//   currentLanguage: Language;
// }

// const languages: Language[] = [
//   { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
//   { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
//   { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
//   { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
//   { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
//   { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
//   { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
//   { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' }
// ];

// const emergencyTypes = [
//   {
//     id: 'medical',
//     emoji: '🏥',
//     title: 'Medical',
//     subtitle: 'Ambulance',
//     color: 'from-red-500 to-pink-600',
//     icon: Heart
//   },
//   {
//     id: 'police',
//     emoji: '🚔',
//     title: 'Police',
//     subtitle: 'Security',
//     color: 'from-blue-500 to-blue-700',
//     icon: Shield
//   },
//   {
//     id: 'fire',
//     emoji: '🔥',
//     title: 'Fire',
//     subtitle: 'Rescue',
//     color: 'from-orange-500 to-red-600',
//     icon: Flame
//   },
//   {
//     id: 'harassment',
//     emoji: '🚨',
//     title: 'Harassment',
//     subtitle: 'Help',
//     color: 'from-purple-500 to-red-600',
//     icon: Users
//   },
//   {
//     id: 'accident',
//     emoji: '🚑',
//     title: 'Accident',
//     subtitle: 'Rescue',
//     color: 'from-yellow-500 to-orange-600',
//     icon: Car
//   },
//   {
//     id: 'other',
//     emoji: '⚠️',
//     title: 'Other',
//     subtitle: 'Emergency',
//     color: 'from-gray-500 to-gray-700',
//     icon: HelpCircle
//   }
// ];

// const LanguageSelection: React.FC<LanguageSelectionProps> = ({
//   onLanguageSelect,
//   onNavigate,
//   currentLanguage
// }) => {
//   const [showEmergencyModal, setShowEmergencyModal] = useState(false);
//   const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
//   const [isConfirming, setIsConfirming] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleLanguageSelect = (language: Language) => {
//     onLanguageSelect(language);
//     setTimeout(() => onNavigate('menu'), 300);
//   };

//   const handleEmergencyClick = () => {
//     setShowEmergencyModal(true);
//     setSelectedEmergency(null);
//     setIsConfirming(false);
//     setShowSuccess(false);
//   };

//   const handleEmergencyTypeSelect = (typeId: string) => {
//     setSelectedEmergency(typeId);
//     setIsConfirming(true);
//   };

//   const handleConfirmEmergency = () => {
//     if (selectedEmergency) {
//       setIsConfirming(false);
//       setShowSuccess(true);
      
//       // Simulate sending request
//       setTimeout(() => {
//         setShowEmergencyModal(false);
//         setSelectedEmergency(null);
//         setShowSuccess(false);
//         alert(`EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title} - Help is on the way!`);
//       }, 2000);
//     }
//   };

//   const handleCancelEmergency = () => {
//     setShowEmergencyModal(false);
//     setSelectedEmergency(null);
//     setIsConfirming(false);
//     setShowSuccess(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
//       {/* Emergency Button - Positioned lower */}
//       <button
//         onClick={handleEmergencyClick}
//         className="fixed top-24 right-8 z-50 group animate-pulse hover:animate-none"
//       >
//         <div className="relative">
//           <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
//           <div className="relative bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
//             <AlertTriangle size={32} className="text-white" />
//           </div>
//         </div>
//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
//           EMERGENCY
//         </div>
//       </button>

//       {/* Emergency Modal */}
//       {showEmergencyModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            
//             {/* Success Screen */}
//             {showSuccess ? (
//               <div className="p-8 text-center">
//                 <div className="flex justify-center mb-6">
//                   <div className="relative">
//                     <CheckCircle size={80} className="text-green-500 animate-bounce" />
//                   </div>
//                 </div>
//                 <h2 className="text-4xl font-bold text-green-600 mb-4">Request Sent!</h2>
//                 <p className="text-xl text-gray-700 mb-6">
//                   Help is on the way. Emergency services have been notified.
//                 </p>
//                 <div className="animate-pulse bg-green-100 p-4 rounded-lg mb-6">
//                   <p className="text-green-800 font-semibold">
//                     {emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency Team Dispatched
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleCancelEmergency}
//                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <AlertTriangle size={40} className="mr-4" />
//                       <div>
//                         <h2 className="text-3xl font-bold">Emergency Assistance</h2>
//                         <p className="text-red-100 text-lg">Select emergency type</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={handleCancelEmergency}
//                       className="text-white hover:text-red-200 text-2xl font-bold bg-red-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 </div>

//                 {/* Emergency Types Grid */}
//                 <div className="p-6 max-h-[60vh] overflow-y-auto">
//                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//                     {emergencyTypes.map((type) => (
//                       <button
//                         key={type.id}
//                         onClick={() => handleEmergencyTypeSelect(type.id)}
//                         className={`bg-gradient-to-br ${type.color} text-white rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
//                           selectedEmergency === type.id ? 'border-yellow-400 scale-105' : 'border-transparent'
//                         }`}
//                       >
//                         <div className="flex flex-col items-center">
//                           <span className="text-4xl mb-2">{type.emoji}</span>
//                           <type.icon size={32} className="text-white opacity-90 mb-2" />
//                           <h3 className="font-bold text-lg mb-1">{type.title}</h3>
//                           <p className="text-white opacity-90 text-sm">{type.subtitle}</p>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Confirmation Section */}
//                 {isConfirming && selectedEmergency && (
//                   <div className="bg-yellow-50 border-t border-yellow-200 p-6">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <AlertTriangle size={32} className="text-yellow-600 mr-4" />
//                         <div>
//                           <h3 className="text-xl font-bold text-yellow-800">
//                             Confirm {emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency
//                           </h3>
//                           <p className="text-yellow-700">Emergency services will be notified</p>
//                         </div>
//                       </div>
//                       <div className="flex gap-4">
//                         <button
//                           onClick={handleCancelEmergency}
//                           className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           onClick={handleConfirmEmergency}
//                           className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200"
//                         >
//                           CONFIRM
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Footer Instructions */}
//                 {!isConfirming && (
//                   <div className="bg-gray-100 p-4 text-center">
//                     <p className="text-gray-600 text-sm">
//                       <strong>Note:</strong> For genuine emergencies only
//                     </p>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Main Content - Unchanged */}
//       <div className="max-w-4xl w-full">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-6">
//             <Globe size={60} className="text-red-800 mr-4" />
//             <h1 className="text-5xl font-bold text-red-900">Select Language</h1>
//             <Globe size={60} className="text-red-800 ml-4" />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
//           <p className="text-2xl text-red-700">भाषा चुनें / Choose your preferred language</p>
//         </div>

//         {/* Language Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {languages.map((language) => (
//             <button
//               key={language.code}
//               onClick={() => handleLanguageSelect(language)}
//               className={`group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 ${
//                 currentLanguage.code === language.code
//                   ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-red-50'
//                   : 'border-red-200 hover:border-yellow-400'
//               }`}
//             >
//               {/* Selection Indicator */}
//               {currentLanguage.code === language.code && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//                   <ArrowRight size={16} className="text-white" />
//                 </div>
//               )}
              
//               <div className="flex flex-col items-center text-center">
//                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
//                   {language.flag}
//                 </div>
//                 <h3 className="text-xl font-bold text-red-900 mb-2">
//                   {language.name}
//                 </h3>
//                 <p className="text-lg text-red-700 font-medium">
//                   {language.nativeName}
//                 </p>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
//             </button>
//           ))}
//         </div>

//         {/* Continue Button */}
//         <div className="text-center">
//           <button
//             onClick={() => onNavigate('menu')}
//             className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
//           >
//             Continue with {currentLanguage.name} / {currentLanguage.nativeName}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LanguageSelection;




import React, { useState } from 'react';
import { Globe, ArrowRight, AlertTriangle, Phone, Shield, Heart, Flame, Users, Car, HelpCircle, CheckCircle } from 'lucide-react';
import type { Screen, Language } from '../App';

interface LanguageSelectionProps {
  onLanguageSelect: (language: Language) => void;
  onNavigate: (screen: Screen) => void;
  currentLanguage: Language;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: 'EN' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: 'IN' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: 'IN' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: 'IN' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: 'IN' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: 'IN' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: 'IN' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: 'IN' }
];

const LanguageSelection: React.FC<LanguageSelectionProps> = ({
  onLanguageSelect,
  onNavigate,
  currentLanguage
}) => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLanguageSelect = (language: Language) => {
    onLanguageSelect(language);
    setTimeout(() => onNavigate('menu'), 300);
  };

  const handleEmergencyClick = () => {
    setShowEmergencyModal(true);
    setSelectedEmergency(null);
    setIsConfirming(false);
    setShowSuccess(false);
  };

  const handleEmergencyTypeSelect = (typeId: string) => {
    setSelectedEmergency(typeId);
    setIsConfirming(true);
  };

  const handleConfirmEmergency = () => {
    if (selectedEmergency) {
      setIsConfirming(false);
      setShowSuccess(true);
      
      // Simulate sending request
      setTimeout(() => {
        setShowEmergencyModal(false);
        setSelectedEmergency(null);
        setShowSuccess(false);
        alert(`EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title} - Help is on the way!`);
      }, 2000);
    }
  };

  const handleCancelEmergency = () => {
    setShowEmergencyModal(false);
    setSelectedEmergency(null);
    setIsConfirming(false);
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      

      {/* Emergency Modal - Fixed 3/4 screen, no scrolling */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full h-[75vh] max-w-6xl overflow-hidden flex flex-col">
            
            {/* Success Screen */}
            {showSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="flex justify-center mb-8">
                  <CheckCircle size={100} className="text-green-500 animate-bounce" />
                </div>
                <h2 className="text-5xl font-bold text-green-600 mb-6">Emergency Request Sent!</h2>
                <p className="text-2xl text-gray-700 mb-8">
                  Help is on the way. Emergency services have been notified.
                </p>
                <div className="animate-pulse bg-green-100 p-6 rounded-lg mb-8 border-4 border-green-300">
                  <p className="text-green-800 font-semibold text-xl">
                    {emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency Team Dispatched
                  </p>
                </div>
                <button
                  onClick={handleCancelEmergency}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full transition-colors text-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header - Fixed height */}
                <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertTriangle size={40} className="mr-4" />
                      <div>
                        <h2 className="text-3xl font-bold">EMERGENCY ASSISTANCE</h2>
                        <p className="text-red-100 text-lg mt-1">Select the type of emergency below</p>
                      </div>
                    </div>
                    <button
                      onClick={handleCancelEmergency}
                      className="text-white hover:text-red-200 text-2xl font-bold bg-red-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Emergency Types Grid - Fixed height, no scroll */}
                <div className="flex-1 p-6 overflow-hidden">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {emergencyTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleEmergencyTypeSelect(type.id)}
                        className={`bg-gradient-to-br ${type.color} text-white rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
                          selectedEmergency === type.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
                        } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center`}
                      >
                        <span className="text-4xl mb-2">{type.emoji}</span>
                        <type.icon size={32} className="text-white opacity-90 mb-2" />
                        <h3 className="font-bold text-xl mb-1">{type.title}</h3>
                        <p className="text-white opacity-90 text-base">{type.subtitle}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Confirmation Section - Fixed at bottom */}
                {isConfirming && selectedEmergency && (
                  <div className="bg-yellow-50 border-t-4 border-yellow-400 p-4 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle size={32} className="text-yellow-600 mr-4" />
                        <div>
                          <h3 className="text-xl font-bold text-yellow-800">
                            CONFIRM {emergencyTypes.find(t => t.id === selectedEmergency)?.title?.toUpperCase()} EMERGENCY
                          </h3>
                          <p className="text-yellow-700">Emergency services will be notified immediately</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={handleCancelEmergency}
                          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleConfirmEmergency}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                          CONFIRM EMERGENCY
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Instructions */}
                {!isConfirming && (
                  <div className="bg-gray-100 p-3 text-center border-t border-gray-300 flex-shrink-0">
                    <p className="text-gray-600">
                      <strong>IMPORTANT:</strong> This button should only be used for genuine emergencies
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
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
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform font-bold bg-gradient-to-br from-red-600 to-yellow-600 bg-clip-text text-transparent">
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