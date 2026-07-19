import { Routes, Route } from "react-router-dom";
import { lazy} from "react";

import Layout from "../Layout/Layout";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'))

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      
      </Route>
      

    </Routes>
  );
}