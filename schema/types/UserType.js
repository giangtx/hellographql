import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'This is user',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
});

export default UserType;