import { Router } from "express"
import { Request, Response } from 'express'

const router = Router()


// Rota Criar Editor
router.get('/inicio', (request: Request, response: Response) => {
    return response.json({ message: 'Alo Mundo de obj inventado para renderizar em json'})
})


export { router }