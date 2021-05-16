import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { Registro } from '../sqlz/models/registro'
import { Seguimiento } from '../sqlz/models/seguimiento'

export function create(seguimiento: any): Promise<any> {
  return Seguimiento.create({
    id: uuid.v1(),
    descripcion: seguimiento.descripcion,
    ubicacion: seguimiento.ubicacion,
    fecha: seguimiento.fecha,
    tipo: seguimiento.tipo,
    registroId: seguimiento.registroId
  })
}

export function getByRegistroId(registroId: string): Promise<any> {
  return Seguimiento.findAll({
    include: [
      { model: Registro, where: { id: registroId } }
    ]
  })
}

