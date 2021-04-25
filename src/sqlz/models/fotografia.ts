import { Model, TEXT, UUID } from 'sequelize'
import { Mascota } from './mascota'
import sequelize from './_index'

export class Fotografia extends Model {

}

export class FotografiaModel {
  id: string
  path: string
  createdAt: Date
  updatedAt: Date
}

Fotografia.init(
  {
    path: TEXT,
    mascotaId: UUID
  },
  { sequelize, modelName: 'fotografia' }
)

Fotografia.belongsTo(Mascota, {
  foreignKey: 'mascotaId',
  targetKey: 'id',
  as: 'mascota'
})

Mascota.hasMany(Fotografia, {
  as: 'fotografias',
  foreignKey: 'mascotaId',
  sourceKey: 'id'
})
