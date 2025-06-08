
import { Star, MapPin } from 'lucide-react';
import { Hostel } from '../data/hostels';

interface HostelCardProps {
  hostel: Hostel;
  onClick: () => void;
}

const HostelCard = ({ hostel, onClick }: HostelCardProps) => {
  return (
    <div 
      className="hostel-card cursor-pointer transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={hostel.image_url} 
          alt={hostel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
          <Star size={14} className="text-yellow-500 fill-current mr-1" />
          <span className="text-xs font-semibold">{hostel.rating}</span>
        </div>
        <div className="absolute top-3 left-3 bg-blue-primary text-white px-2 py-1 rounded-full text-xs font-medium">
          {hostel.gender}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{hostel.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={14} className="mr-1" />
          <span className="text-sm">{hostel.distance}</span>
        </div>
        
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{hostel.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {hostel.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {amenity}
            </span>
          ))}
          {hostel.amenities.length > 3 && (
            <span className="text-xs text-gray-500">+{hostel.amenities.length - 3} more</span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-primary">{hostel.price_range}</span>
          <span className="text-xs text-gray-500">{hostel.university}</span>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
