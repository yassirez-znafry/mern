import mongoose from 'mongoose'



const playlistSchema = mongoose.Schema(
  {
    songs: [
          {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Song',
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    name: {
      type: String,
      required: true,
    },

    cover: {type: String, 
      required: true 
    },

    describtion: {
      type: String,
      required: true,
    },
    
    nbrPlays: {
      type: Number,
      required: true,
      default: 0,
    },

  },
  {
    timestamps: true,
  }
)

const Playlist = mongoose.model('Playlist', playlistSchema)

export default Playlist