
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search hostels or universities..." }: SearchBarProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-all duration-200"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
