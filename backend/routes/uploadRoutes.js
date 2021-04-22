import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

var songname;
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'backend/public/')
  },
  filename(req, file, cb) {
    cb(
      null,
      songname=`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const upload = multer({
  storage
})

router.post('/', upload.single('song'), (req, res) => {
  res.send(`${songname}`)
})
export default router