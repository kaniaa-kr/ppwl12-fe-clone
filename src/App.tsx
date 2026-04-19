import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import PageExample from './pages/PageExample';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/page-3" element={<Page3 />} />
          <Route path="/page-4" element={<Page4 />} />
          <Route path="/page-5" element={<Page5 />} />
          <Route path="/page-6" element={<Page6 />} />
          <Route path="/page-example" element={<PageExample />} />
        </Routes>
    </Router>
  );
}

export default App;