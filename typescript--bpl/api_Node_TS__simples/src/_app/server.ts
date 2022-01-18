import 'module-alias/register'

import { app } from "./app"

app.listen(3333, () => {
    console.log('Rodando na Porta 3333')
})