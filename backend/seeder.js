import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import playlists from './data/Playlists.js'
import User from './models/userModel.js'
import Song from './models/songModel.js'
import connectDB from './config/db.js'
import Playlist from './models/playlistModel.js'
import songs from './data/Songs.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Song.deleteMany()
    await Playlist.deleteMany()
    await User.deleteMany()


    const createdUsers = await User.insertMany(users)
    const aUser = createdUsers[0]._id
    const createdSongs = await Song.insertMany(songs)
    const aSong = createdSongs[0]._id




    const samplePlaylists = playlists.map((playlist) => {
      return { ...playlist, user: aUser, songs: aSong }
    })
    await Playlist.insertMany(samplePlaylists)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Song.deleteMany()
    await Playlist.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}