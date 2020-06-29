import Connection from '../schemas/Connection'

class ConnectUserService {
  async execute({ user_id, socket_id }) {
    await Connection.create({ user_id, socket_id })
  }
}

export default new ConnectUserService()
