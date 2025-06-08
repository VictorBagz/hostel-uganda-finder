
import { Users, User, Home } from 'lucide-react';

interface QuickFiltersProps {
  onFilterSelect: (filter: string) => void;
}

const QuickFilters = ({ onFilterSelect }: QuickFiltersProps) => {
  const filters = [
    { id: 'single', label: 'Single Rooms', icon: User, color: 'bg-blue-50 text-blue-primary' },
    { id: 'shared', label: 'Shared Rooms', icon: Users, color: 'bg-green-50 text-green-600' },
    { id: 'male', label: 'For Male', icon: Home, color: 'bg-purple-50 text-purple-600' },
    { id: 'female', label: 'For Female', icon: Home, color: 'bg-pink-50 text-pink-600' }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {filters.map(({ id, label, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => onFilterSelect(id)}
          className={`${color} border border-gray-200 rounded-xl p-3 flex items-center justify-center space-x-2 hover:shadow-md transition-all duration-200 transform hover:scale-105`}
        >
          <Icon size={18} />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickFilters;
