import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { Registro } from '../sqlz/models/registro'
import { Seguimiento } from '../sqlz/models/seguimiento'

export function create(registro: any): Promise<any> {
  return Registro.create({
    id: uuid.v1(),
    descripcion: registro.descripcion,
    ubicacion: registro.ubicacion,
    fecha: registro.fecha,
    tipo: registro.tipo,
    estado: registro.estado,
    usuarioId: registro.usuarioId,
    mascotaId: registro.mascotaId
  })
}

export function getByMascota(mascotaId: any): Promise<any> {
  return Registro.findAll({
    where: {
      mascotaId
    },
    include: [Registro.Usuario, Registro.Mascota, Registro.Seguimientos]
  })
}

export function getByUsuario(usuarioId: any): Promise<any> {
  return Registro.findAll({
    where: {
      usuarioId
    },
    include: [Registro.Usuario, Registro.Mascota, Registro.Seguimientos]
  })
}

export function update(registro: any, id: string): Promise<any> {
  delete registro.id
  return Registro.update(registro, { where: { id } })
}
