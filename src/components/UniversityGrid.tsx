
import { universities } from '../data/hostels';

interface UniversityGridProps {
  onUniversitySelect: (university: string) => void;
}

const UniversityGrid = ({ onUniversitySelect }: UniversityGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {universities.map((university, index) => (
        <button
          key={index}
          onClick={() => onUniversitySelect(university)}
          className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-blue-primary hover:shadow-md transition-all duration-200 group"
        >
          <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-primary transition-colors">
            {university}
          </h3>
        </button>
      ))}
    </div>
  );
};

export default UniversityGrid;
