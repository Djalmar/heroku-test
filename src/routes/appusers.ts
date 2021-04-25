import { Express } from 'express'
import { AppUserController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/usuarios/:id', AppUserController.AppUserGet.list)
  app.post('/api/usuarios/login', AppUserController.AppUserPost.login)
  app.post('/api/usuarios', AppUserController.AppUserPost.create)

}
