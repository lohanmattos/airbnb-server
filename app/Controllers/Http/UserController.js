'use strict'

const User = use("App/Models/User");

class UserController {
    async create({request}){
        const data = request.only(['username', 'password', 'email'])

        const user = await User.create(data);

        return user;
    }
    
    async index({request}){
        const properties = request.all();

        return properties;

    }
}

module.exports = UserController
