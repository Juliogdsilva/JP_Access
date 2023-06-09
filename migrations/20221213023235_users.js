const tableName = 'users';

/* eslint-disable func-names */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments('id').primary().unsigned();
    t.string('name', 100).notNullable();
    t.string('cpf', 80).nullable();
    t.string('email', 100).notNullable().unique();
    t.string('password', 100).notNullable();
    t.string('phone', 80).nullable();
    t.string('status', 50).notNullable().defaultTo('ative');
    t.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    t.timestamp('updated_at').nullable().defaultTo(knex.fn.now());
    t.timestamp('deleted_at').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
