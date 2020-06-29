import Connection from '../schemas/Connection'

class DisconnectUserService {
  async execute({ socket_id }) {
    await Connection.deleteOne({ socket_id })
  }
}

export default new DisconnectUserService()
