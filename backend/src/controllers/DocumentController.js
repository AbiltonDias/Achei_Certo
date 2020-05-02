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
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const document = await connection('documents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(document.ong_id != ong_id){
            return response.status(401)
            .json({
                error: 'Operation not permition.'
            });
        }
        await connection('documents').where('id',id).delete();
        return response.status(204).send();
    }
}

