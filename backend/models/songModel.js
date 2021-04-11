import mongoose from 'mongoose'



const songSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    cover: {},

    url: {
      type: String,
      required: true,
    },

    describtion: {
      type: String,
      required: true,
    },

    artist: {
      type: String,
      required: true,
    },

    
  },
  {
    timestamps: true,
  }
)

const Song = mongoose.model('Song', songSchema)

export default Song
