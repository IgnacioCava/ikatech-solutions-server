import { ProductResolvers, ProductTypeDefs } from './products'
import merge from 'lodash.merge'

/* 
    Although in this example we only have one resolver, in a real project we'd have multiple.
    In such case, we'd need to combine all of our resolvers for our ApolloServer to process.
    lodash.merge allows us to safely merge everything into a single object.
*/
const resolvers = merge({}, ProductResolvers)
const typeDefs = [ProductTypeDefs]

export { resolvers, typeDefs }
