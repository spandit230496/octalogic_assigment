import express from "express";
import {getUsers,getAllUsers} from "../controller/userController.js";
import {getVehicleModels,getVehicleTypes} from "../controller/vehicleController.js";
import {Book,getBookings} from '../controller/bookingController.js'


const route = express.Router();


route.get("/user", getUsers);
route.get("/users",getAllUsers)

route.get("/vehicle/vehicle-type", getVehicleTypes);
route.get("/vehicle/model", getVehicleModels);


route.post("/booking/book", Book);
route.get("/booking/all-booking", getBookings);



export default route;
