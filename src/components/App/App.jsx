import { Routes, Route } from "react-router-dom";
import { lazy} from "react";

import Layout from "../Layout/Layout";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperPage />} />
      
      </Route>
      

    </Routes>
  );
}