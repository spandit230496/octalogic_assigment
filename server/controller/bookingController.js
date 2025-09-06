import {doBooking,getAllBookings} from '../service/bookingService.js'

export const Book= async (req,res)=>{
    await doBooking(req,res)
}

export const getBookings = async (req,res)=>{
    await getAllBookings(req,res)
}
