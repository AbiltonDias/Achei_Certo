const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        const [count] = await connection('documents').count();

        const documents = await connection('documents')
        .join('ongs','ongs.id','=','documents.ong_id')
        .limit(5)
        .offset((page-1)*5)
        .select([
            'documents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        response.header('X-Total-Count',count['count(*)']);
        return response.json(documents);
    },
    async create(request, response){
        const { numberDoc,name, description} = request.body;
        const ong_id = request.headers.authorization;
        
        const user_id = await connection('usuarios')
        .where('name',name)
        .select('id');
        
        const [id] = await connection('documents').insert({
            numberDoc,
            name,
            description,
            ong_id,
            user_id
        });
        return response.json({ id });
    }
}

