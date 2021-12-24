const express = require('express')
const axios = require('axios')
const dbConnect = require('./connect').dbConnect
const dbOperations = require('./dbOperations')
const app = express()
const cors = require('cors')

app.use(cors());

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const USERS_LIST_SCHEMA = require('./schema/usersList')

const startServer = async () => {
  const port = 4000
  console.log("wating to connect..");
  await dbConnect()
  const schema = buildSchema(`

        ${USERS_LIST_SCHEMA}

        type Query {
          users: [User]
          hello: String
        }

        type Mutation {
          setUser(id: Int!,name: String!): [User]
        }
        `
  )


  const root = {
    users: async () => {
      return await dbOperations.findData({});
    },
    hello: () => {
      return "Hello world!"
    },
    setUser: async ({ id, name }) => {
      await dbOperations.updateData({ id: id }, { $set: { name: name } })
      return await dbOperations.findData({});
    }
  }

  app.use('/usersList', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

  app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
  })
}

startServer()

