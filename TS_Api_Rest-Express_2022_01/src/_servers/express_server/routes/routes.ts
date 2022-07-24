import { usuarioRoutes } from '@src/_servers/express_server/routes/usuario_routes'
import { produtoRoutes } from '@src/_servers/express_server/routes/produto_routes'
import { exemplo01Routes } from '@src/_servers/express_server/routes/exemplo01_routes'
import { exemplo02Routes } from '@src/_servers/express_server/routes/exemplo02_routes'

export const routes = [
    exemplo01Routes,
    exemplo02Routes,
    usuarioRoutes,
    produtoRoutes,
]

