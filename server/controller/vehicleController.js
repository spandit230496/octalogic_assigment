// controller/vehicleController.js
import vehicleMethod from "../service/vehicleService.js";

const { getVehicleModel, getVehicleType } = vehicleMethod;

export const getVehicleTypes = async (req, res) => {
  await getVehicleType(req, res);
};

export const getVehicleModels = async (req, res) => {
  await getVehicleModel(req, res);
};
