import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notizs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titel').notNullable()
      table.string('inhalt').notNullable()
      table.string('kategorie').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}