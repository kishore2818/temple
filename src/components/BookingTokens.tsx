import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, CreditCard, FileText, CheckCircle } from 'lucide-react';
import type { Language } from '../App';

interface BookingTokensProps {
  language: Language;
}

interface Service {
  id: string;
  name: string;
  nameHi: string;
  price: number;
  duration: string;
  description: string;
  descriptionHi: string;
}

const services: Service[] = [
  {
    id: 'aarti',
    name: 'Special Aarti',
    nameHi: 'विशेष आरती',
    price: 500,
    duration: '30 mins',
    description: 'Personalized aarti ceremony',
    descriptionHi: 'व्यक्तिगत आरती समारोह'
  },
  {
    id: 'puja',
    name: 'Individual Puja',
    nameHi: 'व्यक्तिगत पूजा',
    price: 1100,
    duration: '45 mins',
    description: 'Complete puja ritual',
    descriptionHi: 'संपूर्ण पूजा विधि'
  },
  {
    id: 'abhishek',
    name: 'Rudrabhishek',
    nameHi: 'रुद्राभिषेक',
    price: 2100,
    duration: '1 hour',
    description: 'Sacred abhishek ceremony',
    descriptionHi: 'पवित्र अभिषेक समारोह'
  },
  {
    id: 'havan',
    name: 'Havan Ceremony',
    nameHi: 'हवन समारोह',
    price: 5100,
    duration: '2 hours',
    description: 'Fire ritual ceremony',
    descriptionHi: 'अग्नि अनुष्ठान समारोह'
  }
];

const BookingTokens: React.FC<BookingTokensProps> = ({ language }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gotra: '',
    participants: 1
  });
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    setIsBooked(true);
    setStep(5);
  };

  const getTitle = (service: Service) => {
    return language.code === 'hi' ? service.nameHi : service.name;
  };

  const getDescription = (service: Service) => {
    return language.code === 'hi' ? service.descriptionHi : service.description;
  };

  if (isBooked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-700 mb-2">
              {language.code === 'hi' ? 'बुकिंग सफल!' : 'Booking Confirmed!'}
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">
              {language.code === 'hi' ? 'बुकिंग विवरण' : 'Booking Details'}
            </h3>
            <div className="text-left space-y-2 text-gray-700">
              <p><strong>{language.code === 'hi' ? 'सेवा:' : 'Service:'}</strong> {getTitle(selectedService!)}</p>
              <p><strong>{language.code === 'hi' ? 'दिनांक:' : 'Date:'}</strong> {selectedDate}</p>
              <p><strong>{language.code === 'hi' ? 'समय:' : 'Time:'}</strong> {selectedTime}</p>
              <p><strong>{language.code === 'hi' ? 'नाम:' : 'Name:'}</strong> {formData.name}</p>
              <p><strong>{language.code === 'hi' ? 'फोन:' : 'Phone:'}</strong> {formData.phone}</p>
              <p><strong>{language.code === 'hi' ? 'कुल राशि:' : 'Total Amount:'}</strong> ₹{selectedService?.price}</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">
              {language.code === 'hi' ? 'टोकन संख्या' : 'Token Number'}
            </p>
            <p className="text-2xl font-bold text-red-800">TK-2024-{Math.floor(Math.random() * 10000)}</p>
          </div>

          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all">
            {language.code === 'hi' ? 'टोकन प्रिंट करें' : 'Print Token'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            {language.code === 'hi' ? 'सेवा बुकिंग' : 'Book Temple Services'}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto"></div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNumber ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 ${step > stepNumber ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'सेवा चुनें' : 'Select Service'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="text-left p-6 border-2 border-gray-200 rounded-xl hover:border-red-400 hover:shadow-lg transition-all group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-red-900 group-hover:text-red-700">
                        {getTitle(service)}
                      </h3>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        ₹{service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{getDescription(service)}</p>
                    <p className="text-sm text-red-600 font-medium">
                      {language.code === 'hi' ? 'अवधि:' : 'Duration:'} {service.duration}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && selectedService && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'दिनांक और समय चुनें' : 'Select Date & Time'}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {language.code === 'hi' ? 'चयनित सेवा:' : 'Selected Service:'}
                </h3>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-900">{getTitle(selectedService)}</h4>
                  <p className="text-red-700">₹{selectedService.price} - {selectedService.duration}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium text-gray-800 mb-3">
                    {language.code === 'hi' ? 'दिनांक चुनें' : 'Select Date'}
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-800 mb-3">
                    {language.code === 'hi' ? 'समय चुनें' : 'Select Time'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border-2 transition-all ${
                          selectedTime === time
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-red-600 border-red-200 hover:border-red-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
                className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
              </button>
            </div>
          )}

          {/* Step 3: Personal Details */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'व्यक्तिगत विवरण' : 'Personal Details'}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      placeholder={language.code === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your full name'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'फोन नंबर *' : 'Phone Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      placeholder={language.code === 'hi' ? '9876543210' : 'Enter phone number'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'ईमेल (वैकल्पिक)' : 'Email (Optional)'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                      placeholder={language.code === 'hi' ? 'your@email.com' : 'Enter email address'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    {language.code === 'hi' ? 'गोत्र (वैकल्पिक)' : 'Gotra (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.gotra}
                    onChange={(e) => setFormData({...formData, gotra: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'गोत्र दर्ज करें' : 'Enter gotra'}
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.phone}
                className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
              </button>
            </div>
          )}

          {/* Step 4: Payment & Confirmation */}
          {step === 4 && selectedService && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'भुगतान और पुष्टि' : 'Payment & Confirmation'}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'बुकिंग सारांश' : 'Booking Summary'}
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'सेवा:' : 'Service:'}</span>
                      <span className="font-medium">{getTitle(selectedService)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'दिनांक:' : 'Date:'}</span>
                      <span className="font-medium">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'समय:' : 'Time:'}</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'नाम:' : 'Name:'}</span>
                      <span className="font-medium">{formData.name}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold text-red-900">
                      <span>{language.code === 'hi' ? 'कुल राशि:' : 'Total Amount:'}</span>
                      <span>₹{selectedService.price}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'भुगतान विधि' : 'Payment Method'}
                  </h3>
                  <div className="space-y-4">
                    <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="text-red-600" size={24} />
                        <div>
                          <h4 className="font-medium text-red-900">
                            {language.code === 'hi' ? 'काउंटर पर भुगतान' : 'Pay at Counter'}
                          </h4>
                          <p className="text-sm text-red-700">
                            {language.code === 'hi' ? 'मंदिर काउंटर पर नकद भुगतान करें' : 'Pay cash at temple counter'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">
                  {language.code === 'hi' ? 'महत्वपूर्ण जानकारी:' : 'Important Information:'}
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• {language.code === 'hi' ? 'कृपया निर्धारित समय से 15 मिनट पहले पहुंचें' : 'Please arrive 15 minutes before scheduled time'}</li>
                  <li>• {language.code === 'hi' ? 'रद्द करने के लिए 2 घंटे पहले सूचना दें' : 'Cancellation requires 2 hours advance notice'}</li>
                  <li>• {language.code === 'hi' ? 'टोकन अनिवार्य रूप से साथ लाएं' : 'Token is mandatory to bring'}</li>
                </ul>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all"
              >
                {language.code === 'hi' ? 'बुकिंग की पुष्टि करें' : 'Confirm Booking'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingTokens;