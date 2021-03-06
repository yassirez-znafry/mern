import path from 'path'
import express from 'express'
import multer from 'multer'
import { saveSong } from '../controllers/uploadController.js';
import { saveImage } from '../controllers/uploadController.js';
const router = express.Router()




// upload song
var songName;
const songStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'backend/public/songs/')
  },
  filename(req, file, cb) {
    cb(
      null,
      songName=`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})
const uploadSong = multer({
  storage: songStorage
})
router.post('/song/', uploadSong.single('song'), (req, res) => {
  res.send(`${songName}`)
})



// upload Image
var imageName;
const imageStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'backend/public/images/')
  },
  filename(req, file, cb) {
    cb(
      null,
      imageName=`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const uploadImage = multer({
  storage: imageStorage
})

router.post('/image/', uploadImage.single('image'), (req, res) => {
  res.send(`${imageName}`)
})







export default router