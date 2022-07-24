import { Router } from 'express'
import { Request, Response } from 'express'

export const produtoRoutes = Router()

// ROTAS
produtoRoutes.get("/produtos",(req: Request, res: Response) => {
    res.send('Ola Produto')
})

