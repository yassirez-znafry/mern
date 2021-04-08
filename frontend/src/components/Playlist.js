import React from 'react'
import {Link} from 'react-router-dom'

const Playlist = ({playlist}) => {
    return (
       <>
            <Link to= {`/playlist/${playlist.id}`} className="album-poster" dataSwitch="0">
                            <img src={playlist.image} alt=""></img>
                    
            </Link>
                         <h4>{playlist.name}</h4> 
                        <p>{playlist.nbrPlays} plays</p>

     </>   
    )
}



export default Playlist
