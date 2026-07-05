
import F_2_1 from "../assets/images/found/f_2_1.png";
import F_2_2 from "../assets/images/found/f_2_2.png";
import F_1_1 from "../assets/images/found/f_1_1.jpg";
import F_1_2 from "../assets/images/found/f_1_2.jpg";
import F_1_3 from "../assets/images/found/f_1_3.jpg";
const foundPets = [ 
    {id: 1,
    images: [F_2_1,F_2_2],
    category: "Rabbit",
    breed: "Netherland Dwarf",
    gender: "Female",
    age: "1.5 Years",
    name: "NA",
    color: "Light Brown",
    description:
      "Found wandering near a public park. Calm and friendly. Seems well cared for.",
    location: "Bengaluru, Karnataka",
    date: "21 June 2025",
    time: "10:45 AM",

    founder: {
      name: "Rohit Singh",
      phone: "+91 9988776655",
      email: "rohit@gmail.com",
    },
  },

  {
    id: 2,
    images: [F_1_1, F_1_2, F_1_3],
    category: "Bird",
    breed: "Parrot",
    gender: "Unknown",
    age: "Unknown",
    weight: "",
    name: "NA",
    color: "Green",
    description:
      "Found sitting outside a house. Appears tame and comfortable around people.",
    location: "Delhi",
    date: "22 June 2025",
    time: "7:20 AM",

    founder: {
      name: "Anjali Mehta",
      phone: "+91 9876512345",
      email: "anjali@gmail.com",
    },
  },
];

export default foundPets;