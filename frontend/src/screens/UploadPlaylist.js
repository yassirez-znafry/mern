import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'


const UploadPlaylistScreen = ({ match, history }) => {
  const productId = match.params.id
  const [nbrSongs, setNbrSongs] = useState(0)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  

  const loading=false
  const error = false
  const uploadFileHandler = ()=>{};
  const submitHandler = ()=>{};
  
  

const songs=[]

for (var i = 0; i < nbrSongs; i += 1) {
      songs.push(<Form.Group controlId='song'>
              <Form.Label>Song number {i+1}</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter the song'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='song-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
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
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

              {songs}
            

        

            

            <Button  style={{marginRight: 310}} onClick={addSong} variant='primary'>
              Add Song
            </Button>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UploadPlaylistScreen
