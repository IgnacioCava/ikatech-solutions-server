import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers, typeDefs } from './schema/index.js'

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true
})

const { url } = await startStandaloneServer(server, {
	listen: { port: Number.parseInt(process.env.PORT) || 4000 }
})

console.log(`🚀  Server ready at: ${url}`)
