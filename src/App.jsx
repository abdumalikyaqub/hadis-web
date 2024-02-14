import { Layout } from "./layouts/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HadisListPage from "./pages/HadisListPage";
import HadisPage from "./pages/HadisPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hadises" element={<HadisListPage />} />
          <Route path="/hadises/:id" element={<HadisPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
