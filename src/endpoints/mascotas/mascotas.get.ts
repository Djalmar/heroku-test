import { Request, Response } from 'express'
import { MascotaDao } from '../../dao/_index'

export function findByName(req: Request, res: Response) {
  return MascotaDao
    .findByName(req.params.nombre)
    .then(mascotas => res.status(200).send(mascotas))
    .catch(error => res.boom.badRequest(error))
}

export function findPerdidas(req: Request, res: Response) {
  return MascotaDao
    .findPerdidas()
    .then(mascotas => res.status(200).send(mascotas))
    .catch(error => res.boom.badRequest(error))
}

export function findEncontradas(req: Request, res: Response) {
  return MascotaDao
    .findEncontradas()
    .then(mascotas => res.status(200).send(mascotas))
    .catch(error => res.boom.badRequest(error))
}

export function findAvistadas(req: Request, res: Response) {
  return MascotaDao
    .findAvistadas()
    .then(mascotas => res.status(200).send(mascotas))
    .catch(error => res.boom.badRequest(error))
}


