import { Router } from 'express'
import { Request, Response } from 'express'

export const exemplo01Routes = Router()

// ROTAS
exemplo01Routes.get("/exemplo01",(req: Request, res: Response) => {
    res.send('Ola exemplo01')
})

