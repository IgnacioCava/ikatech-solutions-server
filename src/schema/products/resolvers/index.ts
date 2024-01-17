import products from '../../../db/zapato'

const resolvers = {
	Query: {
		products: () => products
	}
}

export default resolvers
