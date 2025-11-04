export interface User {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    province: string,
    phone: string,
    gender: string
}

export let users: Array<User> = [];