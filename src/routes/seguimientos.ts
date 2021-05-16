import { Express } from 'express'
import { SeguimientoController, UsuarioController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/seguimientos/:id', SeguimientoController.SeguimientoGet.getById)
  app.post('/api/seguimientos', SeguimientoController.SeguimientoPost.create)
  app.put('/api/seguimientos/:id', SeguimientoController.SeguimientoPost.update)

}
