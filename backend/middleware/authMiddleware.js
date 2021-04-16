import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import moduleName from '../models/userModel.js'
import User from '../models/userModel.js'

const protect = asyncHandler( async(req, res, next) => {
    let token
    

    console.log(req.headers.authorization)
   

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decode)

            req.user = await User.findById(decode.id)
            next()
            
        } catch (error) {
            console.log(error)
            res.status(401) 
            throw new Error('not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('not authorized... no token')
    }
})

export {protect}