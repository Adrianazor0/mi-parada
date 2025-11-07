import { NextFunction, Request, Response } from "express";
import * as Model from "../models/user";

// Create an item
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, address, province, phone, gender } = req.body;
    const newUser = await Model.createUser({ firstName, lastName, address, province, phone, gender });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Read single item
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id!;
    const user = await Model.getUser(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    } 
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getUsers = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const users = await Model.getUsers();
    if (users!.length == 0) {
        res.status(404).json({ message: 'Users not found, try to add some' });
        return;
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Update an item
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
 /* try {
    const id = parseInt(req.params.id!);
    const { firstName, lastName, address, province, phone, gender } = req.body;
    const userIndex = users.findIndex((u) => u.id === id);

    console.log(userIndex)

    if (userIndex === -1) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const user = users[userIndex];

    const userUpdater = (user: any, firstName: string, lastName: string, address: string, province: string, phone: string, gender: string) => {

        if(firstName !== undefined){
            user.firstName = firstName;
        } 

        if(lastName !== undefined){
            user.lastName = lastName;
        }    
        if(address !== undefined){
            user.address = address;
        }    
        if(province !== undefined){
            user.province = province;
        }    
        if(phone !== undefined){
            user.phone = phone;
        }          
        if(gender !== undefined) {
            user.gender = gender;
        }
        return user;
    }
    //console.log(userUpdater(user, firstName, lastName, address, province, phone, gender))
    users[id] = userUpdater(user, firstName, lastName, address, province, phone, gender)
   
    res.json(users[id]);
  } catch (error) {
    next(error);
  }*/
};

// Delete an item
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
 try {
    const { id } = req.params;
    const deletedUser = await Model.deleteUser(id!);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not deleted please check the requested id.' });
    } 

    res.status(204).send();

  } catch (error) {
    next(error);
  }
};
