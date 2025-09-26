import React, { useState } from 'react';
import { MessageSquare, Star, Send, CheckCircle, ThumbsUp, Heart } from 'lucide-react';
import type { Language } from '../App';

interface FeedbackSectionProps {
  language: Language;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ language }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [category, setCategory] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const categories = [
    { id: 'general', name: 'General Experience', nameHi: 'सामान्य अनुभव' },
    { id: 'services', name: 'Temple Services', nameHi: 'मंदिर सेवाएं' },
    { id: 'cleanliness', name: 'Cleanliness', nameHi: 'स्वच्छता' },
    { id: 'staff', name: 'Staff Behavior', nameHi: 'कर्मचारी व्यवहार' },
    { id: 'facilities', name: 'Facilities', nameHi: 'सुविधाएं' },
    { id: 'accessibility', name: 'Accessibility', nameHi: 'सुगम्यता' }
  ];

  const ratingEmojis = ['😞', '😐', '🙂', '😊', '😍'];
  const ratingLabels = {
    1: { en: 'Very Poor', hi: 'बहुत खराब' },
    2: { en: 'Poor', hi: 'खराब' },
    3: { en: 'Average', hi: 'ठीक' },
    4: { en: 'Good', hi: 'अच्छा' },
    5: { en: 'Excellent', hi: 'उत्कृष्ट' }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      setIsSubmitted(true);
    }
  };

  const getCategoryName = (cat: any) => {
    return language.code === 'hi' ? cat.nameHi : cat.name;
  };

  const getRatingLabel = (score: number) => {
    const labels = ratingLabels[score as keyof typeof ratingLabels];
    return labels ? (language.code === 'hi' ? labels.hi : labels.en) : '';
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-green-700 mb-2">
              {language.code === 'hi' ? 'धन्यवाद!' : 'Thank You!'}
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">
              {language.code === 'hi' 
                ? 'आपकी प्रतिक्रिया हमारे लिए बहुत महत्वपूर्ण है।'
                : 'Your feedback is very valuable to us.'
              }
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200">
            <h3 className="font-bold text-lg text-yellow-800 mb-4">
              {language.code === 'hi' ? 'आपकी प्रतिक्रिया' : 'Your Feedback'}
            </h3>
            <div className="text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-yellow-700">
                  {language.code === 'hi' ? 'रेटिंग:' : 'Rating:'}
                </span>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="ml-2 text-yellow-700 font-medium">
                    {getRatingLabel(rating)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-700">
                  {language.code === 'hi' ? 'श्रेणी:' : 'Category:'}
                </span>
                <span className="text-yellow-700 font-medium">
                  {getCategoryName(categories.find(c => c.id === category))}
                </span>
              </div>
              <div className="text-yellow-700">
                <strong>{language.code === 'hi' ? 'फीडबैक ID:' : 'Feedback ID:'}</strong> FB-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000)}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-8 text-4xl">
              <div className="text-center">
                <Heart className="mx-auto text-red-500 mb-2" size={32} />
                <p className="text-sm text-gray-600">
                  {language.code === 'hi' ? 'आपका प्रेम' : 'Your Love'}
                </p>
              </div>
              <div className="text-center">
                <ThumbsUp className="mx-auto text-blue-500 mb-2" size={32} />
                <p className="text-sm text-gray-600">
                  {language.code === 'hi' ? 'हमारी प्रेरणा' : 'Our Motivation'}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              {language.code === 'hi' 
                ? 'आपकी प्रतिक्रिया से हम अपनी सेवाओं को और बेहतर बनाएंगे। भगवान आपको सुख और समृद्धि प्रदान करें।'
                : 'Your feedback will help us improve our services. May God bless you with happiness and prosperity.'
              }
            </p>
          </div>
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
            <MessageSquare size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'प्रतिक्रिया और सुझाव' : 'Feedback & Suggestions'}
            </h1>
            <MessageSquare size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 'आपका अनुभव हमारे लिए महत्वपूर्ण है' : 'Your experience matters to us'}
          </p>
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'अपना अनुभव रेट करें' : 'Rate Your Experience'}
              </h2>
              
              <div className="flex justify-center items-center space-x-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`group relative transition-all duration-200 ${
                      rating >= star ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div className="text-6xl mb-2">
                      {rating >= star ? '🌟' : '⭐'}
                    </div>
                    <Star 
                      size={60} 
                      className={`absolute inset-0 transition-all ${
                        rating >= star 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300 group-hover:text-yellow-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 inline-block">
                  <div className="text-4xl mb-2">{ratingEmojis[rating - 1]}</div>
                  <p className="text-lg font-bold text-yellow-800">
                    {getRatingLabel(rating)}
                  </p>
                </div>
              )}
            </div>

            {/* Category Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language.code === 'hi' ? 'प्रतिक्रिया की श्रेणी चुनें' : 'Select Feedback Category'}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      category === cat.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <h4 className="font-medium text-gray-800">
                      {getCategoryName(cat)}
                    </h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language.code === 'hi' ? 'अपनी बात विस्तार से बताएं' : 'Share Your Detailed Feedback'}
              </h3>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder={
                  language.code === 'hi' 
                    ? 'कृपया अपना अनुभव, सुझाव या शिकायत यहाँ लिखें...'
                    : 'Please share your experience, suggestions, or complaints here...'
                }
                rows={6}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none resize-none"
              />
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language.code === 'hi' ? 'संपर्क जानकारी (वैकल्पिक)' : 'Contact Information (Optional)'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language.code === 'hi' ? 'नाम' : 'Name'}
                  </label>
                  <input
                    type="text"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'आपका नाम' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language.code === 'hi' ? 'फोन नंबर' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'आपका फोन नंबर' : 'Your phone number'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language.code === 'hi' ? 'ईमेल' : 'Email'}
                  </label>
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder={language.code === 'hi' ? 'आपका ईमेल' : 'Your email'}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={rating === 0}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold py-4 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="flex items-center space-x-3">
                  <Send size={24} />
                  <span>{language.code === 'hi' ? 'प्रतिक्रिया भेजें' : 'Submit Feedback'}</span>
                </div>
              </button>
              
              {rating === 0 && (
                <p className="text-red-500 text-sm mt-2">
                  {language.code === 'hi' ? 'कृपया पहले रेटिंग दें' : 'Please provide a rating first'}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              {language.code === 'hi' ? 'हमारा वादा' : 'Our Promise'}
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'आपकी प्रतिक्रिया गुप्त रखी जाएगी' : 'Your feedback will be kept confidential'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? '48 घंटे में जवाब देने की कोशिश' : 'We try to respond within 48 hours'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{language.code === 'hi' ? 'आपके सुझावों को गंभीरता से लेते हैं' : 'We take your suggestions seriously'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              {language.code === 'hi' ? 'अन्य संपर्क माध्यम' : 'Other Contact Methods'}
            </h3>
            <div className="space-y-3 text-green-700">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>feedback@divinetemple.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91-123-456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>WhatsApp: +91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>
                  {language.code === 'hi' 
                    ? 'मुख्य कार्यालय, दिव्य मंदिर परिसर'
                    : 'Main Office, Divine Temple Complex'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;