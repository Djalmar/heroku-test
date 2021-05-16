import { Request, Response } from 'express'
import { UsuarioDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return UsuarioDao
    .findById(req.params.id)
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.boom.badRequest(error))
}

export function getByCorreo(req: Request, res: Response) {
  return UsuarioDao
    .findByCorreo(req.params.correo)
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.boom.badRequest(error))
}


export function mascotas(req: Request, res: Response) {
  return UsuarioDao
    .findMascotas(req.params.id)
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.boom.badRequest(error))
}
