import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import { useMixpanel } from './hooks/useMixpanel';
import './styles/globals.css';

function App() {
  const { trackVisitor } = useMixpanel();

  useEffect(() => {
    trackVisitor();
  }, [trackVisitor]);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
