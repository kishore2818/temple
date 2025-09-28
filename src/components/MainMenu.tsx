import React from 'react';
import { 
  Clock, 
  Calendar, 
  Map, 
  Users, 
  Heart, 
  BookOpen, 
  HelpCircle, 
  MessageSquare,
  Bell,
  Sparkles
} from 'lucide-react';
import type { Screen, Language } from '../App';

interface MainMenuProps {
  onNavigate: (screen: Screen) => void;
  language: Language;
}

interface MenuOption {
  id: Screen;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  titleHi: string;
  description: string;
  color: string;
  hoverColor: string;
}

const menuOptions: MenuOption[] = [
  {
    id: 'darshan',
    icon: Clock,
    title: 'Darshan Timings',
    titleHi: 'दर्शन समय',
    description: 'Puja schedules & timings',
    color: 'from-yellow-400 to-orange-500',
    hoverColor: 'from-yellow-300 to-orange-400'
  },
  {
    id: 'booking',
    icon: Calendar,
    title: 'Book Services',
    titleHi: 'सेवा बुकिंग',
    description: 'Reserve puja & services',
    color: 'from-red-500 to-red-700',
    hoverColor: 'from-red-400 to-red-600'
  },
  {
    id: 'map',
    icon: Map,
    title: 'Temple Map',
    titleHi: 'मंदिर मानचित्र',
    description: 'Navigate the temple',
    color: 'from-green-400 to-green-600',
    hoverColor: 'from-green-300 to-green-500'
  },
  {
    id: 'crowd',
    icon: Users,
    title: 'Crowd Updates',
    titleHi: 'भीड़ की जानकारी',
    description: 'Current wait times',
    color: 'from-blue-400 to-blue-600',
    hoverColor: 'from-blue-300 to-blue-500'
  },
  {
    id: 'donations',
    icon: Heart,
    title: 'Donations',
    titleHi: 'दान',
    description: 'Make offerings',
    color: 'from-pink-400 to-pink-600',
    hoverColor: 'from-pink-300 to-pink-500'
  },
  {
    id: 'heritage',
    icon: BookOpen,
    title: 'Heritage & Culture',
    titleHi: 'विरासत और संस्कृति',
    description: 'Temple history & festivals',
    color: 'from-purple-400 to-purple-600',
    hoverColor: 'from-purple-300 to-purple-500'
  },
  {
    id: 'help',
    icon: HelpCircle,
    title: 'Help & Assistance',
    titleHi: 'सहायता',
    description: 'Get help & support',
    color: 'from-indigo-400 to-indigo-600',
    hoverColor: 'from-indigo-300 to-indigo-500'
  },
  {
    id: 'feedback',
    icon: MessageSquare,
    title: 'Feedback',
    titleHi: 'प्रतिक्रिया',
    description: 'Share your experience',
    color: 'from-teal-400 to-teal-600',
    hoverColor: 'from-teal-300 to-teal-500'
  }
];

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate, language }) => {
  const getTitle = (option: MenuOption) => {
    return language.code === 'hi' ? option.titleHi : option.title;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Bell size={50} className="text-red-800 mr-4 animate-pulse" />
            <h1 className="text-5xl font-bold text-red-900">Divya Darshan</h1>
            <Bell size={50} className="text-red-800 ml-4 animate-pulse" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-2xl text-red-700">
            {language.code === 'hi' ? 'सेवा चुनें' : 'Select a service to continue'}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {menuOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onNavigate(option.id)}
                className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-200 hover:border-yellow-400 min-h-[200px] flex flex-col items-center justify-center"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${option.color} rounded-full p-4 mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent size={40} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    {getTitle(option)}
                  </h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles size={20} className="text-yellow-500 animate-pulse" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 text-red-800 opacity-30">
          <div className="w-16 h-1 bg-red-800"></div>
          <Bell size={24} />
          <div className="w-8 h-8 rounded-full border-2 border-red-800"></div>
          <Bell size={24} />
          <div className="w-16 h-1 bg-red-800"></div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;






// import React, { useState, useEffect } from 'react';
// import { 
//   Clock, 
//   Calendar, 
//   Map, 
//   Users, 
//   Heart, 
//   BookOpen, 
//   HelpCircle, 
//   MessageSquare,
//   Bell,
//   Sparkles
// } from 'lucide-react';
// import type { Screen, Language } from '../App';

// interface MainMenuProps {
//   onNavigate: (screen: Screen) => void;
//   language: Language;
// }

// interface MenuOption {
//   id: Screen;
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   title: string;
//   titleHi: string;
//   description: string;
//   color: string;
//   hoverColor: string;
// }

// // Import background images
// import bg1 from '../photos/gallery-1.jpg';
// import bg2 from '../photos/gallery-2.jpg';
// import bg3 from '../photos/gallery-3.jpg';
// import bg4 from '../photos/gallery-4.jpg';
// import bg5 from '../photos/gallery-5.jpg';
// import bg6 from '../photos/gallery-6.jpg';
// import bg7 from '../photos/gallery-7.jpg';
// import bg8 from '../photos/gallery-8.png';
// import bg9 from '../photos/gallery-9.png';

// const menuOptions: MenuOption[] = [
//   {
//     id: 'darshan',
//     icon: Clock,
//     title: 'Darshan Timings',
//     titleHi: 'दर्शन समय',
//     description: 'Puja schedules & timings',
//     color: 'from-yellow-400 to-orange-500',
//     hoverColor: 'from-yellow-300 to-orange-400'
//   },
//   {
//     id: 'booking',
//     icon: Calendar,
//     title: 'Book Services',
//     titleHi: 'सेवा बुकिंग',
//     description: 'Reserve puja & services',
//     color: 'from-red-500 to-red-700',
//     hoverColor: 'from-red-400 to-red-600'
//   },
//   {
//     id: 'map',
//     icon: Map,
//     title: 'Temple Map',
//     titleHi: 'मंदिर मानचित्र',
//     description: 'Navigate the temple',
//     color: 'from-green-400 to-green-600',
//     hoverColor: 'from-green-300 to-green-500'
//   },
//   {
//     id: 'crowd',
//     icon: Users,
//     title: 'Crowd Updates',
//     titleHi: 'भीड़ की जानकारी',
//     description: 'Current wait times',
//     color: 'from-blue-400 to-blue-600',
//     hoverColor: 'from-blue-300 to-blue-500'
//   },
//   {
//     id: 'donations',
//     icon: Heart,
//     title: 'Donations',
//     titleHi: 'दान',
//     description: 'Make offerings',
//     color: 'from-pink-400 to-pink-600',
//     hoverColor: 'from-pink-300 to-pink-500'
//   },
//   {
//     id: 'heritage',
//     icon: BookOpen,
//     title: 'Heritage & Culture',
//     titleHi: 'विरासत और संस्कृति',
//     description: 'Temple history & festivals',
//     color: 'from-purple-400 to-purple-600',
//     hoverColor: 'from-purple-300 to-purple-500'
//   },
//   {
//     id: 'help',
//     icon: HelpCircle,
//     title: 'Help & Assistance',
//     titleHi: 'सहायता',
//     description: 'Get help & support',
//     color: 'from-indigo-400 to-indigo-600',
//     hoverColor: 'from-indigo-300 to-indigo-500'
//   },
//   {
//     id: 'feedback',
//     icon: MessageSquare,
//     title: 'Feedback',
//     titleHi: 'प्रतिक्रिया',
//     description: 'Share your experience',
//     color: 'from-teal-400 to-teal-600',
//     hoverColor: 'from-teal-300 to-teal-500'
//   }
// ];

// // Background images array
// const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

// const MainMenu: React.FC<MainMenuProps> = ({ onNavigate, language }) => {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const [fade, setFade] = useState(false);

//   const getTitle = (option: MenuOption) => {
//     return language.code === 'hi' ? option.titleHi : option.title;
//   };

//   // Background image rotation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//         setFade(false);
//       }, 1000); // Fade duration
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
//       {/* Background Images with Looping */}
//       <div className="absolute inset-0 z-0">
//         {backgroundImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentBgIndex ? 'opacity-100' : 'opacity-0'
//             } ${fade && index === currentBgIndex ? 'opacity-0' : 'opacity-100'}`}
//             style={{
//               backgroundImage: `url(${image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//             }}
//           >
//             {/* Dark overlay for better text readability */}
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//           </div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl w-full">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-6">
//             <Bell size={50} className="text-white mr-4 animate-pulse drop-shadow-lg" />
//             <h1 className="text-5xl font-bold text-white drop-shadow-lg">Divya Darshan</h1>
//             <Bell size={50} className="text-white ml-4 animate-pulse drop-shadow-lg" />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-4 shadow-lg"></div>
//           <p className="text-2xl text-white drop-shadow-lg">
//             {language.code === 'hi' ? 'सेवा चुनें' : 'Select a service to continue'}
//           </p>
//         </div>

//         {/* Menu Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//           {menuOptions.map((option) => {
//             const IconComponent = option.icon;
//             return (
//               <button
//                 key={option.id}
//                 onClick={() => onNavigate(option.id)}
//                 className="group relative bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-200 hover:border-yellow-400 min-h-[200px] flex flex-col items-center justify-center"
//               >
//                 {/* Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${option.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                
//                 {/* Icon */}
//                 <div className={`bg-gradient-to-br ${option.color} rounded-full p-4 mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
//                   <IconComponent size={40} className="text-white" />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 text-center">
//                   <h3 className="text-xl font-bold text-red-900 mb-2">
//                     {getTitle(option)}
//                   </h3>
//                   <p className="text-sm text-red-700 leading-relaxed">
//                     {option.description}
//                   </p>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <Sparkles size={20} className="text-yellow-500 animate-pulse" />
//                 </div>
//               </button>
//             );
//           })}
//         </div>

//         {/* Bottom Decorative Elements */}
//         <div className="flex justify-center items-center space-x-8 text-white opacity-60">
//           <div className="w-16 h-1 bg-white"></div>
//           <Bell size={24} />
//           <div className="w-8 h-8 rounded-full border-2 border-white"></div>
//           <Bell size={24} />
//           <div className="w-16 h-1 bg-white"></div>
//         </div>

//         {/* Background Indicator */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {backgroundImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setFade(true);
//                 setTimeout(() => {
//                   setCurrentBgIndex(index);
//                   setFade(false);
//                 }, 500);
//               }}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentBgIndex 
//                   ? 'bg-yellow-400 scale-125' 
//                   : 'bg-white bg-opacity-50 hover:bg-opacity-75'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Background Info */}
//         <div className="text-center mt-4">
//           <p className="text-white text-sm opacity-75 drop-shadow-lg">
//             {language.code === 'hi' 
//               ? `पृष्ठभूमि ${currentBgIndex + 1}/${backgroundImages.length}`
//               : `Background ${currentBgIndex + 1}/${backgroundImages.length}`
//             }
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainMenu;