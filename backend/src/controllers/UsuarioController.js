const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        const [count] = await connection('achei_usuarios').count();
        const usuarios = await connection('achei_usuarios')
        .limit(5)
        .offset((page-1)*5)
        .select('*');
    
        response.header('X-Total-Count',count['count(*)']);
        return response.json(usuarios);
    },
    async porId(request, response){
        const { id } = request.params;
        const usuario_id =  request.headers.authorization;

        const usuario = await connection('achei_usuarios')
        .where('id', id)
        .select('usuario_id')
        .first();

        return response.json(usuario);

    },

    async create(request, response){
        const {name,email,password,whatsapp,city,uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('achei_usuarios').insert({
            id,
            name,
            email,
            password,
            whatsapp,
            city,
            uf
        });
        return response.json({ id });
    }
    

}