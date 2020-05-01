const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        const [count] = await connection('usuarios').count();
        const usuarios = await connection('usuarios')
        .limit(5)
        .offset((page-1)*5)
        .select('*');
    
        response.header('X-Total-Count',count['count(*)']);
        return response.json(usuarios);
    },
    async create(request, response){
        const {name,email,whatsapp,city,uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('usuarios').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({ id });
    }
    

}