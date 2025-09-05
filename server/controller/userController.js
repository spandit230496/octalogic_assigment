import {getUser,getAllUser} from "../service/userService.js";

export const getUsers = async (req,res)=>{
 await (getUser(req,res))
}

export const getAllUsers = async (req,res)=>{
 await (getAllUser(req,res))
}

