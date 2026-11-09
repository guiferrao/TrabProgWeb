import Video from '#models/video'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class VideosController {
  async create({ view }: HttpContext) {
    return view.render('pages/videos/create')
  }

  async store({ request, response, auth }: HttpContext) {
    const data = request.only(['title', 'description', 'category', 'visibility'])

    const videoFile = request.file('video', {
      size: '100mb',
      extnames: ['mp4', 'webm'],
    })

    if (!videoFile) {
      return response.badRequest('Por favor, envie um arquivo de vídeo válido (MP4 ou WebM).')
    }

    const fileName = `${new Date().getTime()}.${videoFile.extname}`
    await videoFile.move(app.makePath('public/uploads'), { name: fileName })

    const user = auth.user!
    await user.related('videos').create({
      title: data.title,
      description: data.description,
      category: data.category,
      visibility: data.visibility || 'public',
      videoUrl: `/uploads/${fileName}`,
    })

    return response.redirect('/videos')
  }

  async index({ request, view }: HttpContext) {
    const search = request.input('search')

    const query = Video.query()
      .where('visibility', 'public')
      .preload('user')
      .orderBy('createdAt', 'desc')

    if (search) {
      query.andWhere((q) => {
        q.where('title', 'like', `%${search}%`)
         .orWhere('category', 'like', `%${search}%`)
         .orWhere('description', 'like', `%${search}%`)
      })
    }

    const videos = await query
    return view.render('pages/videos/index', { videos, search })
  }

  async show({ params, view }: HttpContext) {
    const video = await Video.query()
      .where('id', params.id)
      .preload('user')
      .firstOrFail()

    video.views += 1
    await video.save()

    return view.render('pages/videos/show', { video })
  }

  async adminIndex({ view }: HttpContext) {
    const videos = await Video.query().preload('user').orderBy('createdAt', 'desc')
    return view.render('pages/admin/videos', { videos })
  }

  async destroy({ params, response }: HttpContext) {
    const video = await Video.findOrFail(params.id)

    await video.delete()
    return response.redirect('/admin/videos')
  }
}