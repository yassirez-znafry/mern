import express from 'express'
import playlists from './data/Playlists.js'
import songs from './data/Songs.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import playlistRoutes from './routes/PlaylistRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running......')
})


app.use('/api/playlists', playlistRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server is running on port: ' + PORT))


app.use(notFound)
app.use(errorHandler)