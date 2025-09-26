import React, { useState } from 'react';
import { 
  HelpCircle, 
  Phone, 
  MapPin, 
  Accessibility, 
  Heart, 
  ShieldCheck,
  Clock,
  User,
  AlertTriangle
} from 'lucide-react';
import type { Language } from '../App';

interface HelpAssistanceProps {
  language: Language;
}

interface StaffMember {
  name: string;
  role: string;
  roleHi: string;
  phone: string;
  available: boolean;
}

const staffMembers: StaffMember[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Head Priest',
    roleHi: 'मुख्य पुजारी',
    phone: '+91-9876543210',
    available: true
  },
  {
    name: 'Sunita Devi',
    role: 'Guest Relations',
    roleHi: 'अतिथि संबंध',
    phone: '+91-9876543211',
    available: true
  },
  {
    name: 'Mohan Singh',
    role: 'Security Head',
    roleHi: 'सुरक्षा प्रमुख',
    phone: '+91-9876543212',
    available: false
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Medical Officer',
    roleHi: 'चिकित्सा अधिकारी',
    phone: '+91-9876543213',
    available: true
  }
];

const HelpAssistance: React.FC<HelpAssistanceProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<'emergency' | 'accessibility' | 'services' | 'contact'>('emergency');

  const getStaffRole = (staff: StaffMember) => {
    return language.code === 'hi' ? staff.roleHi : staff.role;
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle size={40} className="text-red-800 mr-3" />
            <h1 className="text-4xl font-bold text-red-900">
              {language.code === 'hi' ? 'सहायता और सेवा' : 'Help & Assistance'}
            </h1>
            <HelpCircle size={40} className="text-red-800 ml-3" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-red-800 mx-auto mb-4"></div>
          <p className="text-xl text-red-700">
            {language.code === 'hi' ? 'आपकी सेवा में हमेशा तत्पर' : 'Always ready to serve you'}
          </p>
        </div>

        {/* Emergency Contact - Prominent */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle size={40} className="mr-3 animate-pulse" />
            <h2 className="text-3xl font-bold">
              {language.code === 'hi' ? 'आपातकालीन संपर्क' : 'Emergency Contact'}
            </h2>
          </div>
          <div className="text-center">
            <a 
              href="tel:108"
              className="inline-block bg-white text-red-600 text-2xl font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors shadow-lg"
            >
              <Phone className="inline mr-2" size={24} />
              108 - {language.code === 'hi' ? 'तत्काल सहायता' : 'Immediate Help'}
            </a>
            <p className="mt-4 text-red-100">
              {language.code === 'hi' 
                ? 'किसी भी आपात स्थिति में तुरंत कॉल करें'
                : 'Call immediately in any emergency'
              }
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-lg p-1">
          <button
            onClick={() => setSelectedCategory('emergency')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              selectedCategory === 'emergency'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle size={20} />
              <span>{language.code === 'hi' ? 'आपातकाल' : 'Emergency'}</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory('accessibility')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              selectedCategory === 'accessibility'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Accessibility size={20} />
              <span>{language.code === 'hi' ? 'सुगम्यता' : 'Accessibility'}</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory('services')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              selectedCategory === 'services'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Heart size={20} />
              <span>{language.code === 'hi' ? 'सेवाएं' : 'Services'}</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory('contact')}
            className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg font-medium transition-all ${
              selectedCategory === 'contact'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>{language.code === 'hi' ? 'संपर्क' : 'Contact'}</span>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Emergency Tab */}
          {selectedCategory === 'emergency' && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'आपातकालीन सेवाएं' : 'Emergency Services'}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Heart size={24} className="text-red-600 mr-3" />
                      <h3 className="text-lg font-bold text-red-800">
                        {language.code === 'hi' ? 'चिकित्सा आपातकाल' : 'Medical Emergency'}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-red-700">
                          {language.code === 'hi' ? 'एम्बुलेंस:' : 'Ambulance:'}
                        </span>
                        <a href="tel:108" className="text-red-600 font-bold hover:underline">108</a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-red-700">
                          {language.code === 'hi' ? 'मंदिर डॉक्टर:' : 'Temple Doctor:'}
                        </span>
                        <a href="tel:+919876543213" className="text-red-600 font-bold hover:underline">+91-98765-43213</a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <ShieldCheck size={24} className="text-blue-600 mr-3" />
                      <h3 className="text-lg font-bold text-blue-800">
                        {language.code === 'hi' ? 'सुरक्षा सेवा' : 'Security Service'}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-700">
                          {language.code === 'hi' ? 'पुलिस:' : 'Police:'}
                        </span>
                        <a href="tel:100" className="text-blue-600 font-bold hover:underline">100</a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-700">
                          {language.code === 'hi' ? 'मंदिर सुरक्षा:' : 'Temple Security:'}
                        </span>
                        <a href="tel:+919876543212" className="text-blue-600 font-bold hover:underline">+91-98765-43212</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-4">
                    {language.code === 'hi' ? 'आपातकालीन सुविधाएं' : 'Emergency Facilities'}
                  </h3>
                  <ul className="space-y-3 text-yellow-700">
                    <li className="flex items-start space-x-2">
                      <MapPin size={16} className="text-yellow-600 mt-1" />
                      <span>
                        {language.code === 'hi' 
                          ? 'प्राथमिक चिकित्सा केंद्र - मुख्य प्रवेश के पास'
                          : 'First Aid Center - Near main entrance'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <MapPin size={16} className="text-yellow-600 mt-1" />
                      <span>
                        {language.code === 'hi'
                          ? 'अग्निशमन उपकरण - हर मंजिल पर'
                          : 'Fire extinguishers - On every floor'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <MapPin size={16} className="text-yellow-600 mt-1" />
                      <span>
                        {language.code === 'hi'
                          ? 'आपातकालीन निकास - सभी दिशाओं में'
                          : 'Emergency exits - In all directions'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <MapPin size={16} className="text-yellow-600 mt-1" />
                      <span>
                        {language.code === 'hi'
                          ? '24x7 सुरक्षा गार्ड - मंदिर परिसर में'
                          : '24x7 Security guards - Temple premises'
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Accessibility Tab */}
          {selectedCategory === 'accessibility' && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'सुगम्यता सुविधाएं' : 'Accessibility Features'}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                  <Accessibility size={40} className="text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800 mb-2">
                    {language.code === 'hi' ? 'व्हीलचेयर सुविधा' : 'Wheelchair Access'}
                  </h3>
                  <p className="text-green-700 text-sm">
                    {language.code === 'hi'
                      ? 'पूर्ण व्हीलचेयर सुगम रैंप और पथ'
                      : 'Full wheelchair accessible ramps and paths'
                    }
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
                  <User size={40} className="text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800 mb-2">
                    {language.code === 'hi' ? 'सहायक कर्मचारी' : 'Assistance Staff'}
                  </h3>
                  <p className="text-blue-700 text-sm">
                    {language.code === 'hi'
                      ? 'विशेष आवश्यकताओं के लिए प्रशिक्षित कर्मचारी'
                      : 'Trained staff for special needs'
                    }
                  </p>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center">
                  <MapPin size={40} className="text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800 mb-2">
                    {language.code === 'hi' ? 'विशेष पार्किंग' : 'Special Parking'}
                  </h3>
                  <p className="text-purple-700 text-sm">
                    {language.code === 'hi'
                      ? 'दिव्यांगजनों के लिए आरक्षित पार्किंग'
                      : 'Reserved parking for disabled persons'
                    }
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'उपलब्ध सुविधाएं' : 'Available Facilities'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'ब्रेल साइनेज' : 'Braille signage'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'ऑडियो गाइड' : 'Audio guides'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'सुगम शौचालय' : 'Accessible restrooms'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'एलिवेटर सुविधा' : 'Elevator access'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'गाइड कुत्ता अनुमति' : 'Guide dog permitted'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'सहायता प्राप्त करें' : 'Get Assistance'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language.code === 'hi'
                      ? 'किसी भी सहायता के लिए संपर्क करें:'
                      : 'Contact for any assistance:'
                    }
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'सहायता डेस्क:' : 'Help Desk:'}
                      </span>
                      <a href="tel:+919876543211" className="text-blue-600 font-bold hover:underline">
                        +91-98765-43211
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">
                        {language.code === 'hi' ? 'व्हीलचेयर बुकिंग:' : 'Wheelchair Booking:'}
                      </span>
                      <span className="text-green-600 font-bold">
                        {language.code === 'hi' ? 'निःशुल्क' : 'Free'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {selectedCategory === 'services' && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'मंदिर सेवाएं' : 'Temple Services'}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                  <Clock size={32} className="text-yellow-600 mb-3" />
                  <h3 className="font-bold text-yellow-800 mb-2">
                    {language.code === 'hi' ? 'समय सूचना' : 'Timing Information'}
                  </h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    {language.code === 'hi'
                      ? 'दर्शन और पूजा के समय की जानकारी'
                      : 'Darshan and puja timing information'
                    }
                  </p>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• {language.code === 'hi' ? 'प्रातः दर्शन: 5:00 AM - 12:00 PM' : 'Morning Darshan: 5:00 AM - 12:00 PM'}</li>
                    <li>• {language.code === 'hi' ? 'सायं दर्शन: 4:00 PM - 9:30 PM' : 'Evening Darshan: 4:00 PM - 9:30 PM'}</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <Heart size={32} className="text-red-600 mb-3" />
                  <h3 className="font-bold text-red-800 mb-2">
                    {language.code === 'hi' ? 'पूजा सेवा' : 'Puja Services'}
                  </h3>
                  <p className="text-red-700 text-sm mb-3">
                    {language.code === 'hi'
                      ? 'विशेष पूजा और अनुष्ठान की व्यवस्था'
                      : 'Special puja and ritual arrangements'
                    }
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• {language.code === 'hi' ? 'व्यक्तिगत पूजा' : 'Individual puja'}</li>
                    <li>• {language.code === 'hi' ? 'विशेष आरती' : 'Special aarti'}</li>
                    <li>• {language.code === 'hi' ? 'हवन समारोह' : 'Havan ceremony'}</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <MapPin size={32} className="text-green-600 mb-3" />
                  <h3 className="font-bold text-green-800 mb-2">
                    {language.code === 'hi' ? 'सुविधा स्थान' : 'Facility Locations'}
                  </h3>
                  <p className="text-green-700 text-sm mb-3">
                    {language.code === 'hi'
                      ? 'महत्वपूर्ण स्थानों की जानकारी'
                      : 'Information about important locations'
                    }
                  </p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• {language.code === 'hi' ? 'शौचालय' : 'Restrooms'}</li>
                    <li>• {language.code === 'hi' ? 'पार्किंग' : 'Parking'}</li>
                    <li>• {language.code === 'hi' ? 'प्रसादम् काउंटर' : 'Prasadam counter'}</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <User size={32} className="text-blue-600 mb-3" />
                  <h3 className="font-bold text-blue-800 mb-2">
                    {language.code === 'hi' ? 'गाइड सेवा' : 'Guide Service'}
                  </h3>
                  <p className="text-blue-700 text-sm mb-3">
                    {language.code === 'hi'
                      ? 'मंदिर की जानकारी के लिए गाइड'
                      : 'Temple information guide service'
                    }
                  </p>
                  <div className="text-sm text-blue-600">
                    <p>{language.code === 'hi' ? 'संपर्क:' : 'Contact:'} +91-98765-43211</p>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                  <Phone size={32} className="text-purple-600 mb-3" />
                  <h3 className="font-bold text-purple-800 mb-2">
                    {language.code === 'hi' ? 'सूचना सेवा' : 'Information Service'}
                  </h3>
                  <p className="text-purple-700 text-sm mb-3">
                    {language.code === 'hi'
                      ? 'मंदिर संबंधी सभी जानकारी'
                      : 'All temple related information'
                    }
                  </p>
                  <div className="text-sm text-purple-600">
                    <p>{language.code === 'hi' ? 'हॉटलाइन:' : 'Hotline:'} 1800-123-4567</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                  <ShieldCheck size={32} className="text-orange-600 mb-3" />
                  <h3 className="font-bold text-orange-800 mb-2">
                    {language.code === 'hi' ? 'सामान सुरक्षा' : 'Baggage Security'}
                  </h3>
                  <p className="text-orange-700 text-sm mb-3">
                    {language.code === 'hi'
                      ? 'सामान की सुरक्षित रखरखाव सुविधा'
                      : 'Safe baggage keeping facility'
                    }
                  </p>
                  <div className="text-sm text-orange-600">
                    <p>{language.code === 'hi' ? 'शुल्क:' : 'Fee:'} ₹20/{language.code === 'hi' ? 'दिन' : 'day'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {selectedCategory === 'contact' && (
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-6">
                {language.code === 'hi' ? 'संपर्क विवरण' : 'Contact Details'}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'मंदिर कर्मचारी' : 'Temple Staff'}
                  </h3>
                  <div className="space-y-4">
                    {staffMembers.map((staff, index) => (
                      <div key={index} className={`border-2 rounded-lg p-4 ${
                        staff.available ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-800">{staff.name}</h4>
                            <p className="text-gray-600 text-sm">{getStaffRole(staff)}</p>
                          </div>
                          <div className="text-right">
                            <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              staff.available 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {staff.available 
                                ? (language.code === 'hi' ? 'उपलब्ध' : 'Available')
                                : (language.code === 'hi' ? 'व्यस्त' : 'Busy')
                              }
                            </div>
                            {staff.available && (
                              <a 
                                href={`tel:${staff.phone}`}
                                className="block text-blue-600 font-bold text-sm mt-1 hover:underline"
                              >
                                {staff.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {language.code === 'hi' ? 'मुख्य संपर्क' : 'Main Contacts'}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                      <h4 className="font-bold text-red-800 mb-2">
                        {language.code === 'hi' ? 'मुख्य कार्यालय' : 'Main Office'}
                      </h4>
                      <div className="space-y-2 text-red-700">
                        <div className="flex items-center space-x-2">
                          <Phone size={16} />
                          <a href="tel:+911234567890" className="hover:underline">+91-123-456-7890</a>
                        </div>
                        <div className="flex items-start space-x-2">
                          <MapPin size={16} className="mt-1" />
                          <span className="text-sm">
                            {language.code === 'hi'
                              ? 'दिव्य मंदिर, मुख्य मार्ग, धार्मिक नगर, भारत - 123456'
                              : 'Divine Temple, Main Road, Religious City, India - 123456'
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-blue-800 mb-2">
                        {language.code === 'hi' ? 'कार्य समय' : 'Office Hours'}
                      </h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• {language.code === 'hi' ? 'सोमवार - शुक्रवार: 9:00 AM - 6:00 PM' : 'Monday - Friday: 9:00 AM - 6:00 PM'}</li>
                        <li>• {language.code === 'hi' ? 'शनिवार - रविवार: 8:00 AM - 8:00 PM' : 'Saturday - Sunday: 8:00 AM - 8:00 PM'}</li>
                        <li>• {language.code === 'hi' ? 'त्योहारों पर विशेष समय' : 'Special hours during festivals'}</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                      <h4 className="font-bold text-yellow-800 mb-2">
                        {language.code === 'hi' ? 'ऑनलाइन संपर्क' : 'Online Contact'}
                      </h4>
                      <div className="space-y-2 text-yellow-700 text-sm">
                        <p>Email: info@divinetemple.org</p>
                        <p>Website: www.divinetemple.org</p>
                        <p>WhatsApp: +91-98765-43210</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid md:grid-cols-4 gap-4">
                <a 
                  href="tel:+911234567890"
                  className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  <Phone className="mx-auto mb-1" size={20} />
                  {language.code === 'hi' ? 'कॉल करें' : 'Call Now'}
                </a>
                <a 
                  href="https://wa.me/919876543210"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  <Phone className="mx-auto mb-1" size={20} />
                  {language.code === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}
                </a>
                <a 
                  href="mailto:info@divinetemple.org"
                  className="bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  <Phone className="mx-auto mb-1" size={20} />
                  {language.code === 'hi' ? 'ईमेल' : 'Email'}
                </a>
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  <MapPin className="mx-auto mb-1" size={20} />
                  {language.code === 'hi' ? 'दिशा-निर्देश' : 'Directions'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpAssistance;