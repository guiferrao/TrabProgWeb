import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('username').unique().nullable() 
      table.string('bio').nullable()

      table.enum('role', ['admin', 'provider', 'user']).defaultTo('user')
      table.enum('status', ['active', 'suspended']).defaultTo('active')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('username', 'bio', 'role', 'status')
    })
  }
}