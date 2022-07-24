import 'module-alias/register'
import 'dotenv/config'
import express from 'express'
import { ENV_SERVER } from '@src/globals/env/enviroments'
import { routes } from '@src/_servers/express_server/routes/routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(ENV_SERVER.PORT_EXPRESS || 4000, () => {
    console.log(`SERVER ON => ${ENV_SERVER.PORT_EXPRESS}`)
})
