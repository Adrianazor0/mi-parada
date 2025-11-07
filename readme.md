# Mi-parada API with nodejs, express and Firebase

# Description

Is an API developed with nodejs, express and Firebase

## Instalation 

1. Clone the Repository
2. Install all dependencies:

```bash 
    npm install
```
3. Configure the .env variables

```bash
    #you can copy the .env copy file within you own .env file and just fill the information required

    cp .env_copy .env

    #then just edit the ".env" file with yours information
```

4. Execute on developer mode:

```bash
    npm run dev
```

## Api Documentation

### Get all Users

- **GET** `/api/users`
- **Description:** It returns list of all users
- **Example response:**

```json
[
    {
        "id": "1",
        "firstName": "Adrian",
        "lastName": "Azor",
        "address": "Av. 25 de Febrero, #34",
        "province": "Santo Domingo",
        "phone": 8498851298,
        "gender": "Masculine"
    },
    {
        "id": "2",
        "firstName": "Kamil",
        "lastName": "Santana",
        "address": "Av. george Washignton, #299",
        "province": "Santo Domingo",
        "phone": 8498852398,
        "gender": "Femenine"
    },
    {
        "id": "3",
        "firstName": "Arfenis",
        "lastName": "Puello",
        "address": "Ciudad Juan Bosh, Apartment #33",
        "province": "Santo Domingo",
        "phone": 8096547895,
        "gender": "Masculine"
    }
]
```

### Get an user by id

- **GET** `/api/users/:id`
- **Description:** It return the user who shares the chosen id
- **Parameters:**
    -`id` (path, required): number of the id desired to find
- **Example of use:** `/users/1`
- **Example response:**

```json
{
    "id": "1",
    "firstName": "Adrian",
    "lastName": "Azor",
    "address": "Av. 25 de Febrero, #34",
    "province": "Santo Domingo",
    "phone": 8498851298,
    "gender": "Masculine"
}
```

