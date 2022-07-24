import { Router } from 'express'
import { Request, Response } from 'express'

export const exemplo02Routes = Router()

// ROTAS
exemplo02Routes.get("/exemplo02",(req: Request, res: Response) => {
    res.send('Ola exemplo02')
})

