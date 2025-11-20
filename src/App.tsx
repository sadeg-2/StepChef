import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';
import ExplorePage from './pages/Explore';
import AreaPage from './pages/AreaPage';
import IngredientPage from './pages/IngredientPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* All routes inside MainLayout share the same Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<AboutPage />} />{' '}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/area/:areaName" element={<AreaPage />} />
          <Route path="/ingredient/:ingredientName" element={<IngredientPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
