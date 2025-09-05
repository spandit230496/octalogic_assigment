import VehicleType from "../schema/vehicleType.js";
import Vehicle from "../schema/vehicle.js";

const getVehicleType = async (req, res) => {
  try {
    const { wheels } = req.query;

    const vehicleTypes = await VehicleType.findAll({
      where: { wheels },
      attributes: ["name","id"],
    });

    if (vehicleTypes && vehicleTypes.length > 0) {
      return res.status(200).json({
        success: true,
        data: {"vehicle_type":vehicleTypes},
        message: "Data fetched successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        data: [],
        message: "No vehicle types found for given wheels",
      });
    }
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Some error occurred",
    });
  }
};

const getVehicleModel = async (req,res)=>{
    const {vehicle_type_id}= req.query
    try{
     const vehicleModels = await Vehicle.findAll({
        where: { vehicle_type_id },
        attributes: [ "name","id"],
        include: [
            {
            model: VehicleType,
            attributes: ["id", "name", "type", "wheels"],
            },
        ],
        raw:true
        });


     if(vehicleModels){
        res.status(200).json({
            success: true,
        data: vehicleModels,
        message: "vehicle model found for given type",
        })
     }
    }
    catch(error){

         return res.status(500).json({
      success: false,
      data: null,
      message: String(error),
    });

    }
}

export default {getVehicleType,getVehicleModel};
