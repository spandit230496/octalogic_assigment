import express from "express"
import dotenv from 'dotenv'
import User from "./schema/user.js"
import Booking from "./schema/booking.js"
import Vehicle from "./schema/vehicle.js"
import VehicleType from "./schema/vehicleType.js"
import { sequelize,connectToDB } from "./conf/db_connection.js"

const app = express()
dotenv.config();

(async  ()=> {

await connectToDB()
await sequelize.sync({ alter: true }) 
app.get("/",(req,res)=>{
    res.status(200).send("yes i am working")
})

const PORT = process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
})
})()

