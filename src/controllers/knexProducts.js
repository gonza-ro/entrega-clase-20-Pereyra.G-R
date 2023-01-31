import dotenv from ('dotenv').config()

export const knex = require('knex')({
    client: 'mysql2',
    
    useNullAsDefault: true,

    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'listadeproductos'
      
    }
})

