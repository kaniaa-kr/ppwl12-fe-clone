import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import PageExample from './pages/PageExample';
// import Navbar from './components/Navbar'; // <-- Boleh dihapus

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col font-sans">
        
        {/* Hapus baris <Navbar /> di sini agar tidak ada menu yang tumpang tindih */}
        
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page-2" element={<Page2 />} />
            <Route path="/page-example" element={<PageExample />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;