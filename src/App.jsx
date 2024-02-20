import { Layout } from "./layouts/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HadisListPage from "./pages/HadisListPage";
import HadisPage from "./pages/HadisPage";
import AboutPage from "./pages/AboutPage";
import AuthorPage from "./pages/AuthorPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/quiz" element={<TestPage />} />
          <Route path="/hadises" element={<HadisListPage />} />
          <Route path="/hadises/:id" element={<HadisPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
