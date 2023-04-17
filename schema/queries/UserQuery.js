import { GraphQLList, GraphQLInt } from 'graphql';
import { UserType } from '../types/index.js';
import { getAll, getById } from '../../service/user.service.js';
import { checkCookie } from '../../utils/jwtToken.js'

export const users = {
    type: new GraphQLList(UserType),
    resolve: async(parent, args, context) => {
        return await getAll();
    }
} 

export const user = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: async(parent, args, context) => {
        let { request, response } = context;
        checkCookie(request, response);
        return await getById(args.id);
    }
}