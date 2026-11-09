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

  async index({ view }: HttpContext) {
    const videos = await Video.query()
      .where('visibility', 'public')
      .preload('user')
      .orderBy('createdAt', 'desc')

    return view.render('pages/videos/index', { videos })
  }
}