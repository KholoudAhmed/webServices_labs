const { ApolloServer, gql } = require('apollo-server');

let users = [
    { id: 1, name: 'kholoud', friends: [] },
    { id: 2, name: 'hasnaa', friends: [] },
    { id: 3, name: 'islam', friends: [] },
    { id: 4, name: 'shrook', friends: [] },
];

const schema = `
    type User {
        id: ID!
        name: String!
        age: Int
        balance: Float
        isActive: Boolean
        friends: [User]!
        homepage: String
        email: String
    }

    type Post {
        id: ID!
        title: String!
    }

    type Query {
        allUsers (last: Int): [User]
        allPosts: [Post]
        user (name: String!): User
    }

    type Mutation {
        deleteUser (id: ID): [User]
    }
`

const typeDefs = gql(schema);

const resolvers = {
    Query: {
        allUsers: (_, { last }) => {
            if (!last) return users;
            if (last) return users.slice(last);
        },
        allPosts: () => [{ id: 22, title: '222' }],
        user: (_, { name }) => {
            return users.find((user) => user.name === name);
        },
    },
    Mutation: {
        deleteUser: (_, { id }) => {
            users = users.filter((user) => user.id !== id);
            return users;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(4001).then(({ url }) => { console.log('url: ', url) });


