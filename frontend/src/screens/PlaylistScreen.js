import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import APlayer from 'aplayer'
import axios from 'axios'
import {listPlaylistSongs} from '../actions/playlistsActions'
import { useDispatch, useSelector } from 'react-redux'


const PlaylistScreen = ({match}) => {


const dispatch = useDispatch()

    const playlistSongsList = useSelector((state) => state.playlistSongsList)
    const { loading, error, songs } = playlistSongsList

    useEffect(() => {
        dispatch(listPlaylistSongs(match.params.id))
    }, [dispatch])


console.log(songs)

    
var i =0;
const songList = songs

const songAplayer=[];
    for (let index = 0; index < songList.length; index++) {
        const element = songList[index];  
        songAplayer.push(element[0])

    }

    console.log(songAplayer)
    console.log(songList)
    
    

function handleClick(num){

	const ap = new APlayer({
		
	    container: document.getElementById('aplayer'),
	    listFolded: true,
	    audio: songAplayer
	});

    console.log(num)
			
	ap.list.switch(num); 
         
	ap.play();

	$("#aplayer").addClass('showPlayer');
		
}
  

  
		
    
    return (
        <>
        
       
        <div className="main" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
				    <h3 >Best Playlists</h3>
			        </div>

				
                {songList.map((song, index) => (
       
                                <div className="col-md-3">
                        <a  onClick={() => handleClick(index)}  className="album-poster" >
                            <img src={song[0].cover} alt=""></img>
                        </a>
                        <h4>{song[0].name}</h4>
				        <p>{song[0].describtion}</p>
                    </div>
                    ))}

                    <div className="col-md-3">
                        <a  onClick={(i) => handleClick()} className="album-poster" >
                            <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                        </a>
                        <h4>sdlkcjlk</h4>
				        <p>sñldcñl</p>
                    </div>
                       
                </div>


                <div className="row">
                    <div className="col-md-12">
				        <h3 className="hjkrjf">Albums</h3>
			        </div>

                    <div className="col-md-2">

                        <a href="" className="album-poster">
                            <img src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                        </a>
                        <h4>Lorem ipsum</h4>
                    </div>

                </div>
            </div>
        </div>
        <div id="aplayer"></div>
    
    
        
        </>
    )



}

export default PlaylistScreen
