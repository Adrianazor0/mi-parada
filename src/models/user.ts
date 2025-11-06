import { db } from "../config/firebase";

const userCollection = db.collection('users');

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    province: string,
    phone: string,
    gender: string
}

export const getUsers = async () => {
    try {
        const snapshot = await userCollection.get();
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (id: string) => {
    try {
        const snapshot = await userCollection.doc(id).get();
        return {id: snapshot.id, ...snapshot.data() }
    } catch (error) {
        console.log(`Error al obtener el producto con el id ${id}: `, error);
    }
}