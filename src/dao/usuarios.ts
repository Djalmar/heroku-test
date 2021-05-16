import * as uuid from 'uuid'
import { Usuario } from '../sqlz/models/usuario'

export function create(usuario: any, fotografia: any): Promise<any> {
  console.log('create dao')
  return Usuario
    .create({
      id: uuid.v1(),
      nombre: usuario.nombre,
      correo: usuario.correo,
      fotografia: fotografia.buffer
    })
}

export function findAll(): Promise<any> {
  return Usuario
    .findAll()
}

export function findById(id: any): Promise<any> {
  return Usuario.findByPk(id)
}

export function findByCorreo(correo: any): Promise<any> {
  return Usuario.findOne({
    where: {
      correo
    }
  })
}

export function findMascotas(id: any): Promise<any> {
  return Usuario.findByPk(id, { include: [Usuario.Mascotas] })
}

export function login(usuario: any): Promise<any> {
  return Usuario
    .findOne({
      where: {
        correo: usuario.correo,
        password: usuario.password
      }
    })
}
