import L_2_1 from "../assets/images/lost/l_2_1.png";
import L_2_2 from "../assets/images/lost/l_2_2.png";
import L_1_1 from "../assets/images/lost/l_1_1.png";
import L_1_2 from "../assets/images/lost/l_1_2.png";
const lostPets = [
  {
  id: 1,

    images: [L_2_1,L_2_2],

    category: "Dog",
    breed: "Golden Retriever",
    gender: "Male",
    age: "4 Months",

    name: "Max",

    color: "Golden",

    description:
      "Friendly puppy wearing a red collar. Last seen near Civil Lines. Responds to the name Max.",


    location: "25, Navy Colony, Civil Lines, Jaipur",
    date: "15 June 2025",
    time: "5:30 PM",

    owner: {
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      email: "rahul@gmail.com",
    },
  },

  {
    id: 2,

    images: [L_1_1,L_1_2],

    category: "Cat",
    breed: "Domestic Shorthair",
    gender: "Female",
    age: "2 Years",

    name: "Mochi",

    color: "Brown Tabby",

    description:
      "Very friendly indoor cat. Wearing a pink collar. Missing since yesterday evening.",


    location: "Pune, Maharashtra",
    date: "18 June 2025",
    time: "8:00 PM",

    owner: {
      name: "Priya Verma",
      phone: "+91 9123456780",
      email: "priya@gmail.com",
    },
  },
];

export default lostPets;