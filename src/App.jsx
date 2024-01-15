// Components
import CarBookForm from "./components/CarBookForm/CarBookForm";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import StepsSection from "./components/StepsSection/StepsSection";
import Vehicles from "./components/Vehicles/Vehicles";
import VehiclesHeader from "./components/Vehicles/VehiclesHeader/VehiclesHeader";
import HeroBg from "./components/Hero/HeroBg/HeroBg";
import HeroHeader from "./components/Hero/HeroHeader/HeroHeader";
import HeroImage from "./components/Hero/HeroImage/HeroImage";
import VehiclesList from "./components/Vehicles/VehiclesList/VehiclesList";
import VehicleImage from "./components/Vehicles/VehicleImage/VehicleImage";
import VehicleSpecs from "./components/Vehicles/VehicleSpecs/VehicleSpecs";

// Contexts
import { CarProvider } from "./context/carContext";

const data = [
    {
        icon: "/svgs/car-drive-right.svg",
        text: "Select car type",
        type: "select",
        options: [
            "Volkswagen Up",
            "Ford Mondeo 1.6",
            "BMW X5",
            "Peugeot 308",
            "Volkswagen Golf 6",
            "Toyota Camry",
        ],
    },
    {
        icon: "/svgs/location.svg",
        text: "Select your pickup location",
        type: "select",
        options: ["Amsterdam", "Rotterdam", "Den Haag", "Eindhoven", "s' Hertogenbosch"],
    },
    {
        icon: "/svgs/location.svg",
        text: "Select your drop-off location",
        type: "select",
        options: ["Amsterdam", "Rotterdam", "Den Haag", "Eindhoven", "s' Hertogenbosch"],
    },
    {
        icon: "/svgs/calendar.svg",
        text: "Select your pickup date",
        type: "date",
        options: [null],
    },
    {
        icon: "/svgs/calendar.svg",
        text: "Select your drop-off date",
        type: "date",
        options: [null],
    },
];

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero>
                <HeroBg />
                <HeroHeader />
                <HeroImage />
            </Hero>
            <CarBookForm data={data} />
            <StepsSection />
            <CarProvider>
                <Vehicles>
                    <VehiclesHeader />
                    <VehiclesList />
                    <VehicleImage />
                    <VehicleSpecs />
                </Vehicles>
            </CarProvider>
        </div>
    );
}

export default App;
