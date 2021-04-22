import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'


const UploadPlaylistScreen = ({ match, history }) => {

  
  const [nbrSongs, setNbrSongs] = useState(0)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [listSongs, setListSongs] = useState([])
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  

  const loading=false
  const error = false

  const uploadFileHandlerImage = async(e)=>{
    const file = e.target.files[0]
    console.log(file)
    const formData = new FormData()
    formData.append('song', file)

     try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      console.log(data)
      
    } catch (error) {
      console.error(error)
      
    }
  };


  const uploadFileHandlerSong = async(e)=>{
    const file1 = e.target.files[0]
    const file2 = e.target.files[1]
    console.log(file1)
    console.log(file2)
    const formData = new FormData()
    formData.append('song', file1)

     try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setListSongs([...listSongs, data])
      console.log(data)
      console.log(listSongs)
      
      
    } catch (error) {
      console.error(error)
      
    }
  };


  const submitHandler = async(e)=>{
    e.preventDefault()
    console.log(listSongs)
    const playlistEx = {
      name: name,
      cover: image,
      describtion: description,
      songs: listSongs,
      nbrPlays: 0
    }

     var userInfo =JSON.parse( localStorage.getItem('userInfo'));

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post('/api/playlists/upload', playlistEx, config)
      
    } catch (error) {
      console.error(error)
      
    }

};
  
  

const songs=[]

for (var i = 0; i < nbrSongs; i += 1) {
      songs.push(<Form.Group key={i} controlId='song'>
              <Form.Label>Song number {i+1}</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter the song'
                value={listSongs[i]}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='song-file'
                label='Choose File'
                custom
                onChange={uploadFileHandlerSong}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>);
    };

const addSong = () => {
setNbrSongs(nbrSongs+1)
}





  return (
    <>
      <Link to='/user/playlists' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1 style={{color: "white"}}>Add Playlist</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter playlist name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Cover</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter playlist cover'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandlerImage}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

              {songs}
            

        

            

            <Button  style={{marginRight: 310}} onClick={addSong} variant='primary'>
              Add Song
            </Button>
            <Button type='submit' variant='primary' onClick={submitHandler}>
              Submit
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UploadPlaylistScreen
