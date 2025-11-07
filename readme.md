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

- **GET** `/users`
- **Description:** It returns list of all users
- **Example response:**

```json
[
    {
        "id": "y0Tsr9zkcEKNE5O0f6zj",
        "firstName": "Darian",
        "lastName": "Xonobac",
        "address": "San Isidro",
        "province": "Santo Domingo",
        "phone": 8496698472,
        "gender": "Masculine"
    }
]
```

### Get an user by id

- **GET** `/users/:id`
- **Description:** It return the user who shares the chosen id
- **Parameters:**
    -`id` (path, required): number of the id desired to find
- **Example of use:** `/users/y0Tsr9zkcEKNE5O0f6zj`
- **Example response:**

```json
{
    "id": "y0Tsr9zkcEKNE5O0f6zj",
    "firstName": "Darian",
    "lastName": "Xonobac",
    "address": "San Isidro",
    "province": "Santo Domingo",
    "phone": 8496698472,
    "gender": "Masculine"
}
```

### Create an user

- **POST** `/users`
- **Description:** It a new user and add it to the database
- **Body (JSON):**

```json
{
    "firstName": "Darian",
    "lastName": "Xonobac",
    "address": "San Isidro",
    "province": "Santo Domingo",
    "phone": 8496698472,
    "gender": "Masculine"
}
```
- **Example response:**

```json
{
    "id": "y0Tsr9zkcEKNE5O0f6zj",
    "firstName": "Darian",
    "lastName": "Xonobac",
    "address": "San Isidro",
    "province": "Santo Domingo",
    "phone": 8496698472,
    "gender": "Masculine"
}
```

### Delete an user by id

- **DELETE** `/users/:id`
- **Description:** It deletes the user who shares the chosen id
- **Parameters:**
    -`id` (path, required): number of the id desired to find
- **Example response:** 204 No Content