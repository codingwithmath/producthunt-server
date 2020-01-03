<h1 align="center">
Product Hunter-Server
</h1>

<p align="center">This is a REST API build with NodeJS + Express + MongoDB that can show, registre, update and delete any product.
 </p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## About this project

This project is part of my personal portifolio, so, I’ll be glad if you can provide any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: contatomatheuss@outlook.com

Connect with me at [Linkedin](https://www.linkedin.com/in/matheus-almeida-9989b9177/)

You can use this Project as you wish. It's free!

## Observations

- This project has no UI, it's only 
server-side;
- You can check the images of this project [here](https://drive.google.com/drive/folders/12vGxEvW6K3csXTYMvbnXZA-5TIuixRLd?usp=sharing)
- It's inspired by [Rockeseat NodeJS starter course](https://skylab.rocketseat.com.br/dashboard) (_it's only pt-BR_ 🇧🇷).


## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment with NodeJS 8+ installed. To use the database, you'll need to have MongoDB installed and running on your machine at the default port (27017). To have a better UX you'll need install [Insomnia](https://insomnia.rest/download/). With Insomnia we can make our HTTP request way more easier and pretty 

## First things first 

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/codingwithmath/produchunt-server

$ cd produchunt-server
```

**Installing dependencies**

```
$ yarn add
```

_or_

```
$ npm install
```
### Running the Development environment

Now, you'll need to change to development branch:
```
$ git checkout development
```

With all dependencies installed, the Database running and the environment properly configured, you can now run the server:

```
$ yarn dev
```

_or_

```
$ npm run dev
```

### Home

- **List a set of products based on the database.**

*EX*:

> http://localhost:3333/producthunt/api/products

*You can navigate between pages*

> http://localhost:3333/producthunt/api/products?page=3

| ENDPOINT | Method | Params | URL Params | Success Response | Error Response
|--|--|--|--|--|--|
| /products| `GET`  |-|-|**Code:** 200 - OK<br />**Content:** <br />`{`<br /> `products:`[Products](#product) `}`|<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <A Message with a description of the Error> }`

- **Get a single product.**

>http://localhost:3333/producthunt/api/products/:id

| ENDPOINT | Method | Params | URL Params | Success Response | Error Response
|--|--|--|--|--|--|
| /products:id| `GET`  |id|-|**Code:** 200 - OK<br />**Content:** <br />`{`<br /> `product:`[Product](#product) `}`|<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <A Message with a description of the Error> }`

- **Create a product.**

> http://localhost:3333/producthunt/api/products

| ENDPOINT | Method | Params | URL Params | Success Response | Error Response
|--|--|--|--|--|--|
| /products:id| `POST`  |[Product](#product)|-|**Code:** 200 - CREATED<br />**Content:** <br />`{`<br /> `createProduct:`[Product](#product) `}`|<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <A Message with a description of the Error> }`

- **Update a product.**

>http://localhost:3333/producthunt/api/products/:id

| ENDPOINT | Method | Params | URL Params | Success Response | Error Response
|--|--|--|--|--|--|
| /products/:id | `PUT`  | **Required:**<br />`Fields that will be updated`<br /><br />|id|**Code:** 200 - OK<br />**Content:** <br />`{`<br /> `product:` [Product](#product)<br />`}`  |**Code:** 404 - NOT FOUND<br />**Content:** `{ message:  "Product not found." }`<br /><br />or<br /><br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <A Message with a description of the Error> }`
<br />


- **Delete a product.**

>http://localhost:3333/producthunt/api/products/:id

| ENDPOINT | Method | Params | URL Params | Success Response | Error Response
|--|--|--|--|--|--|
| /products:id| `DELETE`  |id|-|**Code:** 200 - OK|<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <A Message with a description of the Error> }`

## Build with
- [NodeJS](https://nodejs.org/en/) - Build the server
- [express](https://expressjs.com/) - Router of the Application
- [MongoDB](https://www.mongodb.com/) - Database
- [mongoose](https://mongoosejs.com/) - Object Modeling + DB Connector
- [nodemon](https://nodemon.io/) - Process Manager used in the development

### Models

### Product

> *title*: Product's name.

> *category*: Categories of the Product.

> *description*: What the product do.

> *url*: An URL of the product

```json
{ 
   "title": {
     "type": "String",
     "required": true,
   },
   "category": {
     "type": "String",
     "required":true,
   },
   "description": {
     "type": "String",
     "required": true,
   },
   "url": {
     "type": "String",
     "required": true,
   },
   "createdAt": {
     "type": Date,
     "default": Date.now,
     "required": false,
   }
}   

```
## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details. 