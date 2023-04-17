import { UserType } from '../types/index.js';
import { GraphQLInt, GraphQLString } from 'graphql';
import jwt from 'jsonwebtoken';
import * as userService from '../../service/user.service.js';

export const createUser = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        age: {
            name: 'age',
            type: GraphQLInt
        }
    },
    resolve: async(parent, args) => {
        return await userService.createUser(args);
    }
}
export const updateUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: GraphQLString
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        age: {
            name: 'age',
            type: GraphQLInt
        }
    },
    resolve: async(parent, args) => {
        return await userService.updateUser(args)
    }
}

export const login = {
    type: UserType,
    resolve: async(parent, args, context) => {
        let token = jwt.sign({ "body": "stuff" }, "Slytherin", { algorithm: 'HS256'});
        let {request, response} = context
        response.cookie('JWT',token,{
            maxAge: 86400000,
            httpOnly: true
        })
        response.json({
            status: 1,
            message: "login success"
        })
    }
}