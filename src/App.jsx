import { Layout } from "./layouts/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/map" element={<MapPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
