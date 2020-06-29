import mongoose from 'mongoose'

const ConnectionSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    socket_id: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Connection', ConnectionSchema)
