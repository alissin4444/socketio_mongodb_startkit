import { Router } from 'express'

import StartConnectionController from './app/controllers/StartConnectionController'

export const routes = new Router()

routes.get('/', StartConnectionController.start)

export default routes
