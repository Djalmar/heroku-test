import { Request, Response } from 'express'
import { SeguimientoDao } from '../../dao/_index'

export function getById(req: Request, res: Response) {
  return SeguimientoDao
    .getByRegistroId(req.params.id)
    .then(mascotas => res.status(200).send(mascotas))
    .catch(error => res.boom.badRequest(error))
}
