import React from 'react'
import songs from '../Songs'
import Song from '../Songs'
import $ from 'jquery'
import APlayer from 'aplayer'

const PlaylistScreen = ({match}) => {

    
    
const songList = []
songs.forEach(function(element) {
    if (element.id_playlist === match.params.id) {
        songList.push(element);
    }
  });
  console.log(songList);

  

  
		// NOW I CLICK album-poster TO GET CURRENT SONG ID
		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId); //this is static id but i use dynamic

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

		const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'Invisible Beauty',
		        artist: 'Artist Name',
		        url: 'source/just_stay.mp3',
		        cover: 'source/yyaasss.jpg'
		    },
			{
		        name: 'Just Stay',  // SONG NAME
		        artist: 'Artist Name', //ARTIST NAME
		        url: 'source/just_stay.mp3', // PATH NAME AND SONG URL
		        cover: 'https://images.pexels.com/photos/838702/pexels-photo-838702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' // COVER IMAGE
		    },
			{
				name: 'Liquid Time',
				artist: 'Artist Name',
				url: 'source/liquid_time.mp3',
				cover: 'https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},
			{
				name: 'Silky Smooth',
				artist: 'Artist Name',
				url: 'source/silky_smooth.mp3',
				cover: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},


		    ]
		});
    
    
    return (
        <>
        
       <body>
        <div className="main" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
				    <h3 >Best Playlists</h3>
			        </div>
                    <div class="col-md-3">
                        <a href="javascript:void();" class="album-poster" data-switch="0">
                            <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                        </a>
                        <h4>Lorem ipsum</h4>
				        <p>lorem ipsum - 2010</p>
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
        <div id="aplayer"></div>
    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
	
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js"></script>
        </body>
        </>
    )



}

export default PlaylistScreen
