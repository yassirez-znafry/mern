import express from 'express'
import playlists from './data/Playlists.js'
import songs from './data/Songs.js'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/playlists', (req, res) => {
    res.json(playlists)
})

app.get('/api/playlists/:id', (req, res) => {
    const playlist = playlists.find((p)=>p.id === req.params.id)
    res.json(playlist)
})

app.get('/api/playlists/:id/songs', (req, res) => {
    const playlist = playlists.find((p)=>p.id === req.params.id)
    const song = songs.find((s)=>s.id_playlist === req.params.id)
    res.json(song)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server is running on port: ' + PORT))
