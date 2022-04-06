const Knex = require('knex');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.double('price').notNullable();
        table.integer('category_id',10).notNullable();
        table.integer('product_type_id',10).notNullable();
        table.enu('status', ['publish', 'unpublish']).defaultTo('publish');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('products');
};
