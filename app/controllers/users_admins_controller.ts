import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersAdminController {
  async index({ view }: HttpContext) {
    const users = await User.query().orderBy('createdAt', 'desc')
    return view.render('pages/admin/users', { users })
  }
}