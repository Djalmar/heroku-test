import { Request, Response } from 'express'
import { RegistroDao, UsuarioDao } from '../../dao/_index'
import { body, validationResult } from 'express-validator'

export function create(req: Request, res: Response) {

  body('estado', 'El estado es requerido').notEmpty()
  body('descripcion', 'La descripción es requerida').notEmpty()
  body('ubicacion', 'La ubicación es requerida').notEmpty()
  body('tipo', 'El tipo es requerido').notEmpty()

  const result = validationResult(req)
  if (result.isEmpty()) {
    return RegistroDao.create(req.body)
      .then(registro => res.status(201).send(registro))
      .catch(error => res.boom.badRequest(error))
  } else {
    res.boom.badRequest('Errores de validación', result.array)
  }
}

export function update(req: Request, res: Response) {
  return RegistroDao.update(req.body, req.params.id)
    .then(registro => res.status(201).send(registro))
    .catch(error => res.boom.badRequest(error))
}
