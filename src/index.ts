import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { importSchema } from 'graphql-import'
import path from 'path'


process.on('unhandledRejection', function (err, promise) {
  console.error(err)
  process.exit(1)
})

process.on('uncaughtException', function (err) {
  console.error(err)
  process.exit(1)
})


async function runApp() {
  const server = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs: await importSchema(path.join(__dirname, 'schema.graphql'), {}),
    resolvers,

    subscriptions: {
      onConnect: () => {
        console.log('⚡️ ws client connected')
      },
    },
  })

  const { url, subscriptionsUrl } = await server.listen({ port: 4000, host: '0.0.0.0' })
  console.log(`🚀 Server ready at ${url}`)
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}\n`)
}


runApp()
