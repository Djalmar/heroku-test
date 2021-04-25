import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { Mascota } from '../sqlz/models/mascota'


export function create(mascota: any): Promise<any> {
  return Mascota
    .create({
      id: uuid.v1(),
      nombre: mascota.nombre,
      edad: mascota.edad,
      color: mascota.color,
      tamaño: mascota.tamaño,
      sexo: mascota.sexo,
      estadoSalud: mascota.estadoSalud,
      estado: mascota.estado,
      usuarioId: mascota.usuarioId,
      razaId: mascota.razaId
    })
}

export function findAll(): Promise<any> {
  return Mascota
    .findAll()
}

export function findByName(nombre: String): Promise<any> {
  return Mascota.findAll({
    where: {
      nombre: {
        [Op.like]: `%${nombre}%`
      }
    }
  })
}

// todo add more methods for lost pets
