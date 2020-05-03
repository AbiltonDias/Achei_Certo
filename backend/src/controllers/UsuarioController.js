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
    async porEmailAndPass(request, response){
        const { email } = request.query;
        const { password } = request.query;

        if(email === null || email == '' || password === null || password == ''){
            return response.status(401)
            .json({
                error: 'Operation not permition. Nenhum campo pode está vazio, tente novamente.'
            })
        }
        const usuario = await connection('achei_usuarios')
            .where('email', email )
            .where('password', password)
            .select(['email','name'])
            .first();
        
        if(usuario == undefined){
            return response.status(401)
            .json({
                error: 'Operation not permition. Dados Incorretos ou usuario não tem cadastro, tente novamente'
            })
        }      
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