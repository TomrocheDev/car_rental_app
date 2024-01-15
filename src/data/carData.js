import volkswagenUp from "../../public/images/models/vw_up.png";
import fordMondeo from "../../public/images/models/ford_mondeo.png";
import peugeot308 from "../../public/images/models/peugeot_308.png";
import toyotaCamry from "../../public/images/models/toyota_camry.png";
import volkswagenGolf from "../../public/images/models/vw_golf6.png";
import bmwx5 from "../../public/images/models/bmw_x5.png";

const cars = [
    {
        id: 1,
        name: "Volkswagen Up",
        img: volkswagenUp,
        pricePerDay: 22,
        model: "Up",
        brand: "Volkswagen",
        year: 2013,
        doors: 3,
        ac: true,
        transmission: "automatic",
        fuel: "hybrid",
    },
    {
        id: 2,
        name: "Ford Mondeo 1.6",
        img: fordMondeo,
        pricePerDay: 38,
        model: "Mondeo 1.6",
        brand: "Ford",
        year: 2018,
        doors: 5,
        ac: true,
        transmission: "manual",
        fuel: "diesel",
    },
    {
        id: 3,
        name: "BMW X5",
        img: bmwx5,
        pricePerDay: 56,
        model: "X5",
        brand: "BMW",
        year: 2021,
        doors: 5,
        ac: true,
        transmission: "automatic",
        fuel: "electric",
    },
    {
        id: 4,
        name: "Peugeot 308",
        img: peugeot308,
        pricePerDay: 42,
        model: "308",
        brand: "Peugeot",
        year: 2016,
        doors: 5,
        ac: true,
        transmission: "manual",
        fuel: "gasoline",
    },
    {
        id: 5,
        name: "Volkswagen Golf 6",
        img: volkswagenGolf,
        pricePerDay: 25,
        model: "Golf 6",
        brand: "volkswagen",
        year: 2016,
        doors: 5,
        ac: true,
        transmission: "manual",
        fuel: "hybrid",
    },
    {
        id: 6,
        name: "Toyota Camry",
        img: toyotaCamry,
        pricePerDay: 18,
        model: "Camry",
        brand: "Toyota",
        year: 2012,
        doors: 5,
        ac: false,
        transmission: "manual",
        fuel: "gasoline",
    },
];

export default cars;
