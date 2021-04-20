import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PlaylistScreen from './screens/PlaylistScreen'
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserPlaylistsScreen from './screens/UserPlaylistsScreen';


function App() {
  return (
    <Router>
    <Header />
    <main className='py-3'>
     
      <Container>
          
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/playlist/:id' component={PlaylistScreen} />
          <Route path='/user/playlists' component={UserPlaylistsScreen} />

      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
