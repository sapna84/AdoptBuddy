import pet1mimiImg from "../assets/images/pets/pet1mimi.png";
import pet2maxImg from "../assets/images/pets/pet2max.png";
import pet3binkyImg from "../assets/images/pets/pet3binky.png";
import pet4stellaImg from "../assets/images/pets/pet4stella.png";
import pet5mochiImg from "../assets/images/pets/pet5mochi.png";

const pets = [
  {
    id: 1,
    name: "Mimi",
    breed: "Domestic Shorthair",
    age: "9 months old",
    gender:"Female",
    location:"Goa",
    image: pet1mimiImg,
    featured: true,
    isNew: true,

      ownerName: "Rahul Sharma",
  ownerPhone: "9876543210",
  ownerEmail: "rahul@gmail.com",
  },
  {
    id: 2,
    name: "Max",
    breed: "Golden Retriever",
    age: "4 months old",
    gender:"Male",
    location:"Jaipur",
    image: pet2maxImg,
    featured: true,
    isNew: false,

      ownerName: "Rahul Sharma",
  ownerPhone: "9876543210",
  ownerEmail: "rahul@gmail.com",
  },
  {
    id: 3,
    name: "Binky",
    breed: "Holland Lop Rabbit",
    age: "5 Months old",
    gender:"Female",
    location:"Delhi NCR",
    image: pet3binkyImg,
    featured: false,
    isNew: true,

  ownerName: "Rahul Sharma",
  ownerPhone: "9876543210",
  ownerEmail: "rahul@gmail.com",
  },
  {
    id: 4,
    name: "Stella",
    breed: "Syrian Hamster",
    age: "6 months old",
    gender:"Female",
    location:"Mumbai",
    image: pet4stellaImg,
    featured: true,
    isNew: false,

      ownerName: "Rahul Sharma",
  ownerPhone: "9876543210",
  ownerEmail: "rahul@gmail.com",
  },
   {
    id: 5,
    name: "Mochi",
    breed: "Netherland Dwarf",
    age: "1.5 Years old",
    gender:"Female (Deo)",
    location:"Bengaluru",
    image: pet5mochiImg,
    featured: true,
    isNew: true,

      ownerName: "Rahul Sharma",
  ownerPhone: "9876543210",
  ownerEmail: "rahul@gmail.com",
  },

];

export default pets;