import { Request, Response } from "express";
import { clerkClient } from "../index"; // Adjust the import path as necessary



export const updateUser = async (req:Request,res:Response):Promise<void>=>{
    const {userId} = req.params;
    const userData = req.body
    try{
     const user = await clerkClient.users.updateUserMetadata(userId,{
        publicMetadata:{
        userType : userData.publicMetadata.userType,
        settings : userData.publicMetadata.settings
        }
      })
        
        res.json({message:"user updated successfully",data:user});  
    }
    catch(error){
             res.status(500).json({message:"Error retrieving course",error:error});
    }
};