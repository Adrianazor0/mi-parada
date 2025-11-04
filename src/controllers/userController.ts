import { NextFunction, Request, Response } from "express";
import { User, users } from '../models/user';

// Create an item
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {

    const { firstName, lastName, address, province, phone, gender } = req.body;
    const newUser: User = { 
        id: Date.now(), 
        firstName: firstName,
        lastName: lastName,
        address: address,
        province: province,
        phone: phone,
        gender: gender
    };

    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Read single item
export const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = parseInt(req.params.id!);
    console.log(id)
    const user = users.find((u) => u.id === id);

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
export const getUsers = (_: Request, res: Response, next: NextFunction) => {
  try {
    res.json(users);
  } catch (error) {
    next(error);
  }
};



// Update an item
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
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
  }
};

// Delete an item
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
 try {
    const id = parseInt(req.params.id!);
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      res.status(404).json({ message: 'user not found' });
      return;
    }
    const deletedItem = users.splice(userIndex, 1)[0];
    res.json(deletedItem);
  } catch (error) {
    next(error);
  }
};
