import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Media from './pages/Media';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </Routes>
    </Router>
  );
}

export default App;