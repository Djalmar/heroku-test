import { Express } from 'express'
import { UsuarioController } from '../endpoints/_index'
import * as  multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export function routes(app: Express) {

  app.get('/api/usuarios/:id/mascotas', UsuarioController.UsuarioGet.mascotas)
  app.get('/api/usuarios/:correo', UsuarioController.UsuarioGet.getByCorreo)
  app.post('/api/usuarios/login', UsuarioController.UsuarioPost.login)
  app.post('/api/usuarios', upload.single('fotografia'), UsuarioController.UsuarioPost.create)

  /**
  * @api {get} /usuarios/:id/mascotas Obtener usuario con sus mascotas
  * @apiName GetUsuarioMascota
  * @apiGroup Usuario
  *
  * @apiParam {String} id Id del usuario
  * 
  *
  * @apiSuccess {String} nombre Nombre del usuario
  * @apiSuccess {String} correo Correo del usuario
  * @apiSuccess {String} telefono Telefono del usuario
  * @apiSuccess {Object} mascotas Mascotas del usuario
  
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *{
   "id": "507027a0-b1b0-11eb-b6db-4f9e5d82ac9e",
   "nombre": "Fabiola",
   "correo": "fabiola3@fabiola.com",
   "fotografia": "--- fotografia en base 64 ---",
   "mascotas": [{}, {}] // array con las mascotas del usuario
   "createdAt": "2021-05-10T16:53:58.683Z",
   "updatedAt": "2021-05-10T16:53:58.683Z"
}
  *
  */

  /**
   * @api {get} /usuarios/:correo Obtener usuario por correo
   * @apiName GetUsuario
   * @apiGroup Usuario
   *
   * @apiParam {String} correo Correo del usuario
   * 
   *
   * @apiSuccess {String} nombre Nombre del usuario
   * @apiSuccess {String} correo Correo del usuario
   * @apiSuccess {String} telefono Telefono del usuario
   
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *{
    "id": "507027a0-b1b0-11eb-b6db-4f9e5d82ac9e",
    "nombre": "Fabiola",
    "correo": "fabiola3@fabiola.com",
    "fotografia": "--- fotografia en base 64 ---",
    "createdAt": "2021-05-10T16:53:58.683Z",
    "updatedAt": "2021-05-10T16:53:58.683Z"
}
   *
   */

  /**
     * @api {post} /usuarios Crear un usuario
     * @apiName PostUsuario
     * @apiGroup Usuario
     *
     * @apiParam {String} nombre Nombre del usuario
     * @apiParam {String} correo Correo del usuario
     * @apiParam {String} fotografia Fotografía del usuario en base 64
     * 
     *
     * @apiSuccess {String} id Identificador unico del usuario
     * @apiSuccess {String} nombre Nombre del usuario
     * @apiSuccess {String} correo Correo del usuario
     * @apiSuccess {String} fotografia Fotografia del usuario en base 64
     
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *{
      "id": "507027a0-b1b0-11eb-b6db-4f9e5d82ac9e",
      "nombre": "Fabiola",
      "correo": "fabiola3@fabiola.com",
      "fotografia": "--- fotografia en base 64 ---",
      "createdAt": "2021-05-10T16:53:58.683Z",
      "updatedAt": "2021-05-10T16:53:58.683Z"
  }
     *
     */
}
