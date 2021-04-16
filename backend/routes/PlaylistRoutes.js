import express from 'express'
import asyncHandler from 'express-async-handler'
import Playlist from '../models/playlistModel.js'
import Song from '../models/songModel.js'
import {getPlaylists, getPlaylistById, getSongsByPlaylist} from '../controllers/playlistController.js'

const router = express.Router()

router.route('/').get(getPlaylists)
router.route('/:id').get(getPlaylistById)
router.route('/:id/songs').get(getSongsByPlaylist)


export default router