import { Request, Response } from 'express'
import { MascotaDao } from '../../dao/_index'
import { body, validationResult } from 'express-validator'


export function create(req: Request, res: Response) {

  body('nombre', 'El nombre de la mascota es requerido').notEmpty()
  body('edad', 'La edad de la mascota es requerido').notEmpty()
  body('color', 'El color de la mascota es requerido').notEmpty()
  body('tamaño', 'El tamaño de la mascota es requerido').notEmpty()
  body('estadoSalud', 'El estado de salud de la mascota es requerido').notEmpty()
  body('estado', 'El estado de la mascota es requerido(encontrado/perdido').notEmpty()
  body('usuarioId', 'Se debe definir el usuario propietario de la mascota').notEmpty()
  body('razaId', 'Se debe definir la raza de la mascota').notEmpty()

  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return MascotaDao.create(req.body)
      .then(mascota => res.status(201).send(mascota))
      .catch(error => {
        console.log(error)
        res.boom.badRequest(error)
      })
  } else {
    res.boom.badRequest('Validation errors', errors.mapped())
  }
}
