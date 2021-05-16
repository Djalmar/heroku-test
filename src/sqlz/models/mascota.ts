import { Model, STRING, DataTypes, INTEGER, ENUM, BOOLEAN, TEXT, UUID } from 'sequelize'
import { Fotografia } from './fotografia'
import { Raza } from './raza'
import { Registro } from './registro'
import { Seguimiento } from './seguimiento'
import { Usuario } from './usuario'
import sequelize from './_index'

export class Mascota extends Model {
  static Fotografias: any
  static Registros: any
}

export class MascotaModel {
  id: string
  nombre: string
  edad: number
  color: string
  tamaño: 'pequeño' | 'mediano' | 'grande'
  sexo: boolean // true masculino, false femenino
  estadoSalud: 'saludable' | 'medicado' | 'enfermo'
  estado: 'encontrado' | 'perdido'
  createdAt: Date
  updatedAt: Date
}

Mascota.init(
  {
    nombre: STRING(50),
    edad: INTEGER,
    color: STRING(50),
    tamaño: ENUM('pequeño', 'mediano', 'grande'),
    sexo: BOOLEAN,
    estadoSalud: ENUM('saludable', 'medicado', 'enfermo'),
    estado: DataTypes.ENUM('encontrado', 'perdido'),
    usuarioId: UUID,
    razaId: UUID
  },
  { sequelize, modelName: 'mascota', tableName: 'mascotas' }
)

Mascota.belongsTo(Raza, {
  as: 'raza',
  foreignKey: 'razaId',
  targetKey: 'id'
})

Raza.hasMany(Mascota, {
  as: 'mascotas',
  foreignKey: 'razaId',
  sourceKey: 'id'
})

Mascota.belongsTo(Usuario, {
  as: 'propietario',
  foreignKey: 'usuarioId',
  targetKey: 'id'
})

Usuario.Mascotas = Usuario.hasMany(Mascota, {
  as: 'mascotas',
  foreignKey: 'usuarioId',
  sourceKey: 'id'
})

Mascota.Registros = Mascota.hasMany(Registro, {
  as: 'registros',
  foreignKey: 'mascotaId',
  sourceKey: 'id'
})

Registro.Mascota = Registro.belongsTo(Mascota, {
  as: 'mascota',
  foreignKey: 'mascotaId',
  targetKey: 'id'
})

Usuario.hasMany(Registro, {
  as: 'registros',
  foreignKey: 'usuarioId',
  sourceKey: 'id'
})

Registro.Usuario = Registro.belongsTo(Usuario, {
  as: 'usuario',
  foreignKey: 'usuarioId',
  targetKey: 'id'
})

Registro.Seguimientos = Registro.hasMany(Seguimiento, {
  as: 'seguimientos',
  foreignKey: 'registroId',
  sourceKey: 'id'
})

Seguimiento.belongsTo(Registro, {
  as: 'registro',
  foreignKey: 'registroId',
  targetKey: 'id'
})
