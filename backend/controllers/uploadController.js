import File from '../models/fileModel.js'
import asyncHandler from 'express-async-handler'

import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'backend/public/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})


function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}


const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})


const uploadFile = asyncHandler(async (req, res) => {
  upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
}
}) 



/*
const  uploadController = asyncHandler(async (req, res) => {
 
    const file = new File();
      file.meta_data = req.file;
       const ff = await File.create(file)
     
       if (ff) {
res.send({message:"uploaded successfully"})  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }

})
*/
export  {uploadFile}