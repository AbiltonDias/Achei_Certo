const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        const [count] = await connection('achei_documents').count();

        const documents = await connection('achei_documents')
        .join('ongs','ongs.id','=','achei_documents.ong_id')
        .limit(5)
        .offset((page-1)*5)
        .select([
            'achei_documents.*',
            'ongs.name as ongName',
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
        
        const [id] = await connection('achei_documents').insert({
            numberDoc,
            name,
            description,
            ong_id,
        });
        return response.json({ id });
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const document = await connection('achei_documents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(document.ong_id != ong_id){
            return response.status(401)
            .json({
                error: 'Operation not permition.'
            });
        }
        await connection('achei_documents').where('id',id).delete();
        return response.status(204).send();
    },

    async porIdAndName(request, response){
        const {numberDoc} = request.params;
        
        if(numberDoc == null || numberDoc == ''){
            return response.status(401)
            .json({
                error: 'Operation not permition.Nenhum campo pode está vazio, tente novamente'
            })
        }
        const document = await connection('achei_documents')
        .join('ongs','ongs.id','=','achei_documents.ong_id')
        .where('numberDoc', numberDoc)
        .select([
            'achei_documents.*',
            'ongs.name as ongName' ,
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])
        .first();
        
        return response.json(document);
    }

}