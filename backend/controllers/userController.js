import Playlist from '../models/playlistModel.js'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  

  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error('user already exists')
    
  }
  
  const user = await User.create({name, email, password})

  if (user) {
    res.status(201).json({
      name: user.name,
      email: user.email,
      _id: user._id,
    })
  }else{
    res.status(400)
    throw new Error('invalid user data')
  }
})


const getUserProfile = asyncHandler(async (req, res) => {
  
  const user = await User.findById(req.user._id)
  
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  }else{
    res.status(401)
    throw new Error('user not found')
  }
})


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


const getUserPlaylists = asyncHandler(async (req, res) => {
  
  const user = await User.findById(req.user._id)
  
  const playlist = await Playlist.find({ "user": user._id });
  
console.log(playlist)

res.json(playlist)

})





export {authUser, getUserProfile, registerUser, updateUserProfile, getUserPlaylists}