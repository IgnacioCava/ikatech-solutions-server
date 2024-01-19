const model = `#graphql
    type Product {
        nombre: String!
        precio: Int!
        referencia: String!
        foto: String!
        slides: [String!]!
    }
`

export default model
