
import { useState } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import UniversityGrid from '../components/UniversityGrid';
import QuickFilters from '../components/QuickFilters';
import HostelCard from '../components/HostelCard';
import HostelDetail from '../components/HostelDetail';
import { hostels, featuredHostels, Hostel } from '../data/hostels';
import { Bell, User } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedHostel, setSelectedHostel] = useState<Hostel | null>(null);
  const [searchResults, setSearchResults] = useState<Hostel[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const results = hostels.filter(hostel => 
        hostel.name.toLowerCase().includes(query.toLowerCase()) ||
        hostel.university.toLowerCase().includes(query.toLowerCase()) ||
        hostel.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const handleUniversitySelect = (university: string) => {
    const results = hostels.filter(hostel => hostel.university === university);
    setSearchResults(results);
    setIsSearching(true);
  };

  const handleFilterSelect = (filter: string) => {
    let results: Hostel[] = [];
    
    switch(filter) {
      case 'single':
        results = hostels.filter(hostel => hostel.room_types.includes('Single'));
        break;
      case 'shared':
        results = hostels.filter(hostel => 
          hostel.room_types.includes('Double') || hostel.room_types.includes('Triple')
        );
        break;
      case 'male':
        results = hostels.filter(hostel => hostel.gender === 'Male' || hostel.gender === 'Mixed');
        break;
      case 'female':
        results = hostels.filter(hostel => hostel.gender === 'Female' || hostel.gender === 'Mixed');
        break;
    }
    
    setSearchResults(results);
    setIsSearching(true);
  };

  if (selectedHostel) {
    return <HostelDetail hostel={selectedHostel} onBack={() => setSelectedHostel(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="gradient-bg text-white px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Nyumba Mbi</h1>
            <p className="text-blue-100">Find your perfect student home</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="px-4 py-6 space-y-6">
        {isSearching ? (
          /* Search Results */
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Search Results ({searchResults.length})
              </h2>
              <button 
                onClick={() => setIsSearching(false)}
                className="text-blue-primary font-medium"
              >
                Clear
              </button>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="grid gap-4">
                {searchResults.map((hostel) => (
                  <HostelCard 
                    key={hostel.id} 
                    hostel={hostel} 
                    onClick={() => setSelectedHostel(hostel)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No hostels found</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Quick Filters */}
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Search</h2>
              <QuickFilters onFilterSelect={handleFilterSelect} />
            </div>

            {/* Featured Hostels */}
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Hostels</h2>
              <div className="space-y-4">
                {featuredHostels.map((hostel) => (
                  <HostelCard 
                    key={hostel.id} 
                    hostel={hostel} 
                    onClick={() => setSelectedHostel(hostel)}
                  />
                ))}
              </div>
            </div>

            {/* Browse by University */}
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Browse by University</h2>
              <UniversityGrid onUniversitySelect={handleUniversitySelect} />
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
