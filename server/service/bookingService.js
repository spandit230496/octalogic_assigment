import Booking from "../schema/booking.js";
import User from "../schema/user.js";
import Vehicle from "../schema/vehicle.js";

export const doBooking = async (req, res) => {
  try {
    const { first_name,last_name, vehicle_id, start_date, end_date } = req.body;

    const user = await User.findOne({ where: { first_name,last_name } });
    if (!user) {
      return res.status(403).json({
        success: false,
        data: [],
        message: "User Not Available",
      });
    }

    const vehicle = await Vehicle.findOne({ where: { id: vehicle_id } });
    if (!vehicle) {
      return res.status(403).json({
        success: false,
        data: [],
        message: "Vehicle Not Available",
      });
    }

    if (new Date(end_date) < new Date(start_date)) {
      return res.status(403).json({
        success: false,
        data: [],
        message: "End Date can't be before Start Date",
      });
    }

    const booking = await Booking.create({
      "user_id":user.id,
      "vehicle_id":vehicle_id,
      "start_date":start_date,
      "end_date":end_date,
    });

    return res.status(200).json({
      success: true,
      message: "Booking Confirmed",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAllBookings = async (req,res)=>{

     try{
      const bookings = await Booking.findAll({
        attributes:["id","start_date","end_date"],
        include: [
            {
            model: Vehicle,
            attributes: ["name"],
            },
            {model:User,
                attributes:["first_name","last_name"]
            }
        ],
        raw:true
      })

    return res.status(200).json({
      success: true,
      data: bookings,
      message: "Bookings Fetched Successfully",
    });
     }
     catch(error){
        return res.status(500).json({
      success: false,
      data: [],
      message: error,
    });
     }

}
