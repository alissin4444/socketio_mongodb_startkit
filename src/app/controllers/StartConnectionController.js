import path from 'path'

class StartConnectionController {
  async start(req, res, next) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'index.html'))
  }
}

export default new StartConnectionController()
