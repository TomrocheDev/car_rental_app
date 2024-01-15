import { createContext, useContext, useState } from "react";

import cars from "../data/carData";

const CarContext = createContext();

function CarProvider({ children }) {
    const [carId, setCarId] = useState(1);
    const activeCar = cars.find((car) => carId === car.id);

    return (
        <CarContext.Provider
            value={{
                cars,
                carId,
                activeCar,
                onChangeCarId: setCarId,
            }}>
            {children}
        </CarContext.Provider>
    );
}

function useCars() {
    const context = useContext(CarContext);
    if (context === undefined) throw new Error("CarContext was used outside the CarProvider");
    return context;
}

export { CarProvider, useCars };
