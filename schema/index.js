import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import Queries from './queries';
import mutation from './mutations'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: Queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})

export default schema;