import { Express } from 'express'
import { MascotaController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/mascotas/:nombre', MascotaController.MascotaGet.findByName)

  app.post('/api/mascotas', MascotaController.MascotaPost.create)

}
