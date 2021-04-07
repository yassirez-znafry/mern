import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Playlists from './Playlists';

function App() {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
          <Playlists/>
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
