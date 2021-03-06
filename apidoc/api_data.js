define({ "api": [
  {
    "type": "get",
    "url": "/fotografias/:id",
    "title": "Obtener una fotografia",
    "name": "GetFotografia",
    "group": "Fotografia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id unico de la fotografía</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la fotografía.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Nombre original de la fotografia.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imagen",
            "description": "<p>La fotografia en base 64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mascotaId",
            "description": "<p>Id de la mascota a la cual pertenece la fotografía.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n      \"imagen\": \"imagen en base64\"\n      \"id\": \"748cf7a0-a6e1-11eb-ac3b-a5c4312fcae0\",\n      \"path\": \"db pagos.png\",\n      \"mascotaId\": \"75e90960-a6da-11eb-8742-df178125951b\",\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/fotografias.ts",
    "groupTitle": "Fotografia",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/fotografias/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fotografias",
    "title": "Crear una fotografia",
    "name": "PostFotografia",
    "group": "Fotografia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mascotaId",
            "description": "<p>Id de la mascota a la cual se asocia la fotografia</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "fotografia",
            "description": "<p>La imagen en el formulario que se subira(Se usa Multer para el procesamiento de imagenes)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la fotografía.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Nombre original de la fotografia.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imagen",
            "description": "<p>La fotografia en base 64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mascotaId",
            "description": "<p>Id de la mascota a la cual pertenece la fotografía.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n      \"imagen\": \"imagen en base64\"\n      \"id\": \"748cf7a0-a6e1-11eb-ac3b-a5c4312fcae0\",\n      \"path\": \"db pagos.png\",\n      \"mascotaId\": \"75e90960-a6da-11eb-8742-df178125951b\",\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/fotografias.ts",
    "groupTitle": "Fotografia",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/fotografias"
      }
    ]
  },
  {
    "type": "get",
    "url": "/mascotas/:nombre",
    "title": "Buscar una mascota",
    "name": "GetMascota",
    "group": "Mascota",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre parcial de la mascota para buscar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "edad",
            "description": "<p>Edad de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tama",
            "description": "<p>ño Tamaño de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estadoSalud",
            "description": "<p>Estado de salud de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado actual de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[  {\n        \"id\": \"dbcfe000-a6e4-11eb-80b6-279f485e64f4\",\n        \"nombre\": \"morita\",\n        \"edad\": 12,\n        \"color\": \"negro\",\n        \"tamaño\": \"grande\",\n        \"sexo\": true,\n        \"estadoSalud\": \"saludable\",\n        \"estado\": \"perdido\",\n        \"usuarioId\": \"c1d81410-a6e4-11eb-80b6-279f485e64f4\",\n        \"razaId\": \"a690da30-a6e3-11eb-91bd-45f887b013cf\",\n        \"fotografias\": [\n          fotografias de la mascota\n      ]\n  }, { ... }, { ... }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/mascotas.ts",
    "groupTitle": "Mascota",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/mascotas/:nombre"
      }
    ]
  },
  {
    "type": "get",
    "url": "/mascotas/avistadas",
    "title": "Listar mascotas avistadas",
    "name": "GetMascotaAvistada",
    "group": "Mascota",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "edad",
            "description": "<p>Edad de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tama",
            "description": "<p>ño Tamaño de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estadoSalud",
            "description": "<p>Estado de salud de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado perdido de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[  {\n    \"id\": \"dbcfe000-a6e4-11eb-80b6-279f485e64f4\",\n    \"nombre\": \"morita\",\n    \"edad\": 12,\n    \"color\": \"negro\",\n    \"tamaño\": \"grande\",\n    \"sexo\": true,\n    \"estadoSalud\": \"saludable\",\n    \"estado\": \"encontrado\",\n    \"usuarioId\": \"c1d81410-a6e4-11eb-80b6-279f485e64f4\",\n    \"razaId\": \"a690da30-a6e3-11eb-91bd-45f887b013cf\",\n    \"fotografias\": [\n      fotografias de la mascota\n  ]\n}, { ... }, { ... }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/mascotas.ts",
    "groupTitle": "Mascota",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/mascotas/avistadas"
      }
    ]
  },
  {
    "type": "get",
    "url": "/mascotas/encontradas",
    "title": "Listar mascotas encontradas",
    "name": "GetMascotaEncontrada",
    "group": "Mascota",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "edad",
            "description": "<p>Edad de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tama",
            "description": "<p>ño Tamaño de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estadoSalud",
            "description": "<p>Estado de salud de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado encontrado de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[  {\n      \"id\": \"dbcfe000-a6e4-11eb-80b6-279f485e64f4\",\n      \"nombre\": \"morita\",\n      \"edad\": 12,\n      \"color\": \"negro\",\n      \"tamaño\": \"grande\",\n      \"sexo\": true,\n      \"estadoSalud\": \"saludable\",\n      \"estado\": \"encontrado\",\n      \"usuarioId\": \"c1d81410-a6e4-11eb-80b6-279f485e64f4\",\n      \"razaId\": \"a690da30-a6e3-11eb-91bd-45f887b013cf\",\n      \"fotografias\": [\n        fotografias de la mascota\n    ]\n}, { ... }, { ... }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/mascotas.ts",
    "groupTitle": "Mascota",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/mascotas/encontradas"
      }
    ]
  },
  {
    "type": "get",
    "url": "/mascotas/perdidas",
    "title": "Listar mascotas perdidas",
    "name": "GetMascotaPerdida",
    "group": "Mascota",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "edad",
            "description": "<p>Edad de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tama",
            "description": "<p>ño Tamaño de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estadoSalud",
            "description": "<p>Estado de salud de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado perdido de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[  {\n    \"id\": \"dbcfe000-a6e4-11eb-80b6-279f485e64f4\",\n    \"nombre\": \"morita\",\n    \"edad\": 12,\n    \"color\": \"negro\",\n    \"tamaño\": \"grande\",\n    \"sexo\": true,\n    \"estadoSalud\": \"saludable\",\n    \"estado\": \"perdido\",\n    \"usuarioId\": \"c1d81410-a6e4-11eb-80b6-279f485e64f4\",\n    \"razaId\": \"a690da30-a6e3-11eb-91bd-45f887b013cf\",\n    \"fotografias\": [\n      fotografias de la mascota\n  ]\n}, { ... }, { ... }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/mascotas.ts",
    "groupTitle": "Mascota",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/mascotas/perdidas"
      }
    ]
  },
  {
    "type": "post",
    "url": "/mascotas",
    "title": "Crear una mascota",
    "name": "PostMascota",
    "group": "Mascota",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la mascota.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "edad",
            "description": "<p>Edad de la mascota.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color de la mascota.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "pequeño",
              "mediano",
              "grande"
            ],
            "optional": false,
            "field": "tama",
            "description": "<p>ño Tamaño de la mascota.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de la mascota true=masculino, false=femenino.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "saludable",
              "medicado",
              "enfermo"
            ],
            "optional": false,
            "field": "estadoSalud",
            "description": "<p>Estado de salud de la mascota.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "encontrado",
              "perdido"
            ],
            "optional": false,
            "field": "estado",
            "description": "<p>Estado actual de la mascota.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "fotografias",
            "description": "<p>Fotografias de la mascota.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "edad",
            "description": "<p>Edad de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tama",
            "description": "<p>ño Tamaño de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sexo",
            "description": "<p>Sexo de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estadoSalud",
            "description": "<p>Estado de salud de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado actual de la mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "fotografias",
            "description": "<p>Fotografias en base64 de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[  {\n        \"id\": \"dbcfe000-a6e4-11eb-80b6-279f485e64f4\",\n        \"nombre\": \"morita\",\n        \"edad\": 12,\n        \"color\": \"negro\",\n        \"tamaño\": \"grande\",\n        \"sexo\": true,\n        \"estadoSalud\": \"saludable\",\n        \"estado\": \"perdido\",\n        \"usuarioId\": \"c1d81410-a6e4-11eb-80b6-279f485e64f4\",\n        \"razaId\": \"a690da30-a6e3-11eb-91bd-45f887b013cf\",\n        \"fotografias\": [\n          fotografias de la mascota\n      ]\n  }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/mascotas.ts",
    "groupTitle": "Mascota",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/mascotas"
      }
    ]
  },
  {
    "type": "get",
    "url": "/razas",
    "title": "Obtener un listado de las razas",
    "name": "GetRaza",
    "group": "Raza",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tipoMascota",
            "description": "<p>Id del tipo de mascota para filtrar razas por el tipo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre parcial para el filtrado de la raza por nombre</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.id",
            "description": "<p>Id de la raza.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.nombre",
            "description": "<p>Nombre de la raza.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.tipoMascotaId",
            "description": "<p>Id del tipo de mascota al cual pertenece la raza.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[    {\n        \"id\": \"a690da30-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Pug\",\n        \"tipoMascotaId\": \"a67da050-a6e3-11eb-91bd-45f887b013cf\"\n    },\n    {\n        \"id\": \"a690da31-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Husky\",\n        \"tipoMascotaId\": \"a67da050-a6e3-11eb-91bd-45f887b013cf\"\n    }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/razas.ts",
    "groupTitle": "Raza",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/razas"
      }
    ]
  },
  {
    "type": "get",
    "url": "/registros?mascotaId=id",
    "title": "Obtener registros por el id de mascota",
    "name": "GetRegistroMascota",
    "group": "Raza",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mascotaId",
            "description": "<p>Id de la mascota</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.id",
            "description": "<p>Id del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.descripcion",
            "description": "<p>Descripcion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.ubicacion",
            "description": "<p>Ubicacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.tipo",
            "description": "<p>Tipo del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.estado",
            "description": "<p>Estado del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.usuarioId",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.mascotaId",
            "description": "<p>Id de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[    {\n    \"id\": \"2f59d640-b5ef-11eb-a31e-a789e0481240\",\n    \"descripcion\": \"se perdio\",\n    \"ubicacion\": \"1231,12313\",\n    \"tipo\": \"perdida\",\n    \"estado\": \"perdido\",\n    \"usuarioId\": \"b7820ba0-b5ea-11eb-8e03-37dd8584d9be\",\n    \"mascotaId\": \"6213b4a0-b5ec-11eb-9d94-0be9e3c268b9\",\n    \"updatedAt\": \"2021-05-16T02:34:06.117Z\",\n    \"createdAt\": \"2021-05-16T02:34:06.117Z\",\n    \"fechaPerdida\": null,\n    \"fechaHallazgo\": null\n},{}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/registros.ts",
    "groupTitle": "Raza",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/registros?mascotaId=id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/registros?usuarioId=id",
    "title": "Obtener registros por el id del usuario",
    "name": "GetRegistroUsuario",
    "group": "Raza",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuarioId",
            "description": "<p>Id del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.id",
            "description": "<p>Id del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.descripcion",
            "description": "<p>Descripcion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.ubicacion",
            "description": "<p>Ubicacion del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.tipo",
            "description": "<p>Tipo del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.estado",
            "description": "<p>Estado del registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.usuarioId",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.mascotaId",
            "description": "<p>Id de la mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[    {\n    \"id\": \"2f59d640-b5ef-11eb-a31e-a789e0481240\",\n    \"descripcion\": \"se perdio\",\n    \"ubicacion\": \"1231,12313\",\n    \"tipo\": \"perdida\",\n    \"estado\": \"perdido\",\n    \"usuarioId\": \"b7820ba0-b5ea-11eb-8e03-37dd8584d9be\",\n    \"mascotaId\": \"6213b4a0-b5ec-11eb-9d94-0be9e3c268b9\",\n    \"updatedAt\": \"2021-05-16T02:34:06.117Z\",\n    \"createdAt\": \"2021-05-16T02:34:06.117Z\",\n    \"fechaPerdida\": null,\n    \"fechaHallazgo\": null\n},{}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/registros.ts",
    "groupTitle": "Raza",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/registros?usuarioId=id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/razas",
    "title": "Crear una raza",
    "name": "PostRaza",
    "group": "Raza",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tipoMascota",
            "description": "<p>Id del tipo de mascota para filtrar razas por el tipo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la raza</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la raza.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la raza.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipoMascotaId",
            "description": "<p>Id del tipo de mascota al cual pertenece la raza.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"id\": \"a690da31-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Husky\",\n        \"tipoMascotaId\": \"a67da050-a6e3-11eb-91bd-45f887b013cf\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/razas.ts",
    "groupTitle": "Raza",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/razas"
      }
    ]
  },
  {
    "type": "post",
    "url": "/registros",
    "title": "",
    "name": "PostRegistro",
    "group": "Raza",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripcion del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ubicacion",
            "description": "<p>Ubicacion del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuarioId",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mascotaId",
            "description": "<p>Id de la mascota.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"id\": \"2f59d640-b5ef-11eb-a31e-a789e0481240\",\n    \"descripcion\": \"se perdio\",\n    \"ubicacion\": \"1231,12313\",\n    \"tipo\": \"perdida\",\n    \"estado\": \"perdido\",\n    \"usuarioId\": \"b7820ba0-b5ea-11eb-8e03-37dd8584d9be\",\n    \"mascotaId\": \"6213b4a0-b5ec-11eb-9d94-0be9e3c268b9\",\n    \"updatedAt\": \"2021-05-16T02:34:06.117Z\",\n    \"createdAt\": \"2021-05-16T02:34:06.117Z\",\n    \"fechaPerdida\": null,\n    \"fechaHallazgo\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/registros.ts",
    "groupTitle": "Raza",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/registros"
      }
    ]
  },
  {
    "type": "get",
    "url": "/tipoMascotas",
    "title": "Obtener el tipo de mascotas",
    "name": "GetTipoMascota",
    "group": "Tipo_Mascota",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.id",
            "description": "<p>Id del tipo de mascota.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.nombre",
            "description": "<p>Nombre del tipo de mascota.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[    {\n        \"id\": \"a67da050-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Canino\",\n        \"createdAt\": \"2021-04-26T23:03:44.597Z\",\n        \"updatedAt\": \"2021-04-26T23:03:44.597Z\"\n    },\n    {\n        \"id\": \"a67da051-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Felino\",\n        \"createdAt\": \"2021-04-26T23:03:44.597Z\",\n        \"updatedAt\": \"2021-04-26T23:03:44.597Z\"\n    },\n    {\n        \"id\": \"a67da052-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Ave\",\n        \"createdAt\": \"2021-04-26T23:03:44.597Z\",\n        \"updatedAt\": \"2021-04-26T23:03:44.597Z\"\n    },\n    {\n        \"id\": \"a67da053-a6e3-11eb-91bd-45f887b013cf\",\n        \"nombre\": \"Reptil\",\n        \"createdAt\": \"2021-04-26T23:03:44.597Z\",\n        \"updatedAt\": \"2021-04-26T23:03:44.597Z\"\n    }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/tipoMascotas.ts",
    "groupTitle": "Tipo_Mascota",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/tipoMascotas"
      }
    ]
  },
  {
    "type": "get",
    "url": "/usuarios/:correo",
    "title": "Obtener usuario por correo",
    "name": "GetUsuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono del usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n     \"id\": \"507027a0-b1b0-11eb-b6db-4f9e5d82ac9e\",\n     \"nombre\": \"Fabiola\",\n     \"correo\": \"fabiola3@fabiola.com\",\n     \"fotografia\": \"--- fotografia en base 64 ---\",\n     \"createdAt\": \"2021-05-10T16:53:58.683Z\",\n     \"updatedAt\": \"2021-05-10T16:53:58.683Z\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuarios.ts",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/usuarios/:correo"
      }
    ]
  },
  {
    "type": "get",
    "url": "/usuarios/:id/mascotas",
    "title": "Obtener usuario con sus mascotas",
    "name": "GetUsuarioMascota",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mascotas",
            "description": "<p>Mascotas del usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"id\": \"507027a0-b1b0-11eb-b6db-4f9e5d82ac9e\",\n    \"nombre\": \"Fabiola\",\n    \"correo\": \"fabiola3@fabiola.com\",\n    \"fotografia\": \"--- fotografia en base 64 ---\",\n    \"mascotas\": [{}, {}] // array con las mascotas del usuario\n    \"createdAt\": \"2021-05-10T16:53:58.683Z\",\n    \"updatedAt\": \"2021-05-10T16:53:58.683Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuarios.ts",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/usuarios/:id/mascotas"
      }
    ]
  },
  {
    "type": "post",
    "url": "/usuarios",
    "title": "Crear un usuario",
    "name": "PostUsuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fotografia",
            "description": "<p>Fotografía del usuario en base 64</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador unico del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fotografia",
            "description": "<p>Fotografia del usuario en base 64</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n       \"id\": \"507027a0-b1b0-11eb-b6db-4f9e5d82ac9e\",\n       \"nombre\": \"Fabiola\",\n       \"correo\": \"fabiola3@fabiola.com\",\n       \"fotografia\": \"--- fotografia en base 64 ---\",\n       \"createdAt\": \"2021-05-10T16:53:58.683Z\",\n       \"updatedAt\": \"2021-05-10T16:53:58.683Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuarios.ts",
    "groupTitle": "Usuario",
    "sampleRequest": [
      {
        "url": "https://murmuring-peak-15403.herokuapp.com/api/usuarios"
      }
    ]
  }
] });
