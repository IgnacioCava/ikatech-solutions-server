// The ApolloServer constructor requires two parameters: your schema
// npm install @apollo/server graphql
import { ApolloServer } from '@apollo/server'
import http from 'http'
import { typeDefs, resolvers } from './schema/index.js'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const httpServer = http.createServer(app)

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	cache: 'bounded',
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start()

const corsOptions: cors.CorsOptions = {
	origin: [process.env.CLIENT_ORIGIN || 'http://localhost:3000', 'https://studio.apollographql.com'],
	credentials: true
}

app.use('/', cors<cors.CorsRequest>(corsOptions), express.json(), expressMiddleware(server))

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log(`🚀 Server ready at http://localhost:4000/`)
