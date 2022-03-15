async function up(knex) {
  return knex.schema.createTable('url', (table) => {
    table.string('id');
    table.string('url');
  });
}

async function down(knex) {
  return knex.schema.dropTableIfExists('url');
}

module.exports = {
  up,
  down,
};
