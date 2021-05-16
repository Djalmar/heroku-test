import { BLOB, Model, STRING } from 'sequelize'
import { Mascota } from './mascota'
import sequelize from './_index'

export class Usuario extends Model {
  static Mascotas: any
}

export class UsuarioModel {
  id: string
  nombre: string
  correo: string
  fotografia: string
  createdAt: Date
  updatedAt: Date
}

Usuario.init(
  {
    nombre: STRING(100),
    correo: STRING(50),
    fotografia: {
      type: BLOB,
      get() {
        const raw = this.getDataValue('fotografia')
        return raw.toString('base64')
      }
    }
  },
  { sequelize, modelName: 'usuario' }
)




