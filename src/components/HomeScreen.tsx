


// // // import React, { useEffect, useState } from 'react';
// // // import { Sparkles, Bell, AlertTriangle, CheckCircle, Heart, Shield, Flame, Users, Car, Search, User, Baby } from 'lucide-react';
// // // import type { Screen, Language } from '../App';

// // // interface HomeScreenProps {
// // //   onNavigate: (screen: Screen) => void;
// // //   language: Language;
// // // }

// // // const emergencyTypes = [
// // //   {
// // //     id: 'medical',
// // //     emoji: '🏥',
// // //     title: 'Medical',
// // //     subtitle: 'Ambulance',
// // //     color: 'from-red-500 to-pink-600',
// // //     icon: Heart,
// // //     gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
// // //     borderColor: 'border-red-400'
// // //   },
// // //   {
// // //     id: 'police',
// // //     emoji: '🚔',
// // //     title: 'Police',
// // //     subtitle: 'Security',
// // //     color: 'from-blue-500 to-blue-700',
// // //     icon: Shield,
// // //     gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
// // //     borderColor: 'border-blue-400'
// // //   },
// // //   {
// // //     id: 'fire',
// // //     emoji: '🔥',
// // //     title: 'Fire',
// // //     subtitle: 'Rescue',
// // //     color: 'from-orange-500 to-red-600',
// // //     icon: Flame,
// // //     gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
// // //     borderColor: 'border-orange-400'
// // //   },
// // //   {
// // //     id: 'harassment',
// // //     emoji: '🚨',
// // //     title: 'Harassment',
// // //     subtitle: 'Help',
// // //     color: 'from-purple-500 to-red-600',
// // //     icon: Users,
// // //     gradient: 'bg-gradient-to-br from-purple-500 to-red-600',
// // //     borderColor: 'border-purple-400'
// // //   },
// // //   {
// // //     id: 'accident',
// // //     emoji: '🚑',
// // //     title: 'Accident',
// // //     subtitle: 'Rescue',
// // //     color: 'from-yellow-500 to-orange-600',
// // //     icon: Car,
// // //     gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600',
// // //     borderColor: 'border-yellow-400'
// // //   },
// // //   {
// // //     id: 'missing',
// // //     emoji: '🔍',
// // //     title: 'Missing Person',
// // //     subtitle: 'Search & Rescue',
// // //     color: 'from-green-500 to-teal-600',
// // //     icon: Search,
// // //     gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
// // //     borderColor: 'border-green-400'
// // //   }
// // // ];

// // // const ageCategories = [
// // //   {
// // //     id: 'child',
// // //     title: 'Child',
// // //     subtitle: 'Below 12 years',
// // //     icon: Baby,
// // //     color: 'from-blue-400 to-blue-600',
// // //     emoji: '👶'
// // //   },
// // //   {
// // //     id: 'teen',
// // //     title: 'Teenager',
// // //     subtitle: '13-19 years',
// // //     icon: User,
// // //     color: 'from-green-400 to-green-600',
// // //     emoji: '👦'
// // //   },
// // //   {
// // //     id: 'adult',
// // //     title: 'Adult',
// // //     subtitle: '20-59 years',
// // //     icon: User,
// // //     color: 'from-purple-400 to-purple-600',
// // //     emoji: '👨'
// // //   },
// // //   {
// // //     id: 'senior',
// // //     title: 'Senior Citizen',
// // //     subtitle: '60+ years',
// // //     icon: User,
// // //     color: 'from-orange-400 to-orange-600',
// // //     emoji: '👴'
// // //   }
// // // ];

// // // const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, language }) => {
// // //   const [currentTime, setCurrentTime] = useState(new Date());
// // //   const [showEmergencyModal, setShowEmergencyModal] = useState(false);
// // //   const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
// // //   const [isConfirming, setIsConfirming] = useState(false);
// // //   const [showSuccess, setShowSuccess] = useState(false);
// // //   const [showAgeSelection, setShowAgeSelection] = useState(false);
// // //   const [selectedAgeCategory, setSelectedAgeCategory] = useState<string | null>(null);
// // //   const [currentStep, setCurrentStep] = useState<'initial' | 'confirmation' | 'ageSelection' | 'success'>('initial');

// // //   useEffect(() => {
// // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   const welcomeMessages = {
// // //     en: 'Welcome to Divine Temple',
// // //     hi: 'दिव्य मंदिर में आपका स्वागत है',
// // //     ta: 'திவ்ய கோவிலுக்கு வரவேற்கிறோம்',
// // //     te: 'దివ్య ఆలయానికి స్వాగతం'
// // //   };

// // //   const getMessage = (key: string) => {
// // //     return (welcomeMessages as any)[language.code] || welcomeMessages.en;
// // //   };

// // //   const handleEmergencyClick = () => {
// // //     setShowEmergencyModal(true);
// // //     setCurrentStep('initial');
// // //     setSelectedEmergency(null);
// // //     setIsConfirming(false);
// // //     setShowSuccess(false);
// // //     setShowAgeSelection(false);
// // //     setSelectedAgeCategory(null);
// // //   };

// // //   const handleEmergencyTypeSelect = (typeId: string) => {
// // //     setSelectedEmergency(typeId);
// // //     if (typeId === 'missing') {
// // //       setCurrentStep('ageSelection');
// // //       setShowAgeSelection(true);
// // //     } else {
// // //       setCurrentStep('confirmation');
// // //       setIsConfirming(true);
// // //     }
// // //   };

// // //   const handleAgeCategorySelect = (ageId: string) => {
// // //     setSelectedAgeCategory(ageId);
// // //     setCurrentStep('confirmation');
// // //     setIsConfirming(true);
// // //   };

// // //   const handleConfirmEmergency = () => {
// // //     if (selectedEmergency) {
// // //       setIsConfirming(false);
// // //       setCurrentStep('success');
// // //       setShowSuccess(true);
      
// // //       // Simulate sending request
// // //       setTimeout(() => {
// // //         setShowEmergencyModal(false);
// // //         setSelectedEmergency(null);
// // //         setShowSuccess(false);
// // //         setShowAgeSelection(false);
// // //         setSelectedAgeCategory(null);
// // //         setCurrentStep('initial');
        
// // //         let alertMessage = `EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title}`;
// // //         if (selectedEmergency === 'missing' && selectedAgeCategory) {
// // //           const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
// // //           alertMessage += ` - ${ageCategory?.title} - Search team has been dispatched!`;
// // //         } else {
// // //           alertMessage += ' - Help is on the way!';
// // //         }
        
// // //         alert(alertMessage);
// // //       }, 3000);
// // //     }
// // //   };

// // //   const handleCancelEmergency = () => {
// // //     setShowEmergencyModal(false);
// // //     setSelectedEmergency(null);
// // //     setIsConfirming(false);
// // //     setShowSuccess(false);
// // //     setShowAgeSelection(false);
// // //     setSelectedAgeCategory(null);
// // //     setCurrentStep('initial');
// // //   };

// // //   const handleBackToSelection = () => {
// // //     if (currentStep === 'ageSelection') {
// // //       setCurrentStep('initial');
// // //       setShowAgeSelection(false);
// // //       setSelectedAgeCategory(null);
// // //     } else if (currentStep === 'confirmation') {
// // //       if (selectedEmergency === 'missing') {
// // //         setCurrentStep('ageSelection');
// // //         setShowAgeSelection(true);
// // //         setIsConfirming(false);
// // //       } else {
// // //         setCurrentStep('initial');
// // //         setIsConfirming(false);
// // //       }
// // //     }
// // //   };

// // //   const getSuccessMessage = () => {
// // //     if (selectedEmergency === 'missing' && selectedAgeCategory) {
// // //       const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
// // //       return `${ageCategory?.title} Search Team Dispatched`;
// // //     }
// // //     return `${emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency Team Dispatched`;
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
// // //       {/* Emergency Button */}
// // //       <button
// // //         onClick={handleEmergencyClick}
// // //         className="fixed top-10 right-10 z-50 group animate-pulse hover:animate-none"
// // //       >
// // //         <div className="relative">
// // //           <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
// // //           <div className="relative bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
// // //             <AlertTriangle size={48} className="text-white" />
// // //           </div>
// // //         </div>
// // //         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
// // //           EMERGENCY
// // //         </div>
// // //       </button>

// // //       {/* Emergency Modal */}
// // //       {showEmergencyModal && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-3xl shadow-2xl w-full h-[85vh] max-w-6xl overflow-hidden flex flex-col">
            
// // //             {/* Success Screen */}
// // //             {currentStep === 'success' && (
// // //               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
// // //                 <div className="flex justify-center mb-8">
// // //                   <CheckCircle size={100} className="text-green-500 animate-bounce" />
// // //                 </div>
// // //                 <h2 className="text-5xl font-bold text-green-600 mb-6">Emergency Request Sent!</h2>
// // //                 <p className="text-2xl text-gray-700 mb-8">
// // //                   Help is on the way. Emergency services have been notified.
// // //                 </p>
// // //                 <div className="animate-pulse bg-green-100 p-6 rounded-lg mb-8 border-4 border-green-300">
// // //                   <p className="text-green-800 font-semibold text-xl">
// // //                     {getSuccessMessage()}
// // //                   </p>
// // //                 </div>
// // //                 <button
// // //                   onClick={handleCancelEmergency}
// // //                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full transition-colors text-xl"
// // //                 >
// // //                   Close
// // //                 </button>
// // //               </div>
// // //             )}

// // //             {/* Age Selection Screen */}
// // //             {currentStep === 'ageSelection' && (
// // //               <>
// // //                 <div className="bg-gradient-to-r from-green-600 to-teal-800 p-6 text-white flex-shrink-0">
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="flex items-center">
// // //                       <Search size={40} className="mr-4" />
// // //                       <div>
// // //                         <h2 className="text-3xl font-bold">MISSING PERSON - AGE CATEGORY</h2>
// // //                         <p className="text-green-100 text-lg mt-1">Select the age category of the missing person</p>
// // //                       </div>
// // //                     </div>
// // //                     <button
// // //                       onClick={handleCancelEmergency}
// // //                       className="text-white hover:text-green-200 text-2xl font-bold bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
// // //                     >
// // //                       ×
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex-1 p-6 overflow-hidden">
// // //                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
// // //                     {ageCategories.map((age) => (
// // //                       <button
// // //                         key={age.id}
// // //                         onClick={() => handleAgeCategorySelect(age.id)}
// // //                         className={`bg-gradient-to-br ${age.color} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
// // //                           selectedAgeCategory === age.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
// // //                         } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center`}
// // //                       >
// // //                         <span className="text-4xl mb-3">{age.emoji}</span>
// // //                         <age.icon size={36} className="text-white opacity-90 mb-3" />
// // //                         <h3 className="font-bold text-xl mb-2">{age.title}</h3>
// // //                         <p className="text-white opacity-90 text-sm">{age.subtitle}</p>
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 <div className="bg-gray-100 p-4 flex justify-between items-center flex-shrink-0">
// // //                   <button
// // //                     onClick={handleBackToSelection}
// // //                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
// // //                   >
// // //                     Back to Emergency Types
// // //                   </button>
// // //                   <p className="text-gray-600 text-sm">
// // //                     Select the appropriate age category to help us dispatch the right search team
// // //                   </p>
// // //                 </div>
// // //               </>
// // //             )}

// // //             {/* Main Emergency Selection & Confirmation Screens */}
// // //             {(currentStep === 'initial' || currentStep === 'confirmation') && (
// // //               <>
// // //                 {/* Header - Fixed height */}
// // //                 <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white flex-shrink-0">
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="flex items-center">
// // //                       <AlertTriangle size={40} className="mr-4" />
// // //                       <div>
// // //                         <h2 className="text-3xl font-bold">EMERGENCY ASSISTANCE</h2>
// // //                         <p className="text-red-100 text-lg mt-1">
// // //                           {currentStep === 'initial' ? 'Select the type of emergency below' : 'Confirm your emergency request'}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <button
// // //                       onClick={handleCancelEmergency}
// // //                       className="text-white hover:text-red-200 text-2xl font-bold bg-red-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
// // //                     >
// // //                       ×
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 {/* Emergency Types Grid - Only show in initial step */}
// // //                 {currentStep === 'initial' && (
// // //                   <div className="flex-1 p-6 overflow-hidden">
// // //                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
// // //                       {emergencyTypes.map((type) => (
// // //                         <button
// // //                           key={type.id}
// // //                           onClick={() => handleEmergencyTypeSelect(type.id)}
// // //                           className={`${type.gradient} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
// // //                             selectedEmergency === type.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
// // //                           } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group`}
// // //                         >
// // //                           {/* Animated background effect */}
// // //                           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          
// // //                           {/* Icon and emoji container */}
// // //                           <div className="relative z-10">
// // //                             <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">
// // //                               {type.emoji}
// // //                             </span>
// // //                             <type.icon size={36} className="text-white opacity-90 mb-3 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
// // //                           </div>
                          
// // //                           {/* Text content */}
// // //                           <div className="relative z-10">
// // //                             <h3 className="font-bold text-xl mb-2 transform group-hover:scale-105 transition-transform duration-300">
// // //                               {type.title}
// // //                             </h3>
// // //                             <p className="text-white opacity-90 text-sm transform group-hover:scale-105 transition-transform duration-300">
// // //                               {type.subtitle}
// // //                             </p>
// // //                           </div>

// // //                           {/* Hover effect border */}
// // //                           <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300"></div>
// // //                         </button>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* Confirmation Section */}
// // //                 {currentStep === 'confirmation' && selectedEmergency && (
// // //                   <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
// // //                     <div className="bg-yellow-50 border-4 border-yellow-400 rounded-3xl p-8 max-w-2xl w-full">
// // //                       <AlertTriangle size={80} className="text-yellow-600 mx-auto mb-6" />
// // //                       <h3 className="text-3xl font-bold text-yellow-800 mb-4">
// // //                         CONFIRM EMERGENCY REQUEST
// // //                       </h3>
// // //                       <div className="bg-white rounded-xl p-6 mb-6 border-2 border-yellow-200">
// // //                         <p className="text-2xl text-gray-800 font-semibold mb-2">
// // //                           {emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency
// // //                         </p>
// // //                         {selectedEmergency === 'missing' && selectedAgeCategory && (
// // //                           <p className="text-xl text-gray-700">
// // //                             Age Category: {ageCategories.find(a => a.id === selectedAgeCategory)?.title}
// // //                           </p>
// // //                         )}
// // //                         <p className="text-lg text-gray-600 mt-3">
// // //                           Emergency services will be notified immediately with your location
// // //                         </p>
// // //                       </div>
// // //                       <div className="flex gap-4 justify-center">
// // //                         <button
// // //                           onClick={handleBackToSelection}
// // //                           className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
// // //                         >
// // //                           Cancel
// // //                         </button>
// // //                         <button
// // //                           onClick={handleConfirmEmergency}
// // //                           className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
// // //                         >
// // //                           CONFIRM EMERGENCY
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* Footer Instructions */}
// // //                 {currentStep === 'initial' && (
// // //                   <div className="bg-gray-100 p-4 text-center border-t border-gray-300 flex-shrink-0">
// // //                     <p className="text-gray-600">
// // //                       <strong>IMPORTANT:</strong> This button should only be used for genuine emergencies
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Temple Image Placeholder */}
// // //       <div className="relative mb-8">
// // //         <div className="w-80 h-80 bg-gradient-to-b from-yellow-400 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
// // //           <div className="w-64 h-64 bg-gradient-to-t from-red-900 to-yellow-500 rounded-full flex items-center justify-center">
// // //             <Bell size={120} className="text-white animate-pulse" />
// // //           </div>
// // //         </div>
// // //         <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
// // //           <Sparkles size={32} className="text-red-800" />
// // //         </div>
// // //       </div>

// // //       {/* Welcome Message */}
// // //       <div className="text-center mb-12">
// // //         <h1 className="text-6xl font-bold text-red-900 mb-4 tracking-wide">
// // //           {getMessage('welcome')}
// // //         </h1>
// // //         <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-6"></div>
// // //         <p className="text-2xl text-red-700 font-medium">
// // //           {currentTime.toLocaleTimeString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
// // //             hour: '2-digit',
// // //             minute: '2-digit',
// // //             second: '2-digit',
// // //             hour12: true
// // //           })}
// // //         </p>
// // //         <p className="text-xl text-gray-700 mt-2">
// // //           {currentTime.toLocaleDateString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
// // //             weekday: 'long',
// // //             year: 'numeric',
// // //             month: 'long',
// // //             day: 'numeric'
// // //           })}
// // //         </p>
// // //       </div>

// // //       {/* Start Button */}
// // //       <button
// // //         onClick={() => onNavigate('language')}
// // //         className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-400 hover:to-red-500 text-white text-3xl font-bold py-6 px-16 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300"
// // //       >
// // //         <div className="flex items-center space-x-4">
// // //           <Sparkles size={36} className="animate-pulse" />
// // //           <span>Start Here / यहाँ शुरू करें</span>
// // //           <Sparkles size={36} className="animate-pulse" />
// // //         </div>
// // //       </button>

// // //       {/* Language Indicator */}
// // //       <div className="absolute bottom-8 left-8">
// // //         <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg">
// // //           <p className="text-sm text-gray-600 mb-2">Current Language</p>
// // //           <div className="flex items-center space-x-2">
// // //             <span className="text-2xl">{language.flag}</span>
// // //             <span className="text-lg font-medium text-gray-800">{language.name}</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Decorative Elements */}
// // //       <div className="absolute top-8 left-8 w-24 h-24 border-8 border-yellow-400 rounded-full opacity-20 animate-spin-slow"></div>
// // //       <div className="absolute top-8 right-8 w-32 h-32 border-4 border-red-800 rounded-full opacity-20 animate-pulse"></div>
// // //       <div className="absolute bottom-8 right-8 w-20 h-20 border-6 border-yellow-600 rounded-full opacity-20 animate-bounce"></div>
// // //     </div>
// // //   );
// // // };

// // // export default HomeScreen;






// // import React, { useEffect, useState } from 'react';
// // import { Sparkles, Bell, AlertTriangle, CheckCircle, Heart, Shield, Flame, Users, Car, Search, User, Baby } from 'lucide-react';
// // import type { Screen, Language } from '../App';

// // interface HomeScreenProps {
// //   onNavigate: (screen: Screen) => void;
// //   language: Language;
// // }

// // const emergencyTypes = [
// //   {
// //     id: 'medical',
// //     emoji: '🏥',
// //     title: 'Medical',
// //     subtitle: 'Ambulance',
// //     color: 'from-red-500 to-pink-600',
// //     icon: Heart,
// //     gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
// //     borderColor: 'border-red-400'
// //   },
// //   {
// //     id: 'police',
// //     emoji: '🚔',
// //     title: 'Police',
// //     subtitle: 'Security',
// //     color: 'from-blue-500 to-blue-700',
// //     icon: Shield,
// //     gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
// //     borderColor: 'border-blue-400'
// //   },
// //   {
// //     id: 'fire',
// //     emoji: '🔥',
// //     title: 'Fire',
// //     subtitle: 'Rescue',
// //     color: 'from-orange-500 to-red-600',
// //     icon: Flame,
// //     gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
// //     borderColor: 'border-orange-400'
// //   },
// //   {
// //     id: 'harassment',
// //     emoji: '🚨',
// //     title: 'Harassment',
// //     subtitle: 'Help',
// //     color: 'from-purple-500 to-red-600',
// //     icon: Users,
// //     gradient: 'bg-gradient-to-br from-purple-500 to-red-600',
// //     borderColor: 'border-purple-400'
// //   },
// //   {
// //     id: 'accident',
// //     emoji: '🚑',
// //     title: 'Accident',
// //     subtitle: 'Rescue',
// //     color: 'from-yellow-500 to-orange-600',
// //     icon: Car,
// //     gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600',
// //     borderColor: 'border-yellow-400'
// //   },
// //   {
// //     id: 'missing',
// //     emoji: '🔍',
// //     title: 'Missing Person',
// //     subtitle: 'Search & Rescue',
// //     color: 'from-green-500 to-teal-600',
// //     icon: Search,
// //     gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
// //     borderColor: 'border-green-400'
// //   }
// // ];

// // const ageCategories = [
// //   {
// //     id: 'child',
// //     title: 'Child',
// //     subtitle: 'Below 12 years',
// //     icon: Baby,
// //     color: 'from-blue-400 to-blue-600',
// //     emoji: '👶'
// //   },
// //   {
// //     id: 'teen',
// //     title: 'Teenager',
// //     subtitle: '13-19 years',
// //     icon: User,
// //     color: 'from-green-400 to-green-600',
// //     emoji: '👦'
// //   },
// //   {
// //     id: 'adult',
// //     title: 'Adult',
// //     subtitle: '20-59 years',
// //     icon: User,
// //     color: 'from-purple-400 to-purple-600',
// //     emoji: '👨'
// //   },
// //   {
// //     id: 'senior',
// //     title: 'Senior Citizen',
// //     subtitle: '60+ years',
// //     icon: User,
// //     color: 'from-orange-400 to-orange-600',
// //     emoji: '👴'
// //   }
// // ];

// // const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, language }) => {
// //   const [currentTime, setCurrentTime] = useState(new Date());
// //   const [showEmergencyModal, setShowEmergencyModal] = useState(false);
// //   const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
// //   const [isConfirming, setIsConfirming] = useState(false);
// //   const [showSuccess, setShowSuccess] = useState(false);
// //   const [showAgeSelection, setShowAgeSelection] = useState(false);
// //   const [selectedAgeCategory, setSelectedAgeCategory] = useState<string | null>(null);
// //   const [currentStep, setCurrentStep] = useState<'initial' | 'confirmation' | 'ageSelection' | 'success'>('initial');

// //   useEffect(() => {
// //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const welcomeMessages = {
// //     en: 'Welcome to SHREE',
// //     hi: 'श्री में आपका स्वागत है',
// //     ta: 'ஸ்ரீக்கு வரவேற்கிறோம்',
// //     te: 'శ్రీకి స్వాగతం'
// //   };

// //   const getMessage = (key: string) => {
// //     return (welcomeMessages as any)[language.code] || welcomeMessages.en;
// //   };

// //   const handleEmergencyClick = () => {
// //     setShowEmergencyModal(true);
// //     setCurrentStep('confirmation'); // Changed: Direct to confirmation first
// //     setSelectedEmergency(null);
// //     setIsConfirming(true); // Changed: Show confirmation immediately
// //     setShowSuccess(false);
// //     setShowAgeSelection(false);
// //     setSelectedAgeCategory(null);
// //   };

// //   const handleEmergencyTypeSelect = (typeId: string) => {
// //     setSelectedEmergency(typeId);
// //     if (typeId === 'missing') {
// //       setCurrentStep('ageSelection');
// //       setShowAgeSelection(true);
// //     } else {
// //       // For other emergency types, go to success after selection
// //       handleConfirmEmergency();
// //     }
// //   };

// //   const handleAgeCategorySelect = (ageId: string) => {
// //     setSelectedAgeCategory(ageId);
// //     // For missing person with age selected, go to success
// //     handleConfirmEmergency();
// //   };

// //   const handleConfirmEmergency = () => {
// //     if (selectedEmergency) {
// //       setIsConfirming(false);
// //       setCurrentStep('success');
// //       setShowSuccess(true);
      
// //       // Simulate sending request
// //       setTimeout(() => {
// //         setShowEmergencyModal(false);
// //         setSelectedEmergency(null);
// //         setShowSuccess(false);
// //         setShowAgeSelection(false);
// //         setSelectedAgeCategory(null);
// //         setCurrentStep('initial');
        
// //         let alertMessage = `EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title}`;
// //         if (selectedEmergency === 'missing' && selectedAgeCategory) {
// //           const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
// //           alertMessage += ` - ${ageCategory?.title} - Search team has been dispatched!`;
// //         } else {
// //           alertMessage += ' - Help is on the way!';
// //         }
        
// //         alert(alertMessage);
// //       }, 3000);
// //     }
// //   };

// //   const handleCancelEmergency = () => {
// //     setShowEmergencyModal(false);
// //     setSelectedEmergency(null);
// //     setIsConfirming(false);
// //     setShowSuccess(false);
// //     setShowAgeSelection(false);
// //     setSelectedAgeCategory(null);
// //     setCurrentStep('initial');
// //   };

// //   const handleProceedToFeatures = () => {
// //     setCurrentStep('initial');
// //     setIsConfirming(false);
// //   };

// //   const getSuccessMessage = () => {
// //     if (selectedEmergency === 'missing' && selectedAgeCategory) {
// //       const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
// //       return `${ageCategory?.title} Search Team Dispatched`;
// //     }
// //     return `${emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency Team Dispatched`;
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
// //       {/* Emergency Button */}
// //       <button
// //         onClick={handleEmergencyClick}
// //         className="fixed top-10 right-10 z-50 group animate-pulse hover:animate-none"
// //       >
// //         <div className="relative">
// //           <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
// //           <div className="relative bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
// //             <AlertTriangle size={48} className="text-white" />
// //           </div>
// //         </div>
// //         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
// //           EMERGENCY
// //         </div>
// //       </button>

// //       {/* Emergency Modal */}
// //       {showEmergencyModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-3xl shadow-2xl w-full h-[85vh] max-w-6xl overflow-hidden flex flex-col">
            
// //             {/* Success Screen */}
// //             {currentStep === 'success' && (
// //               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
// //                 <div className="flex justify-center mb-8">
// //                   <CheckCircle size={100} className="text-green-500 animate-bounce" />
// //                 </div>
// //                 <h2 className="text-5xl font-bold text-green-600 mb-6">Emergency Request Sent!</h2>
// //                 <p className="text-2xl text-gray-700 mb-8">
// //                   Help is on the way. Emergency services have been notified.
// //                 </p>
// //                 <div className="animate-pulse bg-green-100 p-6 rounded-lg mb-8 border-4 border-green-300">
// //                   <p className="text-green-800 font-semibold text-xl">
// //                     {getSuccessMessage()}
// //                   </p>
// //                 </div>
// //                 <button
// //                   onClick={handleCancelEmergency}
// //                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full transition-colors text-xl"
// //                 >
// //                   Close
// //                 </button>
// //               </div>
// //             )}

// //             {/* Initial Confirmation Screen */}
// //             {currentStep === 'confirmation' && !selectedEmergency && (
// //               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
// //                 <div className="bg-red-50 border-4 border-red-400 rounded-3xl p-8 max-w-2xl w-full">
// //                   <AlertTriangle size={80} className="text-red-600 mx-auto mb-6" />
// //                   <h3 className="text-4xl font-bold text-red-800 mb-4">
// //                     EMERGENCY CONFIRMATION
// //                   </h3>
// //                   <div className="bg-white rounded-xl p-6 mb-6 border-2 border-red-200">
// //                     <p className="text-2xl text-gray-800 font-semibold mb-4">
// //                       Are you sure you want to proceed with emergency assistance?
// //                     </p>
// //                     <p className="text-lg text-gray-600">
// //                       This will connect you with emergency services immediately.
// //                     </p>
// //                   </div>
// //                   <div className="flex gap-4 justify-center">
// //                     <button
// //                       onClick={handleCancelEmergency}
// //                       className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
// //                     >
// //                       Cancel
// //                     </button>
// //                     <button
// //                       onClick={handleProceedToFeatures}
// //                       className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
// //                     >
// //                       PROCEED TO EMERGENCY TYPES
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Age Selection Screen */}
// //             {currentStep === 'ageSelection' && (
// //               <>
// //                 <div className="bg-gradient-to-r from-green-600 to-teal-800 p-6 text-white flex-shrink-0">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center">
// //                       <Search size={40} className="mr-4" />
// //                       <div>
// //                         <h2 className="text-3xl font-bold">MISSING PERSON - AGE CATEGORY</h2>
// //                         <p className="text-green-100 text-lg mt-1">Select the age category of the missing person</p>
// //                       </div>
// //                     </div>
// //                     <button
// //                       onClick={handleCancelEmergency}
// //                       className="text-white hover:text-green-200 text-2xl font-bold bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
// //                     >
// //                       ×
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="flex-1 p-6 overflow-hidden">
// //                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
// //                     {ageCategories.map((age) => (
// //                       <button
// //                         key={age.id}
// //                         onClick={() => handleAgeCategorySelect(age.id)}
// //                         className={`bg-gradient-to-br ${age.color} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
// //                           selectedAgeCategory === age.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
// //                         } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center`}
// //                       >
// //                         <span className="text-4xl mb-3">{age.emoji}</span>
// //                         <age.icon size={36} className="text-white opacity-90 mb-3" />
// //                         <h3 className="font-bold text-xl mb-2">{age.title}</h3>
// //                         <p className="text-white opacity-90 text-sm">{age.subtitle}</p>
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div className="bg-gray-100 p-4 flex justify-between items-center flex-shrink-0">
// //                   <button
// //                     onClick={() => setCurrentStep('initial')}
// //                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
// //                   >
// //                     Back to Emergency Types
// //                   </button>
// //                   <p className="text-gray-600 text-sm">
// //                     Select the appropriate age category to help us dispatch the right search team
// //                   </p>
// //                 </div>
// //               </>
// //             )}

// //             {/* Emergency Types Selection Screen */}
// //             {currentStep === 'initial' && selectedEmergency === null && (
// //               <>
// //                 {/* Header - Fixed height */}
// //                 <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white flex-shrink-0">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center">
// //                       <AlertTriangle size={40} className="mr-4" />
// //                       <div>
// //                         <h2 className="text-3xl font-bold">SELECT EMERGENCY TYPE</h2>
// //                         <p className="text-red-100 text-lg mt-1">Choose the type of emergency you're facing</p>
// //                       </div>
// //                     </div>
// //                     <button
// //                       onClick={handleCancelEmergency}
// //                       className="text-white hover:text-red-200 text-2xl font-bold bg-red-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
// //                     >
// //                       ×
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Emergency Types Grid */}
// //                 <div className="flex-1 p-6 overflow-hidden">
// //                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
// //                     {emergencyTypes.map((type) => (
// //                       <button
// //                         key={type.id}
// //                         onClick={() => handleEmergencyTypeSelect(type.id)}
// //                         className={`${type.gradient} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
// //                           selectedEmergency === type.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
// //                         } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group`}
// //                       >
// //                         {/* Animated background effect */}
// //                         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
// //                         {/* Icon and emoji container */}
// //                         <div className="relative z-10">
// //                           <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">
// //                             {type.emoji}
// //                           </span>
// //                           <type.icon size={36} className="text-white opacity-90 mb-3 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
// //                         </div>
                        
// //                         {/* Text content */}
// //                         <div className="relative z-10">
// //                           <h3 className="font-bold text-xl mb-2 transform group-hover:scale-105 transition-transform duration-300">
// //                             {type.title}
// //                           </h3>
// //                           <p className="text-white opacity-90 text-sm transform group-hover:scale-105 transition-transform duration-300">
// //                             {type.subtitle}
// //                           </p>
// //                         </div>

// //                         {/* Hover effect border */}
// //                         <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300"></div>
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Footer Instructions */}
// //                 <div className="bg-gray-100 p-4 text-center border-t border-gray-300 flex-shrink-0">
// //                   <p className="text-gray-600">
// //                     <strong>IMPORTANT:</strong> Select the appropriate emergency type for immediate assistance
// //                   </p>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {/* Temple Image Placeholder */}
// //       <div className="relative mb-8">
// //         <div className="w-80 h-80 bg-gradient-to-b from-yellow-400 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
// //           <div className="w-64 h-64 bg-gradient-to-t from-red-900 to-yellow-500 rounded-full flex items-center justify-center">
// //             <Bell size={120} className="text-white animate-pulse" />
// //           </div>
// //         </div>
// //         <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
// //           <Sparkles size={32} className="text-red-800" />
// //         </div>
// //       </div>

// //       {/* Welcome Message */}
// //       <div className="text-center mb-12">
// //         <h1 className="text-6xl font-bold text-red-900 mb-4 tracking-wide">
// //           {getMessage('welcome')}
// //         </h1>
// //         <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-6"></div>
// //         <p className="text-2xl text-red-700 font-medium">
// //           {currentTime.toLocaleTimeString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
// //             hour: '2-digit',
// //             minute: '2-digit',
// //             second: '2-digit',
// //             hour12: true
// //           })}
// //         </p>
// //         <p className="text-xl text-gray-700 mt-2">
// //           {currentTime.toLocaleDateString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
// //             weekday: 'long',
// //             year: 'numeric',
// //             month: 'long',
// //             day: 'numeric'
// //           })}
// //         </p>
// //       </div>

// //       {/* Start Button */}
// //       <button
// //         onClick={() => onNavigate('language')}
// //         className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-400 hover:to-red-500 text-white text-3xl font-bold py-6 px-16 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300"
// //       >
// //         <div className="flex items-center space-x-4">
// //           <Sparkles size={36} className="animate-pulse" />
// //           <span>Start Here / यहाँ शुरू करें</span>
// //           <Sparkles size={36} className="animate-pulse" />
// //         </div>
// //       </button>

// //       {/* Language Indicator */}
// //       <div className="absolute bottom-8 left-8">
// //         <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg">
// //           <p className="text-sm text-gray-600 mb-2">Current Language</p>
// //           <div className="flex items-center space-x-2">
// //             <span className="text-2xl">{language.flag}</span>
// //             <span className="text-lg font-medium text-gray-800">{language.name}</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Decorative Elements */}
// //       <div className="absolute top-8 left-8 w-24 h-24 border-8 border-yellow-400 rounded-full opacity-20 animate-spin-slow"></div>
// //       <div className="absolute top-8 right-8 w-32 h-32 border-4 border-red-800 rounded-full opacity-20 animate-pulse"></div>
// //       <div className="absolute bottom-8 right-8 w-20 h-20 border-6 border-yellow-600 rounded-full opacity-20 animate-bounce"></div>
// //     </div>
// //   );
// // };

// // export default HomeScreen;




// import React, { useEffect, useState } from 'react';
// import { Sparkles, Bell, AlertTriangle, CheckCircle, Heart, Shield, Flame, Users, Car, Search, User, Baby } from 'lucide-react';
// import type { Screen, Language } from '../App';

// interface HomeScreenProps {
//   onNavigate: (screen: Screen) => void;
//   language: Language;
// }

// const emergencyTypes = [
//   {
//     id: 'medical',
//     emoji: '🏥',
//     title: 'Medical',
//     subtitle: 'Ambulance',
//     color: 'from-red-500 to-pink-600',
//     icon: Heart,
//     gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
//     borderColor: 'border-red-400'
//   },
//   {
//     id: 'police',
//     emoji: '🚔',
//     title: 'Police',
//     subtitle: 'Security',
//     color: 'from-blue-500 to-blue-700',
//     icon: Shield,
//     gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
//     borderColor: 'border-blue-400'
//   },
//   {
//     id: 'fire',
//     emoji: '🔥',
//     title: 'Fire',
//     subtitle: 'Rescue',
//     color: 'from-orange-500 to-red-600',
//     icon: Flame,
//     gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
//     borderColor: 'border-orange-400'
//   },
//   {
//     id: 'harassment',
//     emoji: '🚨',
//     title: 'Harassment',
//     subtitle: 'Help',
//     color: 'from-purple-500 to-red-600',
//     icon: Users,
//     gradient: 'bg-gradient-to-br from-purple-500 to-red-600',
//     borderColor: 'border-purple-400'
//   },
//   {
//     id: 'accident',
//     emoji: '🚑',
//     title: 'Accident',
//     subtitle: 'Rescue',
//     color: 'from-yellow-500 to-orange-600',
//     icon: Car,
//     gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600',
//     borderColor: 'border-yellow-400'
//   },
//   {
//     id: 'missing',
//     emoji: '🔍',
//     title: 'Missing Person',
//     subtitle: 'Search & Rescue',
//     color: 'from-green-500 to-teal-600',
//     icon: Search,
//     gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
//     borderColor: 'border-green-400'
//   }
// ];

// const ageCategories = [
//   {
//     id: 'child',
//     title: 'Child',
//     subtitle: 'Below 12 years',
//     icon: Baby,
//     color: 'from-blue-400 to-blue-600',
//     emoji: '👶'
//   },
//   {
//     id: 'teen',
//     title: 'Teenager',
//     subtitle: '13-19 years',
//     icon: User,
//     color: 'from-green-400 to-green-600',
//     emoji: '👦'
//   },
//   {
//     id: 'adult',
//     title: 'Adult',
//     subtitle: '20-59 years',
//     icon: User,
//     color: 'from-purple-400 to-purple-600',
//     emoji: '👨'
//   },
//   {
//     id: 'senior',
//     title: 'Senior Citizen',
//     subtitle: '60+ years',
//     icon: User,
//     color: 'from-orange-400 to-orange-600',
//     emoji: '👴'
//   }
// ];

// const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, language }) => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [showEmergencyModal, setShowEmergencyModal] = useState(false);
//   const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
//   const [isConfirming, setIsConfirming] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showAgeSelection, setShowAgeSelection] = useState(false);
//   const [selectedAgeCategory, setSelectedAgeCategory] = useState<string | null>(null);
//   const [currentStep, setCurrentStep] = useState<'initial' | 'confirmation' | 'ageSelection' | 'success' | 'forwarding'>('initial');
//   const [forwardingProgress, setForwardingProgress] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const welcomeMessages = {
//     en: 'Welcome to SHREE',
//     hi: 'श्री में आपका स्वागत है',
//     ta: 'ஸ்ரீக்கு வரவேற்கிறோம்',
//     te: 'శ్రీకి స్వాగతం'
//   };

//   const getMessage = (key: string) => {
//     return (welcomeMessages as any)[language.code] || welcomeMessages.en;
//   };

//   const handleEmergencyClick = () => {
//     setShowEmergencyModal(true);
//     setCurrentStep('confirmation');
//     setSelectedEmergency(null);
//     setIsConfirming(true);
//     setShowSuccess(false);
//     setShowAgeSelection(false);
//     setSelectedAgeCategory(null);
//   };

//   const handleEmergencyTypeSelect = (typeId: string) => {
//     setSelectedEmergency(typeId);
//     if (typeId === 'missing') {
//       setCurrentStep('ageSelection');
//       setShowAgeSelection(true);
//     } else {
//       // Show forwarding to administration for other emergency types
//       handleForwardToAdministration();
//     }
//   };

//   const handleAgeCategorySelect = (ageId: string) => {
//     setSelectedAgeCategory(ageId);
//     // Show forwarding to administration for missing person with age
//     handleForwardToAdministration();
//   };

//   const handleForwardToAdministration = () => {
//     setCurrentStep('forwarding');
//     setForwardingProgress(0);
    
//     // Simulate progress updates
//     const progressInterval = setInterval(() => {
//       setForwardingProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           handleConfirmEmergency();
//           return 100;
//         }
//         return prev + 20;
//       });
//     }, 300);
//   };

//   const handleConfirmEmergency = () => {
//     if (selectedEmergency) {
//       setIsConfirming(false);
//       setCurrentStep('success');
//       setShowSuccess(true);
      
//       // Simulate sending request
//       setTimeout(() => {
//         setShowEmergencyModal(false);
//         setSelectedEmergency(null);
//         setShowSuccess(false);
//         setShowAgeSelection(false);
//         setSelectedAgeCategory(null);
//         setCurrentStep('initial');
        
//         let alertMessage = `EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title}`;
//         if (selectedEmergency === 'missing' && selectedAgeCategory) {
//           const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
//           alertMessage += ` - ${ageCategory?.title} - Search team has been dispatched!`;
//         } else {
//           alertMessage += ' - Help is on the way!';
//         }
        
//         alert(alertMessage);
//       }, 3000);
//     }
//   };

//   const handleCancelEmergency = () => {
//     setShowEmergencyModal(false);
//     setSelectedEmergency(null);
//     setIsConfirming(false);
//     setShowSuccess(false);
//     setShowAgeSelection(false);
//     setSelectedAgeCategory(null);
//     setCurrentStep('initial');
//     setForwardingProgress(0);
//   };

//   const handleProceedToFeatures = () => {
//     setCurrentStep('initial');
//     setIsConfirming(false);
//   };

//   const getSuccessMessage = () => {
//     if (selectedEmergency === 'missing' && selectedAgeCategory) {
//       const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
//       return `${ageCategory?.title} Search Team Dispatched`;
//     }
//     return `${emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency Team Dispatched`;
//   };

//   const getEmergencyDetails = () => {
//     if (!selectedEmergency) return null;
    
//     const emergency = emergencyTypes.find(t => t.id === selectedEmergency);
//     if (!emergency) return null;

//     const details = {
//       medical: {
//         title: "Medical Emergency Request",
//         description: "Ambulance and medical team dispatched",
//         actions: ["Alerting nearest hospital", "Mobilizing ambulance", "Notifying medical staff"]
//       },
//       police: {
//         title: "Police Assistance Request",
//         description: "Police security team notified",
//         actions: ["Contacting local police station", "Dispatching patrol unit", "Setting up security perimeter"]
//       },
//       fire: {
//         title: "Fire Emergency Request",
//         description: "Fire rescue team mobilized",
//         actions: ["Alerting fire department", "Dispatching fire engines", "Setting up emergency response"]
//       },
//       harassment: {
//         title: "Harassment Emergency Request",
//         description: "Immediate assistance dispatched",
//         actions: ["Notifying security team", "Alerting women's helpline", "Dispatching support unit"]
//       },
//       accident: {
//         title: "Accident Rescue Request",
//         description: "Rescue team and ambulance dispatched",
//         actions: ["Mobilizing rescue team", "Alerting trauma center", "Setting up emergency medical response"]
//       },
//       missing: {
//         title: "Missing Person Search Request",
//         description: selectedAgeCategory 
//           ? `${ageCategories.find(a => a.id === selectedAgeCategory)?.title} search team dispatched`
//           : "Search and rescue team mobilized",
//         actions: ["Activating search team", "Notifying local authorities", "Setting up search perimeter"]
//       }
//     };

//     return details[selectedEmergency as keyof typeof details];
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
//       {/* Emergency Button */}
//       <button
//         onClick={handleEmergencyClick}
//         className="fixed top-10 right-10 z-50 group animate-pulse hover:animate-none"
//       >
//         <div className="relative">
//           <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
//           <div className="relative bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
//             <AlertTriangle size={48} className="text-white" />
//           </div>
//         </div>
//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
//           EMERGENCY
//         </div>
//       </button>

//       {/* Emergency Modal */}
//       {showEmergencyModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl shadow-2xl w-full h-[85vh] max-w-6xl overflow-hidden flex flex-col">
            
//             {/* Success Screen */}
//             {currentStep === 'success' && (
//               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
//                 <div className="flex justify-center mb-8">
//                   <CheckCircle size={100} className="text-green-500 animate-bounce" />
//                 </div>
//                 <h2 className="text-5xl font-bold text-green-600 mb-6">Emergency Request Sent!</h2>
//                 <p className="text-2xl text-gray-700 mb-8">
//                   Help is on the way. Emergency services have been notified.
//                 </p>
//                 <div className="animate-pulse bg-green-100 p-6 rounded-lg mb-8 border-4 border-green-300">
//                   <p className="text-green-800 font-semibold text-xl">
//                     {getSuccessMessage()}
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleCancelEmergency}
//                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full transition-colors text-xl"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}

//             {/* Forwarding to Administration Screen */}
//             {currentStep === 'forwarding' && (
//               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
//                 <div className="max-w-4xl w-full">
//                   <div className="bg-blue-50 border-4 border-blue-400 rounded-3xl p-8 mb-8">
//                     <h3 className="text-4xl font-bold text-blue-800 mb-6">
//                       FORWARDING TO ADMINISTRATION
//                     </h3>
                    
//                     {getEmergencyDetails() && (
//                       <div className="bg-white rounded-xl p-6 mb-6 border-2 border-blue-200">
//                         <h4 className="text-2xl font-bold text-blue-700 mb-4">
//                           {getEmergencyDetails()?.title}
//                         </h4>
//                         <p className="text-xl text-gray-700 mb-4">
//                           {getEmergencyDetails()?.description}
//                         </p>
                        
//                         <div className="space-y-3 text-left">
//                           {getEmergencyDetails()?.actions.map((action, index) => (
//                             <div key={index} className="flex items-center text-lg">
//                               <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
//                               <span className="text-gray-700">{action}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Progress Bar */}
//                     <div className="mb-6">
//                       <div className="flex justify-between text-sm text-blue-700 mb-2">
//                         <span>Forwarding to Administration...</span>
//                         <span>{forwardingProgress}%</span>
//                       </div>
//                       <div className="w-full bg-blue-200 rounded-full h-4">
//                         <div 
//                           className="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-out"
//                           style={{ width: `${forwardingProgress}%` }}
//                         ></div>
//                       </div>
//                     </div>

//                     <p className="text-lg text-blue-700 font-semibold">
//                       Your emergency request is being processed and forwarded to the administration team...
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Initial Confirmation Screen */}
//             {currentStep === 'confirmation' && !selectedEmergency && (
//               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
//                 <div className="bg-red-50 border-4 border-red-400 rounded-3xl p-8 max-w-2xl w-full">
//                   <AlertTriangle size={80} className="text-red-600 mx-auto mb-6" />
//                   <h3 className="text-4xl font-bold text-red-800 mb-4">
//                     EMERGENCY CONFIRMATION
//                   </h3>
//                   <div className="bg-white rounded-xl p-6 mb-6 border-2 border-red-200">
//                     <p className="text-2xl text-gray-800 font-semibold mb-4">
//                       Are you sure you want to proceed with emergency assistance?
//                     </p>
//                     <p className="text-lg text-gray-600">
//                       This will connect you with emergency services immediately.
//                     </p>
//                   </div>
//                   <div className="flex gap-4 justify-center">
//                     <button
//                       onClick={handleCancelEmergency}
//                       className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleProceedToFeatures}
//                       className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
//                     >
//                       PROCEED TO EMERGENCY TYPES
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Age Selection Screen */}
//             {currentStep === 'ageSelection' && (
//               <>
//                 <div className="bg-gradient-to-r from-green-600 to-teal-800 p-6 text-white flex-shrink-0">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <Search size={40} className="mr-4" />
//                       <div>
//                         <h2 className="text-3xl font-bold">MISSING PERSON - AGE CATEGORY</h2>
//                         <p className="text-green-100 text-lg mt-1">Select the age category of the missing person</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={handleCancelEmergency}
//                       className="text-white hover:text-green-200 text-2xl font-bold bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex-1 p-6 overflow-hidden">
//                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
//                     {ageCategories.map((age) => (
//                       <button
//                         key={age.id}
//                         onClick={() => handleAgeCategorySelect(age.id)}
//                         className={`bg-gradient-to-br ${age.color} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
//                           selectedAgeCategory === age.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
//                         } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center`}
//                       >
//                         <span className="text-4xl mb-3">{age.emoji}</span>
//                         <age.icon size={36} className="text-white opacity-90 mb-3" />
//                         <h3 className="font-bold text-xl mb-2">{age.title}</h3>
//                         <p className="text-white opacity-90 text-sm">{age.subtitle}</p>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="bg-gray-100 p-4 flex justify-between items-center flex-shrink-0">
//                   <button
//                     onClick={() => setCurrentStep('initial')}
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
//                   >
//                     Back to Emergency Types
//                   </button>
//                   <p className="text-gray-600 text-sm">
//                     Select the appropriate age category to help us dispatch the right search team
//                   </p>
//                 </div>
//               </>
//             )}

//             {/* Emergency Types Selection Screen */}
//             {currentStep === 'initial' && selectedEmergency === null && (
//               <>
//                 {/* Header - Fixed height */}
//                 <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white flex-shrink-0">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <AlertTriangle size={40} className="mr-4" />
//                       <div>
//                         <h2 className="text-3xl font-bold">SELECT EMERGENCY TYPE</h2>
//                         <p className="text-red-100 text-lg mt-1">Choose the type of emergency you're facing</p>
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
//                 <div className="flex-1 p-6 overflow-hidden">
//                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
//                     {emergencyTypes.map((type) => (
//                       <button
//                         key={type.id}
//                         onClick={() => handleEmergencyTypeSelect(type.id)}
//                         className={`${type.gradient} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
//                           selectedEmergency === type.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
//                         } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group`}
//                       >
//                         {/* Animated background effect */}
//                         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
//                         {/* Icon and emoji container */}
//                         <div className="relative z-10">
//                           <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">
//                             {type.emoji}
//                           </span>
//                           <type.icon size={36} className="text-white opacity-90 mb-3 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
//                         </div>
                        
//                         {/* Text content */}
//                         <div className="relative z-10">
//                           <h3 className="font-bold text-xl mb-2 transform group-hover:scale-105 transition-transform duration-300">
//                             {type.title}
//                           </h3>
//                           <p className="text-white opacity-90 text-sm transform group-hover:scale-105 transition-transform duration-300">
//                             {type.subtitle}
//                           </p>
//                         </div>

//                         {/* Hover effect border */}
//                         <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300"></div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer Instructions */}
//                 <div className="bg-gray-100 p-4 text-center border-t border-gray-300 flex-shrink-0">
//                   <p className="text-gray-600">
//                     <strong>IMPORTANT:</strong> Select the appropriate emergency type for immediate assistance
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Temple Image Placeholder */}
//       <div className="relative mb-8">
//         <div className="w-80 h-80 bg-gradient-to-b from-yellow-400 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
//           <div className="w-64 h-64 bg-gradient-to-t from-red-900 to-yellow-500 rounded-full flex items-center justify-center">
//             <Bell size={120} className="text-white animate-pulse" />
//           </div>
//         </div>
//         <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
//           <Sparkles size={32} className="text-red-800" />
//         </div>
//       </div>

//       {/* Welcome Message */}
//       <div className="text-center mb-12">
//         <h1 className="text-6xl font-bold text-red-900 mb-4 tracking-wide">
//           {getMessage('welcome')}
//         </h1>
//         <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-6"></div>
//         <p className="text-2xl text-red-700 font-medium">
//           {currentTime.toLocaleTimeString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit',
//             hour12: true
//           })}
//         </p>
//         <p className="text-xl text-gray-700 mt-2">
//           {currentTime.toLocaleDateString(language.code === 'hi' ? 'hi-IN' : 'en-IN', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//           })}
//         </p>
//       </div>

//       {/* Start Button */}
//       <button
//         onClick={() => onNavigate('language')}
//         className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-400 hover:to-red-500 text-white text-3xl font-bold py-6 px-16 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300"
//       >
//         <div className="flex items-center space-x-4">
//           <Sparkles size={36} className="animate-pulse" />
//           <span>Start Here / यहाँ शुरू करें</span>
//           <Sparkles size={36} className="animate-pulse" />
//         </div>
//       </button>

//       {/* Language Indicator */}
//       <div className="absolute bottom-8 left-8">
//         <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg">
//           <p className="text-sm text-gray-600 mb-2">Current Language</p>
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl">{language.flag}</span>
//             <span className="text-lg font-medium text-gray-800">{language.name}</span>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-8 left-8 w-24 h-24 border-8 border-yellow-400 rounded-full opacity-20 animate-spin-slow"></div>
//       <div className="absolute top-8 right-8 w-32 h-32 border-4 border-red-800 rounded-full opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-8 right-8 w-20 h-20 border-6 border-yellow-600 rounded-full opacity-20 animate-bounce"></div>
//     </div>
//   );
// };

// export default HomeScreen;






import React, { useEffect, useState } from 'react';
import { Sparkles, Bell, AlertTriangle, CheckCircle, Heart, Shield, Flame, Users, Car, Search, User, Baby } from 'lucide-react';
import type { Screen, Language } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  language: Language;
}

const emergencyTypes = [
  {
    id: 'medical',
    emoji: '🏥',
    title: 'Medical',
    subtitle: 'Ambulance',
    color: 'from-red-500 to-pink-600',
    icon: Heart,
    gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
    borderColor: 'border-red-400'
  },
  {
    id: 'police',
    emoji: '🚔',
    title: 'Police',
    subtitle: 'Security',
    color: 'from-blue-500 to-blue-700',
    icon: Shield,
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    borderColor: 'border-blue-400'
  },
  {
    id: 'fire',
    emoji: '🔥',
    title: 'Fire',
    subtitle: 'Rescue',
    color: 'from-orange-500 to-red-600',
    icon: Flame,
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    borderColor: 'border-orange-400'
  },
  {
    id: 'harassment',
    emoji: '🚨',
    title: 'Harassment',
    subtitle: 'Help',
    color: 'from-purple-500 to-red-600',
    icon: Users,
    gradient: 'bg-gradient-to-br from-purple-500 to-red-600',
    borderColor: 'border-purple-400'
  },
  {
    id: 'accident',
    emoji: '🚑',
    title: 'Accident',
    subtitle: 'Rescue',
    color: 'from-yellow-500 to-orange-600',
    icon: Car,
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    borderColor: 'border-yellow-400'
  },
  {
    id: 'missing',
    emoji: '🔍',
    title: 'Missing Person',
    subtitle: 'Search & Rescue',
    color: 'from-green-500 to-teal-600',
    icon: Search,
    gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
    borderColor: 'border-green-400'
  }
];

const ageCategories = [
  {
    id: 'child',
    title: 'Child',
    subtitle: 'Below 12 years',
    icon: Baby,
    color: 'from-blue-400 to-blue-600',
    emoji: '👶'
  },
  {
    id: 'teen',
    title: 'Teenager',
    subtitle: '13-19 years',
    icon: User,
    color: 'from-green-400 to-green-600',
    emoji: '👦'
  },
  {
    id: 'adult',
    title: 'Adult',
    subtitle: '20-59 years',
    icon: User,
    color: 'from-purple-400 to-purple-600',
    emoji: '👨'
  },
  {
    id: 'senior',
    title: 'Senior Citizen',
    subtitle: '60+ years',
    icon: User,
    color: 'from-orange-400 to-orange-600',
    emoji: '👴'
  }
];

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, language }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAgeSelection, setShowAgeSelection] = useState(false);
  const [selectedAgeCategory, setSelectedAgeCategory] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'initial' | 'confirmation' | 'ageSelection' | 'success' | 'forwarding'>('initial');
  const [forwardingProgress, setForwardingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const welcomeMessages = {
    en: 'Welcome to SHREE',
    hi: 'श्री में आपका स्वागत है',
    ta: 'ஸ்ரீக்கு வரவேற்கிறோம்',
    te: 'శ్రీకి స్వాగతం'
  };

  const getMessage = (key: string) => {
    return (welcomeMessages as any)[language.code] || welcomeMessages.en;
  };

  const handleEmergencyClick = () => {
    setShowEmergencyModal(true);
    setCurrentStep('confirmation');
    setSelectedEmergency(null);
    setIsConfirming(true);
    setShowSuccess(false);
    setShowAgeSelection(false);
    setSelectedAgeCategory(null);
    setLoadingComplete(false);
  };

  const handleEmergencyTypeSelect = (typeId: string) => {
    setSelectedEmergency(typeId);
    if (typeId === 'missing') {
      setCurrentStep('ageSelection');
      setShowAgeSelection(true);
    } else {
      // Show forwarding to administration for other emergency types
      handleForwardToAdministration();
    }
  };

  const handleAgeCategorySelect = (ageId: string) => {
    setSelectedAgeCategory(ageId);
    // Show forwarding to administration for missing person with age
    handleForwardToAdministration();
  };

  const handleForwardToAdministration = () => {
    setCurrentStep('forwarding');
    setForwardingProgress(0);
    setLoadingComplete(false);
    
    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setForwardingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setLoadingComplete(true);
          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  const handleConfirmEmergency = () => {
    if (selectedEmergency) {
      setIsConfirming(false);
      setCurrentStep('success');
      setShowSuccess(true);
      
      // Simulate sending request
      setTimeout(() => {
        let alertMessage = `EMERGENCY ALERT: ${emergencyTypes.find(t => t.id === selectedEmergency)?.title}`;
        if (selectedEmergency === 'missing' && selectedAgeCategory) {
          const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
          alertMessage += ` - ${ageCategory?.title} - Search team has been dispatched!`;
        } else {
          alertMessage += ' - Help is on the way!';
        }
        
        alert(alertMessage);
      }, 1000);
    }
  };

  const handleReturnToHome = () => {
    setShowEmergencyModal(false);
    setSelectedEmergency(null);
    setShowSuccess(false);
    setShowAgeSelection(false);
    setSelectedAgeCategory(null);
    setCurrentStep('initial');
    setForwardingProgress(0);
    setLoadingComplete(false);
  };

  const handleCancelEmergency = () => {
    setShowEmergencyModal(false);
    setSelectedEmergency(null);
    setIsConfirming(false);
    setShowSuccess(false);
    setShowAgeSelection(false);
    setSelectedAgeCategory(null);
    setCurrentStep('initial');
    setForwardingProgress(0);
    setLoadingComplete(false);
  };

  const handleProceedToFeatures = () => {
    setCurrentStep('initial');
    setIsConfirming(false);
  };

  const getSuccessMessage = () => {
    if (selectedEmergency === 'missing' && selectedAgeCategory) {
      const ageCategory = ageCategories.find(a => a.id === selectedAgeCategory);
      return `${ageCategory?.title} Search Team Dispatched`;
    }
    return `${emergencyTypes.find(t => t.id === selectedEmergency)?.title} Emergency Team Dispatched`;
  };

  const getEmergencyDetails = () => {
    if (!selectedEmergency) return null;
    
    const emergency = emergencyTypes.find(t => t.id === selectedEmergency);
    if (!emergency) return null;

    const details = {
      medical: {
        title: "Medical Emergency Request",
        description: "Ambulance and medical team dispatched",
        actions: ["Alerting nearest hospital", "Mobilizing ambulance", "Notifying medical staff"]
      },
      police: {
        title: "Police Assistance Request",
        description: "Police security team notified",
        actions: ["Contacting local police station", "Dispatching patrol unit", "Setting up security perimeter"]
      },
      fire: {
        title: "Fire Emergency Request",
        description: "Fire rescue team mobilized",
        actions: ["Alerting fire department", "Dispatching fire engines", "Setting up emergency response"]
      },
      harassment: {
        title: "Harassment Emergency Request",
        description: "Immediate assistance dispatched",
        actions: ["Notifying security team", "Alerting women's helpline", "Dispatching support unit"]
      },
      accident: {
        title: "Accident Rescue Request",
        description: "Rescue team and ambulance dispatched",
        actions: ["Mobilizing rescue team", "Alerting trauma center", "Setting up emergency medical response"]
      },
      missing: {
        title: "Missing Person Search Request",
        description: selectedAgeCategory 
          ? `${ageCategories.find(a => a.id === selectedAgeCategory)?.title} search team dispatched`
          : "Search and rescue team mobilized",
        actions: ["Activating search team", "Notifying local authorities", "Setting up search perimeter"]
      }
    };

    return details[selectedEmergency as keyof typeof details];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      {/* Emergency Button */}
      <button
        onClick={handleEmergencyClick}
        className="fixed top-10 right-10 z-50 group animate-pulse hover:animate-none"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
          <div className="relative bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white">
            <AlertTriangle size={48} className="text-white" />
          </div>
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
          EMERGENCY
        </div>
      </button>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full h-[85vh] max-w-6xl overflow-hidden flex flex-col">
            
            {/* Success Screen */}
            {currentStep === 'success' && (
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
                    {getSuccessMessage()}
                  </p>
                </div>
                <button
                  onClick={handleReturnToHome}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full transform hover:scale-105 transition-all duration-300 text-xl shadow-lg"
                >
                  Return to Home Screen
                </button>
              </div>
            )}

            {/* Forwarding to Administration Screen */}
            {currentStep === 'forwarding' && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="max-w-4xl w-full">
                  <div className="bg-blue-50 border-4 border-blue-400 rounded-3xl p-8 mb-8">
                    <h3 className="text-4xl font-bold text-blue-800 mb-6">
                      FORWARDING TO ADMINISTRATION
                    </h3>
                    
                    {getEmergencyDetails() && (
                      <div className="bg-white rounded-xl p-6 mb-6 border-2 border-blue-200">
                        <h4 className="text-2xl font-bold text-blue-700 mb-4">
                          {getEmergencyDetails()?.title}
                        </h4>
                        <p className="text-xl text-gray-700 mb-4">
                          {getEmergencyDetails()?.description}
                        </p>
                        
                        <div className="space-y-3 text-left">
                          {getEmergencyDetails()?.actions.map((action, index) => (
                            <div key={index} className="flex items-center text-lg">
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-gray-700">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-blue-700 mb-2">
                        <span>Forwarding to Administration...</span>
                        <span>{forwardingProgress}%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-4">
                        <div 
                          className="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${forwardingProgress}%` }}
                        ></div>
                      </div>
                    </div>

                    {loadingComplete && (
                      <div className="mt-8 p-4 bg-green-50 border-2 border-green-400 rounded-xl animate-pulse">
                        <p className="text-green-700 font-semibold text-lg mb-4">
                          ✓ Forwarding Complete! Emergency request has been successfully sent to administration.
                        </p>
                        <button
                          onClick={handleConfirmEmergency}
                          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg text-lg"
                        >
                          Confirm & Continue
                        </button>
                      </div>
                    )}

                    {!loadingComplete && (
                      <p className="text-lg text-blue-700 font-semibold">
                        Your emergency request is being processed and forwarded to the administration team...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Initial Confirmation Screen */}
            {currentStep === 'confirmation' && !selectedEmergency && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-red-50 border-4 border-red-400 rounded-3xl p-8 max-w-2xl w-full">
                  <AlertTriangle size={80} className="text-red-600 mx-auto mb-6" />
                  <h3 className="text-4xl font-bold text-red-800 mb-4">
                    EMERGENCY CONFIRMATION
                  </h3>
                  <div className="bg-white rounded-xl p-6 mb-6 border-2 border-red-200">
                    <p className="text-2xl text-gray-800 font-semibold mb-4">
                      Are you sure you want to proceed with emergency assistance?
                    </p>
                    <p className="text-lg text-gray-600">
                      This will connect you with emergency services immediately.
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={handleCancelEmergency}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleProceedToFeatures}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
                    >
                      PROCEED TO EMERGENCY TYPES
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Age Selection Screen */}
            {currentStep === 'ageSelection' && (
              <>
                <div className="bg-gradient-to-r from-green-600 to-teal-800 p-6 text-white flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Search size={40} className="mr-4" />
                      <div>
                        <h2 className="text-3xl font-bold">MISSING PERSON - AGE CATEGORY</h2>
                        <p className="text-green-100 text-lg mt-1">Select the age category of the missing person</p>
                      </div>
                    </div>
                    <button
                      onClick={handleCancelEmergency}
                      className="text-white hover:text-green-200 text-2xl font-bold bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <div className="flex-1 p-6 overflow-hidden">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                    {ageCategories.map((age) => (
                      <button
                        key={age.id}
                        onClick={() => handleAgeCategorySelect(age.id)}
                        className={`bg-gradient-to-br ${age.color} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
                          selectedAgeCategory === age.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
                        } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center`}
                      >
                        <span className="text-4xl mb-3">{age.emoji}</span>
                        <age.icon size={36} className="text-white opacity-90 mb-3" />
                        <h3 className="font-bold text-xl mb-2">{age.title}</h3>
                        <p className="text-white opacity-90 text-sm">{age.subtitle}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 p-4 flex justify-between items-center flex-shrink-0">
                  <button
                    onClick={() => setCurrentStep('initial')}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    Back to Emergency Types
                  </button>
                  <p className="text-gray-600 text-sm">
                    Select the appropriate age category to help us dispatch the right search team
                  </p>
                </div>
              </>
            )}

            {/* Emergency Types Selection Screen */}
            {currentStep === 'initial' && selectedEmergency === null && (
              <>
                {/* Header - Fixed height */}
                <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertTriangle size={40} className="mr-4" />
                      <div>
                        <h2 className="text-3xl font-bold">SELECT EMERGENCY TYPE</h2>
                        <p className="text-red-100 text-lg mt-1">Choose the type of emergency you're facing</p>
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

                {/* Emergency Types Grid */}
                <div className="flex-1 p-6 overflow-hidden">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {emergencyTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleEmergencyTypeSelect(type.id)}
                        className={`${type.gradient} text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-200 border-4 ${
                          selectedEmergency === type.id ? 'border-yellow-400 scale-105 shadow-2xl' : 'border-transparent'
                        } shadow-lg hover:shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group`}
                      >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
                        {/* Icon and emoji container */}
                        <div className="relative z-10">
                          <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">
                            {type.emoji}
                          </span>
                          <type.icon size={36} className="text-white opacity-90 mb-3 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        {/* Text content */}
                        <div className="relative z-10">
                          <h3 className="font-bold text-xl mb-2 transform group-hover:scale-105 transition-transform duration-300">
                            {type.title}
                          </h3>
                          <p className="text-white opacity-90 text-sm transform group-hover:scale-105 transition-transform duration-300">
                            {type.subtitle}
                          </p>
                        </div>

                        {/* Hover effect border */}
                        <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300"></div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer Instructions */}
                <div className="bg-gray-100 p-4 text-center border-t border-gray-300 flex-shrink-0">
                  <p className="text-gray-600">
                    <strong>IMPORTANT:</strong> Select the appropriate emergency type for immediate assistance
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

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