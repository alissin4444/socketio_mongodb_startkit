import socketio from 'socket.io'

import ConnectUserService from './app/services/ConnectUserService'
import DisconnectUserService from './app/services/DisconnectUserService'

const setupSocket = (server) => {
  const io = socketio(server)

  io.on('connection', async (socket) => {
    const { user_id } = socket.handshake.query

    await ConnectUserService.execute({
      user_id,
      socket_id: socket.id
    })

    socket.on('disconnect', async () => {
      await DisconnectUserService.execute({
        socket_id: socket.id
      })
    })
  })

  return io
}

export { setupSocket }
