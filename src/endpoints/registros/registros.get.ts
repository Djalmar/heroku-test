import { Request, Response } from 'express'
import { RegistroDao } from '../../dao/_index'

export function listByMascotaOrUsuario(req: Request, res: Response) {
  if (req.query.mascotaId) {
    return RegistroDao
      .getByMascota(req.query.mascotaId)
      .then(mascotas => res.status(200).send(mascotas))
      .catch(error => res.boom.badRequest(error))
  }
  if (req.query.usuarioId) {
    return RegistroDao
      .getByUsuario(req.query.usuarioId)
      .then(mascotas => res.status(200).send(mascotas))
      .catch(error => res.boom.badRequest(error))
  }
  res.end()
}


