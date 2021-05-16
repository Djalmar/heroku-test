import { Op } from 'sequelize'
import * as uuid from 'uuid'
import { Mascota } from '../sqlz/models/mascota'
import { Registro } from '../sqlz/models/registro'
import { Seguimiento } from '../sqlz/models/seguimiento'


export function create(mascota: any, files: any): Promise<any> {
  let obj = {
    id: uuid.v1(),
    nombre: mascota.nombre,
    edad: mascota.edad,
    color: mascota.color,
    tamaño: mascota.tamaño,
    sexo: mascota.sexo,
    estadoSalud: mascota.estadoSalud,
    estado: mascota.estado,
    usuarioId: mascota.usuarioId,
    razaId: mascota.razaId,
    fotografias: []
  }

  if (files && files.length > 0) {
    const keys = Object.keys(files)
    keys.forEach(key => {
      obj.fotografias.push({
        id: uuid.v1(),
        path: files[key].originalname,
        imagen: files[key].buffer
      })
    })
    return Mascota
      .create(obj, { include: [{ association: Mascota.Fotografias }] })
  }
  return Mascota
    .create(obj)
}

export function findAll(): Promise<any> {
  return Mascota
    .findAll()
}

export function findByName(nombre: String): Promise<any> {
  return Mascota.findAll({
    where: {
      nombre: {
        [Op.iLike]: `%${nombre}%`
      }
    },
    include: [Mascota.Fotografias]
  })
}

export function findById(id: String): Promise<any> {
  return Mascota.findByPk(id.toString())
}

export function findEncontradas(): Promise<any> {
  return Mascota.findAll({
    where: {
      estado: 'encontrado'
    },
    order: [['createdAt', 'DESC']],
    include: [Mascota.Fotografias, Mascota.Registros]
  })
}

export function findPerdidas(): Promise<any> {
  return Mascota.findAll({
    where: {
      estado: 'perdido'
    },
    order: [['createdAt', 'DESC']],
    include: [Mascota.Fotografias, Mascota.Registros]
  })
}

export function findAvistadas(): Promise<any> {
  return Mascota.findAll({
    where: {
      estado: 'perdido'
    },
    order: [['createdAt', 'DESC']],
    include: [Mascota.Fotografias, {
      model: Registro,
      as: 'registros',
      include: [{ model: Seguimiento, as: 'seguimientos', required: true, where: { tipo: 'avistado' } }]
    }]
  })
}

export function update(mascota: any): Promise<any> {
  const id = mascota.id
  delete mascota.id
  delete mascota.usuarioId
  return Mascota.update({ mascota }, { where: { id } })
}



