require('sqlite3');

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  }
});

database.schema.hasTable('pizzas').then((exists) => {
  if (!exists) {
    return database.schema.createTable('pizzas', (t) => {
      t.increments('id').primary();
      t.string('name', 100);
      t.integer('quantity');
      t.text('notes');
    });
  }
});

module.exports = database;
