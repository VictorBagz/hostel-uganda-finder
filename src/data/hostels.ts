
export interface Hostel {
  id: string;
  name: string;
  university: string;
  distance: string;
  price_range: string;
  rating: number;
  image_url: string;
  description: string;
  amenities: string[];
  room_types: string[];
  gender: string;
  contact: string;
  location: {
    lat: number;
    lng: number;
  };
}

export const universities = [
  "Makerere University",
  "Kyambogo University", 
  "Mbarara University of Science and Technology",
  "Uganda Christian University",
  "Islamic University in Uganda",
  "Busitema University",
  "Gulu University",
  "Uganda Martyrs University"
];

export const hostels: Hostel[] = [
  {
    id: "1",
    name: "Kare Hostel",
    university: "Makerere University",
    distance: "500m from main gate",
    price_range: "500,000 - 800,000 UGX",
    rating: 4.5,
    image_url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    description: "Modern hostel with excellent facilities and 24/7 security. Perfect for serious students who value comfort and peace of mind.",
    amenities: ["WiFi", "24/7 Security", "Water Supply", "Electricity", "Kitchenette", "Study Room"],
    room_types: ["Single", "Double"],
    gender: "Mixed",
    contact: "+256 700 123 456",
    location: { lat: 0.3476, lng: 32.5825 }
  },
  {
    id: "2", 
    name: "Nana's Haven",
    university: "Makerere University",
    distance: "800m from campus",
    price_range: "400,000 - 600,000 UGX",
    rating: 4.2,
    image_url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "Cozy and affordable accommodation with a homely atmosphere. Great for students looking for value for money.",
    amenities: ["WiFi", "Security", "Water Supply", "Shared Kitchen"],
    room_types: ["Single", "Double", "Triple"],
    gender: "Female",
    contact: "+256 700 234 567",
    location: { lat: 0.3486, lng: 32.5835 }
  },
  {
    id: "3",
    name: "Campus View Lodge",
    university: "Kyambogo University", 
    distance: "300m from main campus",
    price_range: "350,000 - 550,000 UGX",
    rating: 4.0,
    image_url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    description: "Budget-friendly accommodation with basic amenities. Close to campus with easy access to university facilities.",
    amenities: ["Security", "Water Supply", "Electricity", "Parking"],
    room_types: ["Single", "Double"],
    gender: "Male",
    contact: "+256 700 345 678",
    location: { lat: 0.4089, lng: 32.6147 }
  },
  {
    id: "4",
    name: "Royal Suites",
    university: "Makerere University",
    distance: "1.2km from campus",
    price_range: "800,000 - 1,200,000 UGX",
    rating: 4.8,
    image_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    description: "Premium accommodation with luxury amenities. Perfect for students who want the best living experience.",
    amenities: ["WiFi", "24/7 Security", "AC", "In-room Bathroom", "Kitchenette", "Gym", "Laundry"],
    room_types: ["Single"],
    gender: "Mixed",
    contact: "+256 700 456 789",
    location: { lat: 0.3456, lng: 32.5805 }
  },
  {
    id: "5",
    name: "Student Palace",
    university: "Uganda Christian University",
    distance: "400m from campus",
    price_range: "450,000 - 650,000 UGX",
    rating: 4.3,
    image_url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    description: "Well-maintained hostel with good security and peaceful environment. Ideal for focused academic work.",
    amenities: ["WiFi", "Security", "Water Supply", "Electricity", "Study Room", "Prayer Room"],
    room_types: ["Single", "Double"],
    gender: "Mixed",
    contact: "+256 700 567 890",
    location: { lat: 0.3167, lng: 32.6167 }
  }
];

export const featuredHostels = hostels.slice(0, 3);
