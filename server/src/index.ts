import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import { resolvers, typeDefs } from './schema'
import path from 'path'
import compression from 'compression'

async function startServer() {
    const app = express()

    app.use(compression())

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await server.start()

    app.use('/graphql', cors(), express.json(), expressMiddleware(server))

    // Serve client build in production
    if (process.env.NODE_ENV === 'production') {
        const clientDist = path.resolve(__dirname, '../../client/dist')
        app.use(express.static(clientDist))

        // Catch-all route, but exclude /graphql
        app.get(/^(?!\/graphql).*/, (_req, res) => {
            res.sendFile(path.join(clientDist, 'index.html'))
        })
    }

    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`🚀 Server ready at port ${port}`)
    })
}

startServer().catch((err) => {
    console.error('Server failed to start', err)
})
