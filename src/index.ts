// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import cors, { CorsOptions } from 'cors'
import { typeDefs, resolvers } from './schema/index.js'

interface MyContext {
	token?: string
}

const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer<MyContext>({
	typeDefs,
	resolvers,
	introspection: true,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})
await server.start()

app.use(cors())
app.use(express.json())

app.use(
	'/graphql',
	cors<cors.CorsRequest>(),
	express.json(),
	expressMiddleware(server, {
		context: async ({ req }) => ({ token: req.headers.token })
	}),
	(req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
		if (req.method == 'OPTIONS') {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
			return res.status(200).json({})
		}
		next()
	}
)

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log('ready')
