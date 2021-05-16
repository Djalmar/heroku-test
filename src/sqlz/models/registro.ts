import { Model, STRING, ENUM, TEXT, DATE, UUID } from 'sequelize'
import sequelize from './_index'

export class Registro extends Model {
  static Mascota: any
  static Usuario: any
  static Seguimientos: any
}

export class RegistroModel {
  id: string
  estado: 'encontrado' | 'perdido'
  descripcion: string
  ubicacion: string
  fechaPerdida: Date
  fechaHallazgo: Date
  tipo: 'perdida' | 'encuentro'
  createdAt: Date
  updatedAt: Date
}

Registro.init(
  {
    estado: ENUM('encontrado', 'perdido'),
    descripcion: TEXT,
    ubicacion: STRING(30),
    fechaPerdida: DATE,
    fechaHallazgo: DATE,
    tipo: ENUM('perdida', 'encuentro'),
    usuarioId: UUID,
    mascotaId: UUID
  },
  { sequelize, modelName: 'registro' }
)

