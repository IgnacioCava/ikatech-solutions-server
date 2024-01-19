// The ApolloServer constructor requires two parameters: your schema
// npm install @apollo/server graphql
import { ApolloServer } from '@apollo/server'
import { typeDefs, resolvers } from './schema/index.js'
import { startStandaloneServer } from '@apollo/server/standalone'
import * as dotenv from 'dotenv'

dotenv.config()

const server = new ApolloServer({
	typeDefs,
	resolvers
})

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 }
})

console.log(`🚀  Server ready at: ${url}`)
