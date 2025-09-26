import React, { useState } from 'react';
import { Heart, CreditCard, Shield, Receipt, CheckCircle } from 'lucide-react';
import type { Language } from '../App';

interface DonationsProps {
  language: Language;
}

interface DonationOption {
  amount: number;
  purpose: string;
  purposeHi: string;
  description: string;
  descriptionHi: string;
}

const donationOptions: DonationOption[] = [
  {
    amount: 101,
    purpose: 'General Offering',
    purposeHi: 'सामान्य चढ़ावा',
    description: 'Support temple maintenance',
    descriptionHi: 'मंदिर रखरखाव में सहायता'
  },
  {
    amount: 501,
    purpose: 'Prasadam Seva',
    purposeHi: 'प्रसादम सेवा',
    description: 'Sponsor daily prasadam',
    descriptionHi: 'दैनिक प्रसादम प्रायोजित करें'
  },
  {
    amount: 1100,
    purpose: 'Lighting & Decoration',
    purposeHi: 'प्रकाश और सजावट',
    description: 'Temple lighting and flowers',
    descriptionHi: 'मंदिर प्रकाश और फूल'
  },
  {
    amount: 2100,
    purpose: 'Special Puja',
    purposeHi: 'विशेष पूजा',
    description: 'Sponsor special ceremonies',
    descriptionHi: 'विशेष समारोह प्रायोजित करें'
  },
  {
    amount: 5100,
    purpose: 'Festival Celebration',
    purposeHi: 'त्योहार समारोह',
    description: 'Support festival arrangements',
    descriptionHi: 'त्योहार व्यवस्था में सहायता'
  },
  {
    amount: 11000,
    purpose: 'Annadanam',
    purposeHi: 'अन्नदानम्',
    description: 'Sponsor free meals for devotees',
    descriptionHi: 'भक्तों के लिए निःशुल्क भोजन'
  }
];

const Donations: React.FC<DonationsProps> = ({ language }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [donorDetails, setDonorDetails] = useState({
    name: '',
    phone: '',
    email: '',
    isAnonymous: false,
    needReceipt: true
  });
  const [step, setStep] = useState(1);
  const [isDonated, setIsDonated] = useState(false);

  const handleAmountSelect = (option: DonationOption) => {
    setSelectedAmount(option.amount);
    setSelectedPurpose(option.purpose);
    setCustomAmount('');
  };

  const handleCustomAmount = (amount: string) => {
    const numAmount = parseInt(amount);
    if (numAmount > 0) {
      setSelectedAmount(numAmount);
      setSelectedPurpose('General Offering');
      setCustomAmount(amount);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleDonate = () => {
    setIsDonated(true);
    setStep(4);
  };

  const getPurposeName = (purpose: string) => {
    const option = donationOptions.find(opt => opt.purpose === purpose);
    if (!option) return purpose;
    return language.code === 'hi' ? option.purposeHi : option.purpose;
  };

  if (isDonated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-700 mb-2">
              {language.code === 'hi' ? 'धन्यवाद!' : 'Thank You!'}
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              {language.code === 'hi' ? 'आपका दान सफलतापूर्वक प्राप्त हुआ' : 'Your donation has been received successfully'}
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200">
            <h3 className="font-bold text-lg text-yellow-800 mb-4">
              {language.code === 'hi' ? 'दान विवरण' : 'Donation Details'}
            </h3>
            <div className="text-left space-y-2 text-gray-700">
              <p><strong>{language.code === 'hi' ? 'राशि:' : 'Amount:'}</strong> ₹{selectedAmount}</p>
              <p><strong>{language.code === 'hi' ? 'उद्देश्य:' : 'Purpose:'}</strong> {getPurposeName(selectedPurpose)}</p>
              {!donorDetails.isAnonymous && (
                <>
                  <p><strong>{language.code === 'hi' ? 'नाम:' : 'Name:'}</strong> {donorDetails.name}</p>
                  <p><strong>{language.code === 'hi' ? 'फोन:' : 'Phone:'}</strong> {donorDetails.phone}</p>
                </>
              )}
              <p><strong>{language.code === 'hi' ? 'दान ID:' : 'Donation ID:'}</strong> DN-2024-{Math.floor(Math.random() * 10000)}</p>
            </div>
          </div>

          {donorDetails.needReceipt && (
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all mb-4">
              <Receipt className="inline mr-2" size={20} />
              {language.code === 'hi' ? 'रसीद प्रिंट करें' : 'Print Receipt'}
            </button>
          )}

          <p className="text-sm text-gray-600">
            {language.code === 'hi' ? 
              'आपका दान मंदिर की सेवाओं में योगदान देगा। भगवान आपको आशीर्वाद दें।' :
              'Your donation will contribute to temple services. May God bless you.'
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'दान और चढ़ावा' : 'Donations & Offerings'}
            </h1>
            <Heart size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 'सेवा में योगदान दें' : 'Contribute to temple services'}
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
          {/* Step 1: Amount Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'दान राशि चुनें' : 'Select Donation Amount'}
              </h2>

              {/* Preset Amounts */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {donationOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAmountSelect(option)}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedAmount === option.amount && !customAmount
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-red-900">₹{option.amount}</span>
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        🪔
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {language.code === 'hi' ? option.purposeHi : option.purpose}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language.code === 'hi' ? option.descriptionHi : option.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  {language.code === 'hi' ? 'अन्य राशि' : 'Custom Amount'}
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-600 text-lg">₹</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        placeholder={language.code === 'hi' ? 'राशि दर्ज करें' : 'Enter amount'}
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!selectedAmount}
                className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
              </button>
            </div>
          )}

          {/* Step 2: Donor Details */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'दाता विवरण' : 'Donor Details'}
              </h2>

              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <p className="text-yellow-800">
                  <strong>{language.code === 'hi' ? 'चयनित राशि:' : 'Selected Amount:'}</strong> ₹{selectedAmount}
                </p>
                <p className="text-yellow-700">
                  <strong>{language.code === 'hi' ? 'उद्देश्य:' : 'Purpose:'}</strong> {getPurposeName(selectedPurpose)}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={donorDetails.isAnonymous}
                    onChange={(e) => setDonorDetails({...donorDetails, isAnonymous: e.target.checked})}
                    className="w-5 h-5 text-red-600"
                  />
                  <label htmlFor="anonymous" className="text-gray-700 font-medium">
                    {language.code === 'hi' ? 'गुमनाम दान' : 'Anonymous Donation'}
                  </label>
                </div>

                {!donorDetails.isAnonymous && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        {language.code === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        value={donorDetails.name}
                        onChange={(e) => setDonorDetails({...donorDetails, name: e.target.value})}
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
                        value={donorDetails.phone}
                        onChange={(e) => setDonorDetails({...donorDetails, phone: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                        placeholder={language.code === 'hi' ? 'फोन नंबर दर्ज करें' : 'Enter phone number'}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        {language.code === 'hi' ? 'ईमेल (वैकल्पिक)' : 'Email (Optional)'}
                      </label>
                      <input
                        type="email"
                        value={donorDetails.email}
                        onChange={(e) => setDonorDetails({...donorDetails, email: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                        placeholder={language.code === 'hi' ? 'ईमेल दर्ज करें' : 'Enter email address'}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="receipt"
                    checked={donorDetails.needReceipt}
                    onChange={(e) => setDonorDetails({...donorDetails, needReceipt: e.target.checked})}
                    className="w-5 h-5 text-red-600"
                  />
                  <label htmlFor="receipt" className="text-gray-700 font-medium">
                    {language.code === 'hi' ? 'दान की रसीद चाहिए' : 'I need a donation receipt'}
                  </label>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!donorDetails.isAnonymous && (!donorDetails.name || !donorDetails.phone)}
                className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language.code === 'hi' ? 'आगे बढ़ें' : 'Continue'}
              </button>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'भुगतान' : 'Payment'}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'दान सारांश' : 'Donation Summary'}
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'राशि:' : 'Amount:'}</span>
                      <span className="font-bold">₹{selectedAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language.code === 'hi' ? 'उद्देश्य:' : 'Purpose:'}</span>
                      <span className="font-medium">{getPurposeName(selectedPurpose)}</span>
                    </div>
                    {!donorDetails.isAnonymous && (
                      <div className="flex justify-between">
                        <span>{language.code === 'hi' ? 'दाता:' : 'Donor:'}</span>
                        <span className="font-medium">{donorDetails.name}</span>
                      </div>
                    )}
                    <hr />
                    <div className="flex justify-between text-lg font-bold text-red-900">
                      <span>{language.code === 'hi' ? 'कुल राशि:' : 'Total Amount:'}</span>
                      <span>₹{selectedAmount}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'भुगतान विधि' : 'Payment Method'}
                  </h3>
                  <div className="space-y-4">
                    <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
                      <div className="flex items-center space-x-3 mb-4">
                        <CreditCard className="text-red-600" size={24} />
                        <div>
                          <h4 className="font-medium text-red-900">
                            {language.code === 'hi' ? 'काउंटर पर भुगतान' : 'Pay at Counter'}
                          </h4>
                          <p className="text-sm text-red-700">
                            {language.code === 'hi' ? 'मंदिर काउंटर पर नकद भुगतान करें' : 'Pay cash at temple donation counter'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-red-700">
                        <Shield size={16} />
                        <span>{language.code === 'hi' ? 'सुरक्षित और विश्वसनीय' : 'Safe and secure'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">
                  {language.code === 'hi' ? 'दान की नीति:' : 'Donation Policy:'}
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• {language.code === 'hi' ? 'सभी दान मंदिर की सेवाओं के लिए उपयोग होते हैं' : 'All donations are used for temple services'}</li>
                  <li>• {language.code === 'hi' ? '80G के तहत कर छूट उपलब्ध' : 'Tax deduction available under 80G'}</li>
                  <li>• {language.code === 'hi' ? 'दान राशि वापस नहीं की जाती' : 'Donations are non-refundable'}</li>
                  <li>• {language.code === 'hi' ? 'रसीद सुरक्षित रखें' : 'Keep receipt safe for records'}</li>
                </ul>
              </div>

              <button
                onClick={handleDonate}
                className="mt-8 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all"
              >
                {language.code === 'hi' ? 'दान की पुष्टि करें' : 'Confirm Donation'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donations;