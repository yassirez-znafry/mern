import express from 'express'
import playlists from './data/Playlists.js'
import songs from './data/Songs.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import playlistRoutes from './routes/PlaylistRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import path from 'path'
import bodyParser from 'body-parser'



dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running......')
})


app.use('/api/playlists', playlistRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)




/*
const __dirname = path.resolve()
app.use('/backend/public/', express.static(path.join(__dirname, '/backend/public/')))



import mongoose from 'mongoose'
const fileSchema = new mongoose.Schema({
    meta_data:{}
});

mongoose.model("file",fileSchema);

*/

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server is running on port: ' + PORT))


app.use(notFound)
app.use(errorHandler)