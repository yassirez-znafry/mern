import {
  PLAYLIST_LIST_REQUEST,
  PLAYLIST_LIST_SUCCESS,
  PLAYLIST_LIST_FAIL,
  PLAYLIST_SONGS_LIST_REQUEST,
  PLAYLIST_SONGS_LIST_SUCCESS,
  PLAYLIST_SONGS_LIST_FAIL
} from '../constants/playlistConstants.js'

export const playlistReducer = (state = { playlists: [] }, action) => {
  switch (action.type) {
    case PLAYLIST_LIST_REQUEST:
      return { loading: true, playlists: [] }
    case PLAYLIST_LIST_SUCCESS:
      return {
        loading: false,
        playlists: action.payload,
      }
    case PLAYLIST_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const playlistSongsReducer = (state = { songs: [] }, action) => {
  switch (action.type) {
    case PLAYLIST_SONGS_LIST_REQUEST:
      return { loading: true, songs: [] }
    case PLAYLIST_SONGS_LIST_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
      }
    case PLAYLIST_SONGS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}