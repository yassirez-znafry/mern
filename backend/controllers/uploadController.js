import path from 'path'
import express from 'express'
import multer from 'multer'
import asyncHandler from 'express-async-handler'

const router = express.Router()

const saveSong = asyncHandler(async (req, res) => {


var songName;
const storage = multer.diskStorage({
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

const upload = multer({
  storage
})

router.post('/song/', upload.single('song'), (req, res) => {
  res.send(`${songName}`)
})
   
})


const saveImage = asyncHandler(async (req, res) => {
var imageName;
const storage = multer.diskStorage({
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

const upload = multer({
  storage
})

module.exports.send = (req, res) => {
  upload.single('image');
  res.send(imageName);
}

   
})



export {saveSong, saveImage}