// import React, { useState } from 'react';
// import { Home, ArrowLeft, Volume2 } from 'lucide-react';
// import HomeScreen from './components/HomeScreen';
// import LanguageSelection from './components/LanguageSelection';
// import MainMenu from './components/MainMenu';
// import DarshanTimings from './components/DarshanTimings';
// import BookingTokens from './components/BookingTokens';
// import TempleMap from './components/TempleMap';
// import CrowdUpdates from './components/CrowdUpdates';
// import Donations from './components/Donations';
// import HeritageInfo from './components/HeritageInfo';
// import HelpAssistance from './components/HelpAssistance';
// import FeedbackSection from './components/FeedbackSection';

// export type Screen = 
//   | 'home' 
//   | 'language' 
//   | 'menu' 
//   | 'darshan' 
//   | 'booking' 
//   | 'map' 
//   | 'crowd' 
//   | 'donations' 
//   | 'heritage' 
//   | 'help' 
//   | 'feedback';

// export interface Language {
//   code: string;
//   name: string;
//   nativeName: string;
//   flag: string;
// }

// function App() {
//   const [currentScreen, setCurrentScreen] = useState<Screen>('home');
//   const [selectedLanguage, setSelectedLanguage] = useState<Language>({
//     code: 'en',
//     name: 'English',
//     nativeName: 'English',
//     flag: '🇺🇸'
//   });
//   const [soundEnabled, setSoundEnabled] = useState(true);

//   const navigateToScreen = (screen: Screen) => {
//     if (soundEnabled) {
//       // In a real implementation, you would play a bell sound here
//       console.log('🔔 Navigation sound');
//     }
//     setCurrentScreen(screen);
//   };

//   const goBack = () => {
//     switch (currentScreen) {
//       case 'language':
//         setCurrentScreen('home');
//         break;
//       default:
//         setCurrentScreen('menu');
//         break;
//     }
//   };

//   const goHome = () => {
//     setCurrentScreen('home');
//   };

//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case 'home':
//         return <HomeScreen onNavigate={navigateToScreen} language={selectedLanguage} />;
//       case 'language':
//         return (
//           <LanguageSelection
//             onLanguageSelect={setSelectedLanguage}
//             onNavigate={navigateToScreen}
//             currentLanguage={selectedLanguage}
//           />
//         );
//       case 'menu':
//         return <MainMenu onNavigate={navigateToScreen} language={selectedLanguage} />;
//       case 'darshan':
//         return <DarshanTimings language={selectedLanguage} />;
//       case 'booking':
//         return <BookingTokens language={selectedLanguage} />;
//       case 'map':
//         return <TempleMap language={selectedLanguage} />;
//       case 'crowd':
//         return <CrowdUpdates language={selectedLanguage} />;
//       case 'donations':
//         return <Donations language={selectedLanguage} />;
//       case 'heritage':
//         return <HeritageInfo language={selectedLanguage} />;
//       case 'help':
//         return <HelpAssistance language={selectedLanguage} />;
//       case 'feedback':
//         return <FeedbackSection language={selectedLanguage} />;
//       default:
//         return <HomeScreen onNavigate={navigateToScreen} language={selectedLanguage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
//       {/* Mandala Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-yellow-600"></div>
//         <div className="absolute top-20 left-20 w-16 h-16 rounded-full border-4 border-red-800"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-8 border-yellow-600"></div>
//         <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-4 border-red-800"></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border-6 border-yellow-600"></div>
//         <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full border-6 border-red-800"></div>
//       </div>

//       {/* Navigation Bar */}
//       {currentScreen !== 'home' && (
//         <nav className="relative z-10 flex items-center justify-between p-4 bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg">
//           <div className="flex items-center space-x-4">
//             {currentScreen !== 'menu' && (
//               <button
//                 onClick={goBack}
//                 className="flex items-center space-x-2 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg transition-colors"
//               >
//                 <ArrowLeft size={24} />
//                 <span className="text-lg font-medium">Back</span>
//               </button>
//             )}
//             <button
//               onClick={goHome}
//               className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
//             >
//               <Home size={24} />
//               <span className="text-lg font-medium">Home</span>
//             </button>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setSoundEnabled(!soundEnabled)}
//               className={`p-2 rounded-lg transition-colors ${
//                 soundEnabled 
//                   ? 'bg-yellow-600 hover:bg-yellow-500' 
//                   : 'bg-gray-600 hover:bg-gray-500'
//               }`}
//             >
//               <Volume2 size={24} />
//             </button>
//             <div className="flex items-center space-x-2 px-4 py-2 bg-red-700 rounded-lg">
//               <span>{selectedLanguage.flag}</span>
//               <span className="text-lg font-medium">{selectedLanguage.name}</span>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Main Content */}
//       <main className="relative z-10">
//         {renderCurrentScreen()}
//       </main>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-red-800 to-yellow-600"></div>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import { Home, ArrowLeft, Volume2 } from 'lucide-react';
import HomeScreen from './components/HomeScreen';
import LanguageSelection from './components/LanguageSelection';
import MainMenu from './components/MainMenu';
import DarshanTimings from './components/DarshanTimings';
import BookingTokens from './components/BookingTokens';
import TempleMap from './components/TempleMap';
import CrowdUpdates from './components/CrowdUpdates';
import SpecialAssistance from './components/SpecialAssistance';
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
  | 'specialAssistance'  // Changed from 'donations' to 'specialAssistance'
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
      case 'specialAssistance':  // Changed from 'donations' to 'specialAssistance'
        return <SpecialAssistance language={selectedLanguage} />;
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





// import React, { useState, useEffect } from 'react';
// import { Home, ArrowLeft, Volume2, AlertTriangle } from 'lucide-react';
// import HomeScreen from './components/HomeScreen';
// import LanguageSelection from './components/LanguageSelection';
// import MainMenu from './components/MainMenu';
// import DarshanTimings from './components/DarshanTimings';
// import BookingTokens from './components/BookingTokens';
// import TempleMap from './components/TempleMap';
// import CrowdUpdates from './components/CrowdUpdates';
// import Donations from './components/Donations';
// import HeritageInfo from './components/HeritageInfo';
// import HelpAssistance from './components/HelpAssistance';
// import FeedbackSection from './components/FeedbackSection';

// export type Screen = 
//   | 'home' 
//   | 'language' 
//   | 'menu' 
//   | 'darshan' 
//   | 'booking' 
//   | 'map' 
//   | 'crowd' 
//   | 'donations' 
//   | 'heritage' 
//   | 'help' 
//   | 'feedback';

// export interface Language {
//   code: string;
//   name: string;
//   nativeName: string;
//   flag: string;
// }

// // Import the missing person image
// import missingPersonImage from './photos/missing.jpg';

// function App() {
//   const [currentScreen, setCurrentScreen] = useState<Screen>('home');
//   const [selectedLanguage, setSelectedLanguage] = useState<Language>({
//     code: 'en',
//     name: 'English',
//     nativeName: 'English',
//     flag: '🇺🇸'
//   });
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [showAlertPopup, setShowAlertPopup] = useState(true);
//   const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

//   // Missing person data
//   const missingPerson = {
//     image: missingPersonImage,
//     name: "MISSING PERSON ALERT",
//     age: 20,
//     clothing: "White Shirt, Black pants, Specs",
//     height: "5.8 feet",
//     lastSeen: "Main block",
//     contact: "+91 99988 76543",
//     reportedBy: "Friend - Kishore"
//   };

//   const details = [
//     { label: "Age", value: missingPerson.age.toString() },
//     { label: "Height", value: missingPerson.height },
//     { label: "Last Seen", value: missingPerson.lastSeen },
//     { label: "Contact", value: missingPerson.contact },
//     { label: "Reported by", value: missingPerson.reportedBy },
//     { label: "Clothing", value: missingPerson.clothing }
//   ];

//   // Auto-cycle through details
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDetailIndex((prev) => 
//         prev === details.length - 1 ? 0 : prev + 1
//       );
//     }, 2000); // Change detail every 2 seconds

//     return () => clearInterval(interval);
//   }, [details.length]);

//   // Auto-show popup every 30 seconds
//   useEffect(() => {
//     const popupInterval = setInterval(() => {
//       setShowAlertPopup(true);
//       setCurrentDetailIndex(0);
//     }, 30000);

//     return () => clearInterval(popupInterval);
//   }, []);

//   const navigateToScreen = (screen: Screen) => {
//     if (soundEnabled) {
//       console.log('🔔 Navigation sound');
//     }
//     setCurrentScreen(screen);
//   };

//   const goBack = () => {
//     switch (currentScreen) {
//       case 'language':
//         setCurrentScreen('home');
//         break;
//       default:
//         setCurrentScreen('menu');
//         break;
//     }
//   };

//   const goHome = () => {
//     setCurrentScreen('home');
//   };

//   const closePopup = () => {
//     setShowAlertPopup(false);
//   };

//   const renderCurrentScreen = () => {
//     switch (currentScreen) {
//       case 'home':
//         return <HomeScreen onNavigate={navigateToScreen} language={selectedLanguage} />;
//       case 'language':
//         return (
//           <LanguageSelection
//             onLanguageSelect={setSelectedLanguage}
//             onNavigate={navigateToScreen}
//             currentLanguage={selectedLanguage}
//           />
//         );
//       case 'menu':
//         return <MainMenu onNavigate={navigateToScreen} language={selectedLanguage} />;
//       case 'darshan':
//         return <DarshanTimings language={selectedLanguage} />;
//       case 'booking':
//         return <BookingTokens language={selectedLanguage} />;
//       case 'map':
//         return <TempleMap language={selectedLanguage} />;
//       case 'crowd':
//         return <CrowdUpdates language={selectedLanguage} />;
//       case 'donations':
//         return <Donations language={selectedLanguage} />;
//       case 'heritage':
//         return <HeritageInfo language={selectedLanguage} />;
//       case 'help':
//         return <HelpAssistance language={selectedLanguage} />;
//       case 'feedback':
//         return <FeedbackSection language={selectedLanguage} />;
//       default:
//         return <HomeScreen onNavigate={navigateToScreen} language={selectedLanguage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
//       {/* Mandala Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-yellow-600"></div>
//         <div className="absolute top-20 left-20 w-16 h-16 rounded-full border-4 border-red-800"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-8 border-yellow-600"></div>
//         <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-4 border-red-800"></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border-6 border-yellow-600"></div>
//         <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full border-6 border-red-800"></div>
//       </div>

//       {/* Emergency Alert Popup */}
//       {showAlertPopup && (
//         <>
//           {/* Backdrop */}
//           <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
//             {/* Popup Container */}
//             <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-4 border-red-600 animate-pulse">
//               {/* Header */}
//               <div className="bg-red-600 py-4 px-6 flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <AlertTriangle className="text-yellow-300 animate-bounce" size={32} />
//                   <h2 className="text-2xl font-bold text-white tracking-wide">
//                     🚨 EMERGENCY ALERT 🚨
//                   </h2>
//                 </div>
//                 <button
//                   onClick={closePopup}
//                   className="text-white hover:text-yellow-300 transition-colors text-lg font-bold bg-red-700 hover:bg-red-800 w-8 h-8 rounded-full flex items-center justify-center"
//                 >
//                   ×
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="flex flex-col md:flex-row p-6">
//                 {/* Left Side - Big Image */}
//                 <div className="md:w-2/5 flex flex-col items-center justify-center p-4">
//                   <div className="relative">
//                     <img 
//                       src={missingPerson.image} 
//                       alt="Missing Person"
//                       className="w-64 h-80 object-cover rounded-lg shadow-2xl border-4 border-red-200"
//                     />
//                     <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
//                       <span className="font-bold text-sm">MISSING</span>
//                     </div>
//                   </div>
//                   <div className="mt-6 text-center">
//                     <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3">
//                       <p className="text-sm text-gray-700 font-semibold">
//                         ⚠️ If you have any information, please contact immediately!
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side - Details */}
//                 <div className="md:w-3/5 flex flex-col justify-center p-4">
//                   <div className="text-center mb-6">
//                     <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                       MISSING PERSON
//                     </h3>
//                     <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
//                   </div>

//                   {/* Dynamic Detail Display */}
//                   <div className="bg-gray-50 rounded-xl p-6 min-h-[200px] flex items-center justify-center border-2 border-red-200">
//                     <div className="text-center animate-fadeIn">
//                       <div className="text-4xl mb-4">🔍</div>
//                       <div className="text-2xl font-bold text-red-600 mb-2">
//                         {details[currentDetailIndex].label}
//                       </div>
//                       <div className="text-3xl font-bold text-gray-800">
//                         {details[currentDetailIndex].value}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Progress Dots */}
//                   <div className="flex justify-center space-x-2 mt-6">
//                     {details.map((_, index) => (
//                       <div
//                         key={index}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                           index === currentDetailIndex 
//                             ? 'bg-red-600 scale-125' 
//                             : 'bg-gray-300'
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   {/* All Details Summary */}
//                   <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
//                     <div className="bg-red-50 p-3 rounded-lg border border-red-200">
//                       <span className="font-semibold text-red-700">Age:</span>
//                       <div className="text-gray-800">{missingPerson.age}</div>
//                     </div>
//                     <div className="bg-red-50 p-3 rounded-lg border border-red-200">
//                       <span className="font-semibold text-red-700">Height:</span>
//                       <div className="text-gray-800">{missingPerson.height}</div>
//                     </div>
//                     <div className="bg-red-50 p-3 rounded-lg border border-red-200">
//                       <span className="font-semibold text-red-700">Last Seen:</span>
//                       <div className="text-gray-800">{missingPerson.lastSeen}</div>
//                     </div>
//                     <div className="bg-red-50 p-3 rounded-lg border border-red-200">
//                       <span className="font-semibold text-red-700">Contact:</span>
//                       <div className="text-gray-800 font-mono">{missingPerson.contact}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="bg-red-50 py-3 px-6 border-t border-red-200">
//                 <div className="text-center">
//                   <p className="text-red-700 font-semibold text-sm">
//                     🚨 This is an emergency alert. Please help locate this person. 🚨
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Navigation Bar */}
//       {currentScreen !== 'home' && (
//         <nav className="relative z-10 flex items-center justify-between p-4 bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg">
//           <div className="flex items-center space-x-4">
//             {currentScreen !== 'menu' && (
//               <button
//                 onClick={goBack}
//                 className="flex items-center space-x-2 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg transition-colors"
//               >
//                 <ArrowLeft size={24} />
//                 <span className="text-lg font-medium">Back</span>
//               </button>
//             )}
//             <button
//               onClick={goHome}
//               className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
//             >
//               <Home size={24} />
//               <span className="text-lg font-medium">Home</span>
//             </button>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setSoundEnabled(!soundEnabled)}
//               className={`p-2 rounded-lg transition-colors ${
//                 soundEnabled 
//                   ? 'bg-yellow-600 hover:bg-yellow-500' 
//                   : 'bg-gray-600 hover:bg-gray-500'
//               }`}
//             >
//               <Volume2 size={24} />
//             </button>
//             <div className="flex items-center space-x-2 px-4 py-2 bg-red-700 rounded-lg">
//               <span>{selectedLanguage.flag}</span>
//               <span className="text-lg font-medium">{selectedLanguage.name}</span>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Main Content */}
//       <main className="relative z-10">
//         {renderCurrentScreen()}
//       </main>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-red-800 to-yellow-600"></div>
//     </div>
//   );
// }

// export default App;