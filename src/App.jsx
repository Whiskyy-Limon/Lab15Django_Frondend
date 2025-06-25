import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SeriePage from './pages/SeriePage';
import SerieFormPage from './pages/SerieFormPage';
import CategoryFormPage from "./pages/CategoryFormPage";
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/categories/new" element={<CategoryFormPage />} />
            <Route path="/categories/edit/:id" element={<CategoryFormPage />} />
            <Route path="/series" element={<SeriePage />} />
            <Route path="/series/new" element={<SerieFormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
export default App;
