import React from 'react'
import songs from '../Songs'
import Song from '../Songs'
import $ from 'jquery'
import APlayer from 'aplayer'
import playlists from '../Playlists'

const PlaylistScreen = ({match}) => {





// search for the playlist from the id in url
var theplaylist
playlists.forEach(function(element) {
    if (element.id === match.params.id) {
      
		theplaylist=element
    }
  });


// search for the playlist's songs
const songList = []
songs.forEach(function(element) {
    if (element.id_playlist === match.params.id) {
        
		const temp={
			name:element.name, 
			artist: element.artist,
			url: element.url,
			cover: element.cover
		}

		songList.push(temp)
		
    }
  });
console.log(songList)



function handleClick(num){

	const ap = new APlayer({
		
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: songList
		});

	
			var dataSwitchId = num;
			
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

				

                    <div className="col-md-3">
                        <a  onClick={() => handleClick(0)} className="album-poster" >
                            <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                        </a>
                        <h4>{theplaylist.name}</h4>
				        <p>{theplaylist.describtion}</p>
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
