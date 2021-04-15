import axios from 'axios'
import {
  PLAYLIST_LIST_REQUEST,
  PLAYLIST_LIST_SUCCESS,
  PLAYLIST_LIST_FAIL,
  PLAYLIST_SONGS_LIST_REQUEST,
  PLAYLIST_SONGS_LIST_SUCCESS,
  PLAYLIST_SONGS_LIST_FAIL
} from '../constants/playlistConstants.js'

export const listPlaylists = () => async (dispatch) => {
  try {
    dispatch({ type: PLAYLIST_LIST_REQUEST })

    const {data} = await axios.get('/api/playlists')

    dispatch({
      type: PLAYLIST_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PLAYLIST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const listPlaylistSongs = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYLIST_SONGS_LIST_REQUEST })

    const {data} = await axios.get('/api/playlists/'+id+'/songs')

    dispatch({
      type: PLAYLIST_SONGS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PLAYLIST_SONGS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}