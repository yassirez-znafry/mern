import express from 'express'
import asyncHandler from 'express-async-handler'
import Playlist from '../models/playlistModel.js'


const router = express.Router()

// @desc    Fetch all playlists
// @route   GET /api/playlists
// @access  Public
router.get('/',  asyncHandler(async (req, res) => {
    const playlists =  await Playlist.find({})

    res.json(playlists)
}));

// @desc    Fetch single playlist
// @route   GET /api/playlists/:id
// @access  Public
router.get('/:id', asyncHandler( async (req, res) => {
    const playlist = await Playlist.findById(req.params.id)

    if(playlist){
        res.json(playlist)
    }else {
    res.status(404)
    throw new Error('Product not found')
  }
    
}))

export default router