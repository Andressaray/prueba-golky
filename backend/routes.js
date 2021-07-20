import { setText } from './controllers/text'

export const routes = (router) => {
  router.get('/text/:text', setText)
}
