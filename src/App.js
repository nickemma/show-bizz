import MoviePage from './components/MoviePage';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <section className="App">
      <Navbar />
      <MoviePage />
      <Footer />
    </section>
  );
}

export default App;
