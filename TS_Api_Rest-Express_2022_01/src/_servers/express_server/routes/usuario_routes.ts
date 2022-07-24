import { Router } from 'express'
import { Request, Response } from 'express'

export const usuarioRoutes = Router()

// ROTAS
usuarioRoutes.get("/usuarios",(req: Request, res: Response) => {
    res.send('Ola Usuarios')
})

