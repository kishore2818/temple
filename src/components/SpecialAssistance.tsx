// import React, { useState } from 'react';
// import { Wheelchair, Baby, User, MapPin, Clock, CheckCircle, Shield } from 'lucide-react';
// import type { Language } from '../App';

// interface SpecialAssistanceProps {
//   language: Language;
// }

// interface AssistanceOption {
//   id: string;
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   title: string;
//   titleHi: string;
//   description: string;
//   descriptionHi: string;
//   features: string[];
//   featuresHi: string[];
//   duration: string;
//   available: boolean;
// }

// interface WheelchairRequest {
//   pickupLocation: string;
//   destination: string;
//   urgency: 'normal' | 'urgent';
//   duration: number;
// }

// const assistanceOptions: AssistanceOption[] = [
//   {
//     id: 'wheelchair',
//     icon: Wheelchair,
//     title: 'Wheelchair Service',
//     titleHi: 'व्हीलचेयर सेवा',
//     description: 'Mobility assistance for temple premises',
//     descriptionHi: 'मंदिर परिसर में गतिशीलता सहायता',
//     features: [
//       'Complimentary wheelchair service',
//       'Trained attendant assistance',
//       'Priority access in queues',
//       'Covered waiting areas'
//     ],
//     featuresHi: [
//       'निःशुल्क व्हीलचेयर सेवा',
//       'प्रशिक्षित परिचारक सहायता',
//       'कतारों में प्राथमिकता पहुंच',
//       'छायादार प्रतीक्षा क्षेत्र'
//     ],
//     duration: '2 hours',
//     available: true
//   },
//   {
//     id: 'senior',
//     icon: User,
//     title: 'Senior Citizen Support',
//     titleHi: 'वरिष्ठ नागरिक सहायता',
//     description: 'Special care for elderly devotees',
//     descriptionHi: 'बुजुर्ग भक्तों के लिए विशेष देखभाल',
//     features: [
//       'Priority darshan access',
//       'Resting areas with seating',
//       'Medical first aid support',
//       'Drinking water facilities'
//     ],
//     featuresHi: [
//       'प्राथमिकता दर्शन पहुंच',
//       'बैठने के साथ विश्राम क्षेत्र',
//       'चिकित्सा प्राथमिक चिकित्सा सहायता',
//       'पीने का पानी सुविधाएं'
//     ],
//     duration: 'Full visit',
//     available: true
//   },
//   {
//     id: 'children',
//     icon: Baby,
//     title: 'Children Assistance',
//     titleHi: 'बच्चों की सहायता',
//     description: 'Support for families with young children',
//     descriptionHi: 'छोटे बच्चों वाले परिवारों के लिए सहायता',
//     features: [
//       'Stroller rental service',
//       'Baby feeding rooms',
//       'Lost child assistance',
//       'Child-friendly waiting zones'
//     ],
//     featuresHi: [
//       'स्ट्रॉलर किराया सेवा',
//       'शिशु आहार कक्ष',
//       'खोए हुए बच्चे की सहायता',
//       'बच्चों के अनुकूल प्रतीक्षा क्षेत्र'
//     ],
//     duration: 'Flexible',
//     available: true
//   }
// ];

// const templeLocations = [
//   { id: 'main-gate', name: 'Main Entrance Gate', nameHi: 'मुख्य प्रवेश द्वार' },
//   { id: 'parking', name: 'Parking Area', nameHi: 'पार्किंग क्षेत्र' },
//   { id: 'sanctum', name: 'Main Sanctum', nameHi: 'मुख्य गर्भगृह' },
//   { id: 'hall', name: 'Prayer Hall', nameHi: 'प्रार्थना हॉल' },
//   { id: 'office', name: 'Admin Office', nameHi: 'प्रशासन कार्यालय' }
// ];

// const SpecialAssistance: React.FC<SpecialAssistanceProps> = ({ language }) => {
//   const [selectedService, setSelectedService] = useState<string | null>(null);
//   const [step, setStep] = useState(1);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     phone: '',
//     age: '',
//     assistanceType: '',
//     specialRequirements: ''
//   });
//   const [wheelchairRequest, setWheelchairRequest] = useState<WheelchairRequest>({
//     pickupLocation: '',
//     destination: '',
//     urgency: 'normal',
//     duration: 2
//   });

//   const handleServiceSelect = (serviceId: string) => {
//     setSelectedService(serviceId);
//     setUserDetails(prev => ({ ...prev, assistanceType: serviceId }));
//   };

//   const handleNext = () => {
//     if (step < 3) {
//       setStep(step + 1);
//     }
//   };

//   const handleBack = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const handleSubmit = () => {
//     setIsCompleted(true);
//     setStep(4);
//   };

//   const getLocationName = (locationId: string) => {
//     const location = templeLocations.find(loc => loc.id === locationId);
//     if (!location) return locationId;
//     return language.code === 'hi' ? location.nameHi : location.name;
//   };

//   const getServiceName = (serviceId: string) => {
//     const service = assistanceOptions.find(s => s.id === serviceId);
//     if (!service) return serviceId;
//     return language.code === 'hi' ? service.titleHi : service.title;
//   };

//   if (isCompleted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center p-8">
//         <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
//           <div className="mb-6">
//             <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-green-700 mb-2">
//               {language.code === 'hi' ? 'सहायता बुक हो गई!' : 'Assistance Booked!'}
//             </h2>
//             <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
//             <p className="text-gray-600">
//               {language.code === 'hi' ? 
//                 'आपकी सहायता सेवा सफलतापूर्वक बुक हो गई है' : 
//                 'Your assistance service has been successfully booked'
//               }
//             </p>
//           </div>

//           <div className="bg-blue-50 rounded-lg p-6 mb-6 border-2 border-blue-200">
//             <h3 className="font-bold text-lg text-blue-800 mb-4">
//               {language.code === 'hi' ? 'बुकिंग विवरण' : 'Booking Details'}
//             </h3>
//             <div className="text-left space-y-2 text-gray-700">
//               <p><strong>{language.code === 'hi' ? 'सेवा:' : 'Service:'}</strong> {getServiceName(selectedService!)}</p>
//               <p><strong>{language.code === 'hi' ? 'नाम:' : 'Name:'}</strong> {userDetails.name}</p>
//               <p><strong>{language.code === 'hi' ? 'फोन:' : 'Phone:'}</strong> {userDetails.phone}</p>
//               {selectedService === 'wheelchair' && (
//                 <>
//                   <p><strong>{language.code === 'hi' ? 'पिकअप:' : 'Pickup:'}</strong> {getLocationName(wheelchairRequest.pickupLocation)}</p>
//                   <p><strong>{language.code === 'hi' ? 'गंतव्य:' : 'Destination:'}</strong> {getLocationName(wheelchairRequest.destination)}</p>
//                 </>
//               )}
//               <p><strong>{language.code === 'hi' ? 'बुकिंग ID:' : 'Booking ID:'}</strong> SA-2024-{Math.floor(Math.random() * 10000)}</p>
//             </div>
//           </div>

//           <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-2 border-yellow-200">
//             <h4 className="font-bold text-yellow-800 mb-2">
//               {language.code === 'hi' ? 'आगे के कदम:' : 'Next Steps:'}
//             </h4>
//             <p className="text-sm text-yellow-700">
//               {language.code === 'hi' ? 
//                 'कृपया निर्दिष्ट स्थान पर समय पर पहुंचें। हमारा सहायता कर्मी आपकी प्रतीक्षा कर रहा होगा।' :
//                 'Please arrive at the specified location on time. Our assistance staff will be waiting for you.'
//               }
//             </p>
//           </div>

//           <button 
//             onClick={() => window.print()}
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all mb-4"
//           >
//             {language.code === 'hi' ? 'बुकिंग प्रिंट करें' : 'Print Booking'}
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center mb-4">
//             <Wheelchair size={40} className="text-red-800 mr-3" />
//             <h1 className="text-4xl font-bold text-red-900">
//               {language.code === 'hi' ? 'विशेष सहायता' : 'Special Assistance'}
//             </h1>
//             <Wheelchair size={40} className="text-red-800 ml-3" />
//           </div>
//           <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
//           <p className="text-xl text-red-700">
//             {language.code === 'hi' ? 
//               'वरिष्ठ नागरिक, बच्चे और दिव्यांगजनों के लिए सहायता' : 
//               'Assistance for Senior Citizens, Children & Differently Abled'
//             }
//           </p>
//         </div>

//         {/* Progress Steps */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center space-x-4">
//             {[1, 2, 3].map((stepNumber) => (
//               <React.Fragment key={stepNumber}>
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
//                   step >= stepNumber ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600'
//                 }`}>
//                   {stepNumber}
//                 </div>
//                 {stepNumber < 3 && (
//                   <div className={`w-16 h-1 ${step > stepNumber ? 'bg-red-600' : 'bg-gray-300'}`}></div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           {/* Step 1: Service Selection */}
//           {step === 1 && (
//             <div>
//               <h2 className="text-2xl font-bold text-red-900 mb-6">
//                 {language.code === 'hi' ? 'सहायता सेवा चुनें' : 'Select Assistance Service'}
//               </h2>

//               <div className="grid md:grid-cols-3 gap-6">
//                 {assistanceOptions.map((option) => {
//                   const IconComponent = option.icon;
//                   return (
//                     <button
//                       key={option.id}
//                       onClick={() => handleServiceSelect(option.id)}
//                       className={`p-6 rounded-xl border-2 transition-all text-left ${
//                         selectedService === option.id
//                           ? 'border-red-500 bg-red-50'
//                           : 'border-gray-200 hover:border-red-300'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <IconComponent size={32} className="text-red-600" />
//                         {option.available ? (
//                           <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                             {language.code === 'hi' ? 'उपलब्ध' : 'Available'}
//                           </span>
//                         ) : (
//                           <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
//                             {language.code === 'hi' ? 'अनुपलब्ध' : 'Unavailable'}
//                           </span>
//                         )}
//                       </div>
                      
//                       <h3 className="font-bold text-gray-800 mb-2 text-lg">
//                         {language.code === 'hi' ? option.titleHi : option.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-4">
//                         {language.code === 'hi' ? option.descriptionHi : option.description}
//                       </p>

//                       <div className="space-y-2 mb-4">
//                         {(language.code === 'hi' ? option.featuresHi : option.features).map((feature, index) => (
//                           <div key={index} className="flex items-center text-sm text-gray-700">
//                             <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                             {feature}
//                           </div>
//                         ))}
//                       </div>

//                       <div className="flex items-center justify-between text-sm text-gray-500">
//                         <span className="flex items-center">
//                           <Clock size={14} className="mr-1" />
//                           {option.duration}
//                         </span>
//                         <span className="text-green-600 font-medium">
//                           {language.code === 'hi' ? 'निःशुल्क' : 'Free Service'}
//                         </span>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>

//               <button
//                 onClick={handleNext}
//                 disabled={!selectedService}
//                 className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
//               </button>
//             </div>
//           )}

//           {/* Step 2: Details Collection */}
//           {step === 2 && (
//             <div>
//               <h2 className="text-2xl font-bold text-red-900 mb-6">
//                 {language.code === 'hi' ? 'व्यक्तिगत विवरण' : 'Personal Details'}
//               </h2>

//               <div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
//                 <p className="text-blue-800 font-medium">
//                   <strong>{language.code === 'hi' ? 'चयनित सेवा:' : 'Selected Service:'}</strong> {getServiceName(selectedService!)}
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-800 mb-2">
//                     {language.code === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
//                   </label>
//                   <input
//                     type="text"
//                     value={userDetails.name}
//                     onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                     placeholder={language.code === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your full name'}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-800 mb-2">
//                     {language.code === 'hi' ? 'फोन नंबर *' : 'Phone Number *'}
//                   </label>
//                   <input
//                     type="tel"
//                     value={userDetails.phone}
//                     onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                     placeholder={language.code === 'hi' ? 'फोन नंबर दर्ज करें' : 'Enter phone number'}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-800 mb-2">
//                     {language.code === 'hi' ? 'आयु *' : 'Age *'}
//                   </label>
//                   <input
//                     type="number"
//                     value={userDetails.age}
//                     onChange={(e) => setUserDetails({...userDetails, age: e.target.value})}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                     placeholder={language.code === 'hi' ? 'आयु दर्ज करें' : 'Enter age'}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-800 mb-2">
//                     {language.code === 'hi' ? 'विशेष आवश्यकताएँ' : 'Special Requirements'}
//                   </label>
//                   <input
//                     type="text"
//                     value={userDetails.specialRequirements}
//                     onChange={(e) => setUserDetails({...userDetails, specialRequirements: e.target.value})}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                     placeholder={language.code === 'hi' ? 'कोई विशेष आवश्यकता' : 'Any special requirements'}
//                   />
//                 </div>
//               </div>

//               {/* Wheelchair Specific Form */}
//               {selectedService === 'wheelchair' && (
//                 <div className="border-2 border-gray-200 rounded-xl p-6 mb-6">
//                   <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
//                     <Wheelchair className="mr-2" size={20} />
//                     {language.code === 'hi' ? 'व्हीलचेयर सेवा विवरण' : 'Wheelchair Service Details'}
//                   </h3>
                  
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-800 mb-2">
//                         {language.code === 'hi' ? 'पिकअप स्थान *' : 'Pickup Location *'}
//                       </label>
//                       <select
//                         value={wheelchairRequest.pickupLocation}
//                         onChange={(e) => setWheelchairRequest({...wheelchairRequest, pickupLocation: e.target.value})}
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                       >
//                         <option value="">{language.code === 'hi' ? 'स्थान चुनें' : 'Select location'}</option>
//                         {templeLocations.map(location => (
//                           <option key={location.id} value={location.id}>
//                             {language.code === 'hi' ? location.nameHi : location.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-800 mb-2">
//                         {language.code === 'hi' ? 'गंतव्य स्थान *' : 'Destination Location *'}
//                       </label>
//                       <select
//                         value={wheelchairRequest.destination}
//                         onChange={(e) => setWheelchairRequest({...wheelchairRequest, destination: e.target.value})}
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                       >
//                         <option value="">{language.code === 'hi' ? 'स्थान चुनें' : 'Select location'}</option>
//                         {templeLocations.map(location => (
//                           <option key={location.id} value={location.id}>
//                             {language.code === 'hi' ? location.nameHi : location.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-800 mb-2">
//                         {language.code === 'hi' ? 'तात्कालिकता' : 'Urgency'}
//                       </label>
//                       <select
//                         value={wheelchairRequest.urgency}
//                         onChange={(e) => setWheelchairRequest({...wheelchairRequest, urgency: e.target.value as 'normal' | 'urgent'})}
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                       >
//                         <option value="normal">{language.code === 'hi' ? 'सामान्य' : 'Normal'}</option>
//                         <option value="urgent">{language.code === 'hi' ? 'तत्काल' : 'Urgent'}</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-800 mb-2">
//                         {language.code === 'hi' ? 'अवधि (घंटे)' : 'Duration (hours)'}
//                       </label>
//                       <select
//                         value={wheelchairRequest.duration}
//                         onChange={(e) => setWheelchairRequest({...wheelchairRequest, duration: parseInt(e.target.value)})}
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
//                       >
//                         <option value={1}>1 {language.code === 'hi' ? 'घंटा' : 'hour'}</option>
//                         <option value={2}>2 {language.code === 'hi' ? 'घंटे' : 'hours'}</option>
//                         <option value={3}>3 {language.code === 'hi' ? 'घंटे' : 'hours'}</option>
//                         <option value={4}>4 {language.code === 'hi' ? 'घंटे' : 'hours'}</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Temple Map Section */}
//                   <div className="mt-6">
//                     <h4 className="font-bold text-gray-800 mb-3 flex items-center">
//                       <MapPin className="mr-2" size={18} />
//                       {language.code === 'hi' ? 'मंदिर मानचित्र' : 'Temple Map'}
//                     </h4>
//                     <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-300">
//                       <div className="grid grid-cols-3 gap-2 text-center text-xs">
//                         {templeLocations.map((location, index) => (
//                           <div key={location.id} className="bg-white p-2 rounded border">
//                             <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
//                             <span className="font-medium">
//                               {language.code === 'hi' ? location.nameHi : location.name}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="mt-3 text-center text-sm text-gray-600">
//                         {language.code === 'hi' ? 
//                           'व्हीलचेयर सेवा सभी स्थानों पर उपलब्ध है' :
//                           'Wheelchair service available at all locations'
//                         }
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="flex space-x-4">
//                 <button
//                   onClick={handleBack}
//                   className="bg-gray-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-600 transition-all"
//                 >
//                   {language.code === 'hi' ? 'पीछे जाएँ' : 'Go Back'}
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   disabled={!userDetails.name || !userDetails.phone || !userDetails.age || 
//                            (selectedService === 'wheelchair' && (!wheelchairRequest.pickupLocation || !wheelchairRequest.destination))}
//                   className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Confirmation */}
//           {step === 3 && (
//             <div>
//               <h2 className="text-2xl font-bold text-red-900 mb-6">
//                 {language.code === 'hi' ? 'बुकिंग की पुष्टि करें' : 'Confirm Booking'}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-4">
//                     {language.code === 'hi' ? 'बुकिंग सारांश' : 'Booking Summary'}
//                   </h3>
//                   <div className="bg-gray-50 rounded-lg p-6 space-y-3">
//                     <div className="flex justify-between">
//                       <span>{language.code === 'hi' ? 'सेवा:' : 'Service:'}</span>
//                       <span className="font-bold">{getServiceName(selectedService!)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>{language.code === 'hi' ? 'नाम:' : 'Name:'}</span>
//                       <span className="font-medium">{userDetails.name}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>{language.code === 'hi' ? 'फोन:' : 'Phone:'}</span>
//                       <span className="font-medium">{userDetails.phone}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>{language.code === 'hi' ? 'आयु:' : 'Age:'}</span>
//                       <span className="font-medium">{userDetails.age}</span>
//                     </div>
                    
//                     {selectedService === 'wheelchair' && (
//                       <>
//                         <div className="flex justify-between">
//                           <span>{language.code === 'hi' ? 'पिकअप:' : 'Pickup:'}</span>
//                           <span className="font-medium">{getLocationName(wheelchairRequest.pickupLocation)}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>{language.code === 'hi' ? 'गंतव्य:' : 'Destination:'}</span>
//                           <span className="font-medium">{getLocationName(wheelchairRequest.destination)}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>{language.code === 'hi' ? 'तात्कालिकता:' : 'Urgency:'}</span>
//                           <span className="font-medium capitalize">{wheelchairRequest.urgency}</span>
//                         </div>
//                       </>
//                     )}

//                     {userDetails.specialRequirements && (
//                       <div className="flex justify-between">
//                         <span>{language.code === 'hi' ? 'विशेष आवश्यकताएँ:' : 'Special Requirements:'}</span>
//                         <span className="font-medium">{userDetails.specialRequirements}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-4">
//                     {language.code === 'hi' ? 'सेवा जानकारी' : 'Service Information'}
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
//                       <div className="flex items-center space-x-3 mb-4">
//                         <Shield className="text-green-600" size={24} />
//                         <div>
//                           <h4 className="font-medium text-green-900">
//                             {language.code === 'hi' ? 'सुरक्षित सेवा' : 'Secure Service'}
//                           </h4>
//                           <p className="text-sm text-green-700">
//                             {language.code === 'hi' ? 
//                               'प्रशिक्षित कर्मचारियों द्वारा सहायता' : 
//                               'Assistance by trained staff members'
//                             }
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
//                       <h4 className="font-bold text-blue-800 mb-2">
//                         {language.code === 'hi' ? 'सेवा नीति:' : 'Service Policy:'}
//                       </h4>
//                       <ul className="text-sm text-blue-700 space-y-1">
//                         <li>• {language.code === 'hi' ? 'सभी सेवाएं निःशुल्क हैं' : 'All services are completely free'}</li>
//                         <li>• {language.code === 'hi' ? 'समय पर पहुंचना आवश्यक है' : 'Arrive on time for your booking'}</li>
//                         <li>• {language.code === 'hi' ? 'सहायता कर्मी आपकी प्रतीक्षा करेगा' : 'Assistance staff will be waiting for you'}</li>
//                         <li>• {language.code === 'hi' ? 'आपात स्थिति में 108 पर कॉल करें' : 'Call 108 in case of emergency'}</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex space-x-4 mt-8">
//                 <button
//                   onClick={handleBack}
//                   className="bg-gray-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-600 transition-all"
//                 >
//                   {language.code === 'hi' ? 'पीछे जाएँ' : 'Go Back'}
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all"
//                 >
//                   {language.code === 'hi' ? 'सहायता बुक करें' : 'Book Assistance'}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialAssistance;




import React, { useState } from 'react';
import { Accessibility as Wheelchair, Baby, User, MapPin, Clock, CheckCircle, Shield } from 'lucide-react';
import type { Language } from '../App';

interface SpecialAssistanceProps {
  language: Language;
}

interface AssistanceOption {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  features: string[];
  featuresHi: string[];
  duration: string;
  available: boolean;
}

interface WheelchairRequest {
  pickupLocation: string;
  destination: string;
  urgency: 'normal' | 'urgent';
  duration: number;
}

const assistanceOptions: AssistanceOption[] = [
  {
    id: 'wheelchair',
    icon: Wheelchair,
    title: 'Wheelchair Service',
    titleHi: 'व्हीलचेयर सेवा',
    description: 'Mobility assistance for temple premises',
    descriptionHi: 'मंदिर परिसर में गतिशीलता सहायता',
    features: [
      'Complimentary wheelchair service',
      'Trained attendant assistance',
      'Priority access in queues',
      'Covered waiting areas'
    ],
    featuresHi: [
      'निःशुल्क व्हीलचेयर सेवा',
      'प्रशिक्षित परिचारक सहायता',
      'कतारों में प्राथमिकता पहुंच',
      'छायादार प्रतीक्षा क्षेत्र'
    ],
    duration: '2 hours',
    available: true
  },
  {
    id: 'senior',
    icon: User,
    title: 'Senior Citizen Support',
    titleHi: 'वरिष्ठ नागरिक सहायता',
    description: 'Special care for elderly devotees',
    descriptionHi: 'बुजुर्ग भक्तों के लिए विशेष देखभाल',
    features: [
      'Priority darshan access',
      'Resting areas with seating',
      'Medical first aid support',
      'Drinking water facilities'
    ],
    featuresHi: [
      'प्राथमिकता दर्शन पहुंच',
      'बैठने के साथ विश्राम क्षेत्र',
      'चिकित्सा प्राथमिक चिकित्सा सहायता',
      'पीने का पानी सुविधाएं'
    ],
    duration: 'Full visit',
    available: true
  },
  {
    id: 'children',
    icon: Baby,
    title: 'Children Assistance',
    titleHi: 'बच्चों की सहायता',
    description: 'Support for families with young children',
    descriptionHi: 'छोटे बच्चों वाले परिवारों के लिए सहायता',
    features: [
      'Stroller rental service',
      'Baby feeding rooms',
      'Lost child assistance',
      'Child-friendly waiting zones'
    ],
    featuresHi: [
      'स्ट्रॉलर किराया सेवा',
      'शिशु आहार कक्ष',
      'खोए हुए बच्चे की सहायता',
      'बच्चों के अनुकूल प्रतीक्षा क्षेत्र'
    ],
    duration: 'Flexible',
    available: true
  }
];

const templeLocations = [
  { id: 'main-gate', name: 'Main Entrance Gate', nameHi: 'मुख्य प्रवेश द्वार' },
  { id: 'parking', name: 'Parking Area', nameHi: 'पार्किंग क्षेत्र' },
  { id: 'sanctum', name: 'Main Sanctum', nameHi: 'मुख्य गर्भगृह' },
  { id: 'hall', name: 'Prayer Hall', nameHi: 'प्रार्थना हॉल' },
  { id: 'office', name: 'Admin Office', nameHi: 'प्रशासन कार्यालय' }
];

const SpecialAssistance: React.FC<SpecialAssistanceProps> = ({ language }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    age: '',
    assistanceType: '',
    specialRequirements: ''
  });
  const [wheelchairRequest, setWheelchairRequest] = useState<WheelchairRequest>({
    pickupLocation: '',
    destination: '',
    urgency: 'normal',
    duration: 2
  });

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setUserDetails(prev => ({ ...prev, assistanceType: serviceId }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    setStep(4);
  };

  const getLocationName = (locationId: string) => {
    const location = templeLocations.find(loc => loc.id === locationId);
    if (!location) return locationId;
    return language.code === 'hi' ? location.nameHi : location.name;
  };

  const getServiceName = (serviceId: string) => {
    const service = assistanceOptions.find(s => s.id === serviceId);
    if (!service) return serviceId;
    return language.code === 'hi' ? service.titleHi : service.title;
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-700 mb-2">
              {language.code === 'hi' ? 'सहायता बुक हो गई!' : 'Assistance Booked!'}
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              {language.code === 'hi'
                ? 'आपकी सहायता सेवा सफलतापूर्वक बुक हो गई है'
                : 'Your assistance service has been successfully booked'}
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6 border-2 border-blue-200">
            <h3 className="font-bold text-lg text-blue-800 mb-4">
              {language.code === 'hi' ? 'बुकिंग विवरण' : 'Booking Details'}
            </h3>
            <div className="text-left space-y-2 text-gray-700">
              <p>
                <strong>{language.code === 'hi' ? 'सेवा:' : 'Service:'}</strong>{' '}
                {getServiceName(selectedService!)}
              </p>
              <p>
                <strong>{language.code === 'hi' ? 'नाम:' : 'Name:'}</strong> {userDetails.name}
              </p>
              <p>
                <strong>{language.code === 'hi' ? 'फोन:' : 'Phone:'}</strong> {userDetails.phone}
              </p>
              {selectedService === 'wheelchair' && (
                <>
                  <p>
                    <strong>{language.code === 'hi' ? 'पिकअप:' : 'Pickup:'}</strong>{' '}
                    {getLocationName(wheelchairRequest.pickupLocation)}
                  </p>
                  <p>
                    <strong>{language.code === 'hi' ? 'गंतव्य:' : 'Destination:'}</strong>{' '}
                    {getLocationName(wheelchairRequest.destination)}
                  </p>
                </>
              )}
              <p>
                <strong>{language.code === 'hi' ? 'बुकिंग ID:' : 'Booking ID:'}</strong> SA-2024-
                {Math.floor(Math.random() * 10000)}
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-2 border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-2">
              {language.code === 'hi' ? 'आगे के कदम:' : 'Next Steps:'}
            </h4>
            <p className="text-sm text-yellow-700">
              {language.code === 'hi'
                ? 'कृपया निर्दिष्ट स्थान पर समय पर पहुंचें। हमारा सहायता कर्मी आपकी प्रतीक्षा कर रहा होगा।'
                : 'Please arrive at the specified location on time. Our assistance staff will be waiting for you.'}
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all mb-4"
          >
            {language.code === 'hi' ? 'बुकिंग प्रिंट करें' : 'Print Booking'}
          </button>
        </div>
      </div>
    );
  }

  // The rest of your component JSX stays the same, just **all Wheelchair imports are now correct**.
  // Every <Wheelchair /> usage in JSX will work now.
  return (
    // <div className="min-h-screen p-8">
    //   {/* Rest of your code stays unchanged */}
    //   {/* Only ensure Wheelchair import at top is correct */}
    // </div>
    
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Wheelchair size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'विशेष सहायता' : 'Special Assistance'}
            </h1>
            <Wheelchair size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 
              'वरिष्ठ नागरिक, बच्चे और दिव्यांगजनों के लिए सहायता' : 
              'Assistance for Senior Citizens, Children & Differently Abled'
            }
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNumber ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 ${step > stepNumber ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'सहायता सेवा चुनें' : 'Select Assistance Service'}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {assistanceOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleServiceSelect(option.id)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        selectedService === option.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent size={32} className="text-red-600" />
                        {option.available ? (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {language.code === 'hi' ? 'उपलब्ध' : 'Available'}
                          </span>
                        ) : (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            {language.code === 'hi' ? 'अनुपलब्ध' : 'Unavailable'}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">
                        {language.code === 'hi' ? option.titleHi : option.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {language.code === 'hi' ? option.descriptionHi : option.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {(language.code === 'hi' ? option.featuresHi : option.features).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {option.duration}
                        </span>
                        <span className="text-green-600 font-medium">
                          {language.code === 'hi' ? 'निःशुल्क' : 'Free Service'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                disabled={!selectedService}
                className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
              </button>
            </div>
          )}

          {/* Step 2: Details Collection */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'व्यक्तिगत विवरण' : 'Personal Details'}
              </h2>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <p className="text-blue-800 font-medium">
                  <strong>{language.code === 'hi' ? 'चयनित सेवा:' : 'Selected Service:'}</strong> {getServiceName(selectedService!)}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your full name'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'फोन नंबर *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'फोन नंबर दर्ज करें' : 'Enter phone number'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'आयु *' : 'Age *'}
                  </label>
                  <input
                    type="number"
                    value={userDetails.age}
                    onChange={(e) => setUserDetails({...userDetails, age: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'आयु दर्ज करें' : 'Enter age'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'विशेष आवश्यकताएँ' : 'Special Requirements'}
                  </label>
                  <input
                    type="text"
                    value={userDetails.specialRequirements}
                    onChange={(e) => setUserDetails({...userDetails, specialRequirements: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'कोई विशेष आवश्यकता' : 'Any special requirements'}
                  />
                </div>
              </div>

              {/* Wheelchair Specific Form */}
              {selectedService === 'wheelchair' && (
                <div className="border-2 border-gray-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Wheelchair className="mr-2" size={20} />
                    {language.code === 'hi' ? 'व्हीलचेयर सेवा विवरण' : 'Wheelchair Service Details'}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        {language.code === 'hi' ? 'पिकअप स्थान *' : 'Pickup Location *'}
                      </label>
                      <select
                        value={wheelchairRequest.pickupLocation}
                        onChange={(e) => setWheelchairRequest({...wheelchairRequest, pickupLocation: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      >
                        <option value="">{language.code === 'hi' ? 'स्थान चुनें' : 'Select location'}</option>
                        {templeLocations.map(location => (
                          <option key={location.id} value={location.id}>
                            {language.code === 'hi' ? location.nameHi : location.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        {language.code === 'hi' ? 'गंतव्य स्थान *' : 'Destination Location *'}
                      </label>
                      <select
                        value={wheelchairRequest.destination}
                        onChange={(e) => setWheelchairRequest({...wheelchairRequest, destination: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      >
                        <option value="">{language.code === 'hi' ? 'स्थान चुनें' : 'Select location'}</option>
                        {templeLocations.map(location => (
                          <option key={location.id} value={location.id}>
                            {language.code === 'hi' ? location.nameHi : location.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        {language.code === 'hi' ? 'तात्कालिकता' : 'Urgency'}
                      </label>
                      <select
                        value={wheelchairRequest.urgency}
                        onChange={(e) => setWheelchairRequest({...wheelchairRequest, urgency: e.target.value as 'normal' | 'urgent'})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      >
                        <option value="normal">{language.code === 'hi' ? 'सामान्य' : 'Normal'}</option>
                        <option value="urgent">{language.code === 'hi' ? 'तत्काल' : 'Urgent'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        {language.code === 'hi' ? 'अवधि (घंटे)' : 'Duration (hours)'}
                      </label>
                      <select
                        value={wheelchairRequest.duration}
                        onChange={(e) => setWheelchairRequest({...wheelchairRequest, duration: parseInt(e.target.value)})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      >
                        <option value={1}>1 {language.code === 'hi' ? 'घंटा' : 'hour'}</option>
                        <option value={2}>2 {language.code === 'hi' ? 'घंटे' : 'hours'}</option>
                        <option value={3}>3 {language.code === 'hi' ? 'घंटे' : 'hours'}</option>
                        <option value={4}>4 {language.code === 'hi' ? 'घंटे' : 'hours'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Temple Map Section */}
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <MapPin className="mr-2" size={18} />
                      {language.code === 'hi' ? 'मंदिर मानचित्र' : 'Temple Map'}
                    </h4>
                    <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-300">
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        {templeLocations.map((location, index) => (
                          <div key={location.id} className="bg-white p-2 rounded border">
                            <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
                            <span className="font-medium">
                              {language.code === 'hi' ? location.nameHi : location.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-center text-sm text-gray-600">
                        {language.code === 'hi' ? 
                          'व्हीलचेयर सेवा सभी स्थानों पर उपलब्ध है' :
                          'Wheelchair service available at all locations'
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <button
                  onClick={handleBack}
                  className="bg-gray-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-600 transition-all"
                >
                  {language.code === 'hi' ? 'पीछे जाएँ' : 'Go Back'}
                </button>
                <button
                  onClick={handleNext}
                  disabled={!userDetails.name || !userDetails.phone || !userDetails.age || 
                           (selectedService === 'wheelchair' && (!wheelchairRequest.pickupLocation || !wheelchairRequest.destination))}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'बुकिंग की पुष्टि करें' : 'Confirm Booking'}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'बुकिंग सारांश' : 'Booking Summary'}
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'सेवा:' : 'Service:'}</span>
                      <span className="font-bold">{getServiceName(selectedService!)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'नाम:' : 'Name:'}</span>
                      <span className="font-medium">{userDetails.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'फोन:' : 'Phone:'}</span>
                      <span className="font-medium">{userDetails.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'आयु:' : 'Age:'}</span>
                      <span className="font-medium">{userDetails.age}</span>
                    </div>
                    
                    {selectedService === 'wheelchair' && (
                      <>
                        <div className="flex justify-between">
                          <span>{language.code === 'hi' ? 'पिकअप:' : 'Pickup:'}</span>
                          <span className="font-medium">{getLocationName(wheelchairRequest.pickupLocation)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language.code === 'hi' ? 'गंतव्य:' : 'Destination:'}</span>
                          <span className="font-medium">{getLocationName(wheelchairRequest.destination)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language.code === 'hi' ? 'तात्कालिकता:' : 'Urgency:'}</span>
                          <span className="font-medium capitalize">{wheelchairRequest.urgency}</span>
                        </div>
                      </>
                    )}

                    {userDetails.specialRequirements && (
                      <div className="flex justify-between">
                        <span>{language.code === 'hi' ? 'विशेष आवश्यकताएँ:' : 'Special Requirements:'}</span>
                        <span className="font-medium">{userDetails.specialRequirements}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'सेवा जानकारी' : 'Service Information'}
                  </h3>
                  <div className="space-y-4">
                    <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="text-green-600" size={24} />
                        <div>
                          <h4 className="font-medium text-green-900">
                            {language.code === 'hi' ? 'सुरक्षित सेवा' : 'Secure Service'}
                          </h4>
                          <p className="text-sm text-green-700">
                            {language.code === 'hi' ? 
                              'प्रशिक्षित कर्मचारियों द्वारा सहायता' : 
                              'Assistance by trained staff members'
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                      <h4 className="font-bold text-blue-800 mb-2">
                        {language.code === 'hi' ? 'सेवा नीति:' : 'Service Policy:'}
                      </h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• {language.code === 'hi' ? 'सभी सेवाएं निःशुल्क हैं' : 'All services are completely free'}</li>
                        <li>• {language.code === 'hi' ? 'समय पर पहुंचना आवश्यक है' : 'Arrive on time for your booking'}</li>
                        <li>• {language.code === 'hi' ? 'सहायता कर्मी आपकी प्रतीक्षा करेगा' : 'Assistance staff will be waiting for you'}</li>
                        <li>• {language.code === 'hi' ? 'आपात स्थिति में 108 पर कॉल करें' : 'Call 108 in case of emergency'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={handleBack}
                  className="bg-gray-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-600 transition-all"
                >
                  {language.code === 'hi' ? 'पीछे जाएँ' : 'Go Back'}
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all"
                >
                  {language.code === 'hi' ? 'सहायता बुक करें' : 'Book Assistance'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  
};

export default SpecialAssistance;
