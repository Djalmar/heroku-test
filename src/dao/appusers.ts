import * as uuid from 'uuid'
import { Usuario } from '../sqlz/models/usuario'

export function create(appUser: any): Promise<any> {
  return Usuario
    .create({
      id: uuid.v1(),
      email: appUser.email,
      pwd: appUser.pwd
    })
}

export function findAll(): Promise<any> {
  return Usuario
    .findAll()
}

export function login(appUser: any): Promise<any> {
  return Usuario
    .findOne({
      where: {
        email: appUser.email,
        pwd: appUser.pwd
      }
    })
}
