import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile, getUserPlaylists} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.post('/', registerUser)
router.route('/playlists').get(protect, getUserPlaylists)

export default router