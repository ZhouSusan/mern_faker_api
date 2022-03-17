const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode : faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {//listening to our rotes
    const newUser = new User();//create a new user 
    res.json( newUser);//response with a json object of a new user 
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    const obj = {
        user : newUser,
        company: newCompany
    }
    res.json(obj);
})

app.listen( port, () => console.log(`Express server running on port: ${port}`) );