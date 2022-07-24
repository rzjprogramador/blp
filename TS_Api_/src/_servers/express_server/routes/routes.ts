import { Router } from 'express'
import { Request, Response } from 'express'
import fs from 'fs'

export const routes = Router()

// ROTAS
routes.get("/inicio",(req: Request, res: Response) => {
    res.send('Ola Inicio')
})

