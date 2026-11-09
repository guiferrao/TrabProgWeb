/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.get('/', async ({ response }) => {
  return response.redirect('/videos')
})

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.on('/dashboard').render('pages/dashboard').as('dashboard')
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

const RegistersController = () => import('#controllers/registers_controller')

router.get('/cadastro', [RegistersController, 'create'])
router.post('/cadastro', [RegistersController, 'store'])

const VideosController = () => import('#controllers/videos_controller')

router.group(() => {
  router.get('/videos/enviar', [VideosController, 'create'])
  router.post('/videos', [VideosController, 'store'])
}).use(middleware.auth())

router.get('/videos', [VideosController, 'index'])
router.get('/videos/:id', [VideosController, 'show'])
