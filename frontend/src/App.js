import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Playlists from './Playlists';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PlaylistScreen from './screens/PlaylistScreen'


function App() {
  return (
    <Router>
    <Header />
    <main className='py-3'>
     
      <Container>
          
          <Route path='/' component={HomeScreen} exact />
          <Route path='/playlist/:id' component={PlaylistScreen} />

      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
