import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourtList from './pages/CourtList';
import CourtDetail from './pages/CourtDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourtList />} />
        <Route path="/court/:id" element={<CourtDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;