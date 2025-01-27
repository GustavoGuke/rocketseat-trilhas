// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './tmp/app.db',
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      Extension: 'ts',
      directory: './tmp/migrations',
    },
  },
}
