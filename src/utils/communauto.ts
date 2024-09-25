// https://restapifrontoffice.reservauto.net/ReservautoFrontOffice/index.html#/
export const fetchCars = async () => {
    const branchId = 1;
    const url = `https://www.reservauto.net/WCF/LSI/LSIBookingServiceV3.svc/GetAvailableVehicles?BranchID=${branchId}&LanguageID=2`;

    console.log('Url: %s', url);

    const result = await fetch(url);
    const json = await result.json();

    if (!json.d || !json.d.Vehicles) {
      throw new Error('Invalid response');
    }

    return json.d.Vehicles.map((vehicle: any) => ({
      brand: vehicle.CarBrand,
      model: vehicle.CarModel,
      plate: vehicle.CarPlate,
      color: vehicle.CarColor,
      lat: vehicle.Latitude,
      lng: vehicle.Longitude,
    }));
  }