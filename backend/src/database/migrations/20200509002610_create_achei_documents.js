

exports.up = function(knex) {
    return knex.schema.createTable('achei_documents',function(table){
        table.increments();
        table.string('numberDoc').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        // foreign key
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('achei_documents');
  };
  