
import { ArrowLeft, Star, MapPin, Phone, Heart, Calendar } from 'lucide-react';
import { Hostel } from '../data/hostels';

interface HostelDetailProps {
  hostel: Hostel;
  onBack: () => void;
}

const HostelDetail = ({ hostel, onBack }: HostelDetailProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative">
        <img 
          src={hostel.image_url} 
          alt={hostel.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        
        {/* Favorite button */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200">
          <Heart size={20} className="text-gray-700 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Basic Info */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{hostel.name}</h1>
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
              <Star size={16} className="text-yellow-500 fill-current mr-1" />
              <span className="font-semibold text-yellow-700">{hostel.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" />
            <span>{hostel.distance} • {hostel.university}</span>
          </div>
          
          <div className="text-xl font-bold text-blue-primary mb-4">
            {hostel.price_range}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-3">About this place</h2>
          <p className="text-gray-600 leading-relaxed">{hostel.description}</p>
        </div>

        {/* Room Types */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-3">Room Types</h2>
          <div className="flex flex-wrap gap-2">
            {hostel.room_types.map((type, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-primary px-3 py-2 rounded-lg font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-3">Amenities</h2>
          <div className="grid grid-cols-2 gap-3">
            {hostel.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-3">Contact Information</h2>
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-gray-600" />
            <span className="text-gray-700">{hostel.contact}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pb-20">
          <button className="bg-white border border-blue-primary text-blue-primary py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            <Phone size={20} className="inline mr-2" />
            Call Now
          </button>
          <button className="coral-gradient text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            <Calendar size={20} className="inline mr-2" />
            Book Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;
