import products from '../../../db/zapato.js'

const resolvers = {
	Query: {
		products: () => products
	}
}

export default resolvers
