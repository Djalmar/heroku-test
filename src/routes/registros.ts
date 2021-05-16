import { Express } from 'express'
import { RegistroController, UsuarioController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/registros', RegistroController.RegistroGet.listByMascotaOrUsuario)
  app.post('/api/registros', RegistroController.RegistroPost.create)
  app.put('/api/registros/:id', RegistroController.RegistroPost.update)


  /**
* @api {get} /registros?mascotaId=id Obtener registros por el id de mascota
* @apiName GetRegistroMascota
* @apiGroup Raza
*
* @apiParam {String} mascotaId Id de la mascota
*
* @apiSuccess {String} array.id Id del registro.
* @apiSuccess {String} array.descripcion Descripcion del registro.
* @apiSuccess {String} array.ubicacion Ubicacion del registro.
* @apiSuccess {String} array.tipo Tipo del registro.
* @apiSuccess {String} array.estado Estado del registro.
* @apiSuccess {String} array.usuarioId Id del usuario.
* @apiSuccess {String} array.mascotaId Id de la mascota.
 
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*[    {
  "id": "2f59d640-b5ef-11eb-a31e-a789e0481240",
  "descripcion": "se perdio",
  "ubicacion": "1231,12313",
  "tipo": "perdida",
  "estado": "perdido",
  "usuarioId": "b7820ba0-b5ea-11eb-8e03-37dd8584d9be",
  "mascotaId": "6213b4a0-b5ec-11eb-9d94-0be9e3c268b9",
  "updatedAt": "2021-05-16T02:34:06.117Z",
  "createdAt": "2021-05-16T02:34:06.117Z",
  "fechaPerdida": null,
  "fechaHallazgo": null
},{}]
*
*/

  /**
 * @api {get} /registros?usuarioId=id Obtener registros por el id del usuario
 * @apiName GetRegistroUsuario
 * @apiGroup Raza
 *
 * @apiParam {String} usuarioId Id del usuario
 *
 * @apiSuccess {String} array.id Id del registro.
 * @apiSuccess {String} array.descripcion Descripcion del registro.
 * @apiSuccess {String} array.ubicacion Ubicacion del registro.
 * @apiSuccess {String} array.tipo Tipo del registro.
 * @apiSuccess {String} array.estado Estado del registro.
 * @apiSuccess {String} array.usuarioId Id del usuario.
 * @apiSuccess {String} array.mascotaId Id de la mascota.
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[    {
   "id": "2f59d640-b5ef-11eb-a31e-a789e0481240",
   "descripcion": "se perdio",
   "ubicacion": "1231,12313",
   "tipo": "perdida",
   "estado": "perdido",
   "usuarioId": "b7820ba0-b5ea-11eb-8e03-37dd8584d9be",
   "mascotaId": "6213b4a0-b5ec-11eb-9d94-0be9e3c268b9",
   "updatedAt": "2021-05-16T02:34:06.117Z",
   "createdAt": "2021-05-16T02:34:06.117Z",
   "fechaPerdida": null,
   "fechaHallazgo": null
},{}]
 *
 */
}

/**
 * @api {post} /registros
 * @apiName PostRegistro
 * @apiGroup Raza
 *
 * @apiParam {String} descripcion Descripcion del registro.
 * @apiParam {String} ubicacion Ubicacion del registro.
 * @apiParam {String} tipo Tipo del registro.
 * @apiParam {String} estado Estado del registro.
 * @apiParam {String} usuarioId Id del usuario.
 * @apiParam {String} mascotaId Id de la mascota.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
   "id": "2f59d640-b5ef-11eb-a31e-a789e0481240",
   "descripcion": "se perdio",
   "ubicacion": "1231,12313",
   "tipo": "perdida",
   "estado": "perdido",
   "usuarioId": "b7820ba0-b5ea-11eb-8e03-37dd8584d9be",
   "mascotaId": "6213b4a0-b5ec-11eb-9d94-0be9e3c268b9",
   "updatedAt": "2021-05-16T02:34:06.117Z",
   "createdAt": "2021-05-16T02:34:06.117Z",
   "fechaPerdida": null,
   "fechaHallazgo": null
}
 *
 */
