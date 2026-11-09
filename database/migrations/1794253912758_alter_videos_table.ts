import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'videos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('visibility', ['public', 'unlisted', 'private']).defaultTo('public')

      table.integer('views').unsigned().defaultTo(0)
      table.integer('likes').unsigned().defaultTo(0)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('visibility', 'views', 'likes')
    })
  }
}