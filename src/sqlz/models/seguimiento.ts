import { Model, STRING, ENUM, TEXT, DATE, UUID } from 'sequelize'
import sequelize from './_index'

export class Seguimiento extends Model {
  static Registro: any
}

export class SeguimientoModel {
  id: string
  descripcion: string
  ubicacion: string
  fecha: Date
  tipo: 'avistado' | 'encontrado'
  createdAt: Date
  updatedAt: Date
}

Seguimiento.init(
  {
    descripcion: TEXT,
    ubicacion: STRING(30),
    fecha: DATE,
    tipo: ENUM('avistado', 'encontrado'),
    registroId: UUID
  },
  { sequelize, modelName: 'seguimiento' }
)

