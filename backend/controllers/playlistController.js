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


// @desc    Create a playlist
// @route   POST /api/products
// @access  Private/Admin
const createPlaylist = asyncHandler(async (req, res) => {

    console.log(req.body)
    console.log(req.user._id)
  const user = await User.findById(req.user._id)
    const{name, cover, songs, nbrPlays, describtion} = req.body
   
  const nb = req.user._id
songz=["60729f0d09360a16f0eb52b9"]
  const createdPlaylist = await Playlist.create({name, cover, songz, nb, nbrPlays, describtion})
  
  res.status(201).json(createdPlaylist)
})


export {getPlaylists, getPlaylistById, getSongsByPlaylist, createPlaylist}