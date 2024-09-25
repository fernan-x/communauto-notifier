export type CommunautoCar = {
    CarId: number;
    CarVin: string;
    CarPlate: string;
    CarModel: string;
    CarNo: number;
    Latitude: number;
    Longitude: number;
    EnergyLevel: number | null;
    LastUseDate: string;
    LastUse: number;
    isPromo: boolean;
    BoardComputerType: number;
    BookingStatus: number;
    CarBrand: string;
    CarColor: string;
    CarSeatNb: number;
    CarAccessories: number[];
    IsElectric: boolean;
    VehiclePromotions: null | unknown[];
    CityID: number;
};

export type GetCarsResponse = {
    d: {
        Success: boolean;
        Vehicles: CommunautoCar[];
    };
}

