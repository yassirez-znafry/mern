import express from 'express'
import asyncHandler from 'express-async-handler'
import Playlist from '../models/playlistModel.js'
import Song from '../models/songModel.js'


// @desc    Fetch all playlists
// @route   GET /api/playlists
// @access  Public
const getPlaylists = asyncHandler(async (req, res) => {
    const playlists =  await Playlist.find({})

    res.json(playlists)
}) 


// @desc    Fetch a apecific playlist by id
// @route   GET /api/playlists/:id
// @access  Public
const getPlaylistById = asyncHandler(async (req, res) => {
    const playlist = await Playlist.findById(req.params.id)

    if(playlist){
        res.json(playlist)
    }else {
    res.status(404)
    throw new Error('playlist not found')
  }
})


// @desc    Fetch all songs of a specific playlist
// @route   GET /api/:id/songs
// @access  Public
const getSongsByPlaylist = asyncHandler(async (req, res) => {
    const songList=[];
    const playlist = await Playlist.findById(req.params.id)

    for (let index = 0; index < playlist.songs.length; index++) {
        const song = await Song.find( playlist.songs[index]); 
        songList.push(song)
    }
    
    if(playlist){
        res.json(songList)
    }else {
    res.status(404)
    throw new Error('playlist not found')
  }
})

export {getPlaylists, getPlaylistById, getSongsByPlaylist}