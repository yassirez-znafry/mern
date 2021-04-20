import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Playlist from '../components/Playlist'
import axios from 'axios'
import {getUserPlaylists} from '../actions/userActions'


const HomeScreen = () => {

    const dispatch = useDispatch()

    const userPlaylists = useSelector((state) => state.userPlaylists)
    const { loading, error, playlists } = userPlaylists

    useEffect(() => {
        dispatch(getUserPlaylists())
    }, [dispatch])

    

    console.log(playlists)
  
    return (

        <body>
        <div className="main" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
				    <h3 >Best Playlists</h3>
			        </div>
                        {playlists.map(playlist => (
       
                                <div className="col-md-3">
                                <Playlist playlist={playlist}/>
                        </div>
                    ))}
                    <div className="col-md-3">
                        <a href="/register" className="album-poster" dataSwitch="0">
                            <img src="/playlists-images/plus.jpg" alt=""></img>
                        </a>
                        <h4>SHARE WITH US YOUR PLAYLISTS</h4>
				        <p></p>
                    </div>
                    
                </div>


                <div className="row">
                    <div className="col-md-12">
				        <h3 className="hjkrjf">Albums</h3>
			        </div>

                    <div className="col-md-2">

                        <a href="#" className="album-poster">
                            <img src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                        </a>
                        <h4>Lorem ipsum</h4>
                    </div>

                </div>
            </div>
        </div>
    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
	
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js"></script>
        </body>
       
    )
}



export default HomeScreen
