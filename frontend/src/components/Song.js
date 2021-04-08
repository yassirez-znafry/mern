import React from 'react'
import {Link} from 'react-router-dom'

const Song = ({song}) => {
    return (
       <>
            <a href="javascript:void();" class="album-poster" data-switch="0">
                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
            </a>
                         <h4>{song.name}</h4> 
                        <p></p>

     </>   
    )

   
}




export default Song
