import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Planes from "../components/planes/Planes";
import Resumen from "../components/resumen/Resumen";
import DefaultLayout from "../components/default-layout/DefaultLayout";
import HeroLayout from "../components/hero-layout/HeroLayout";
import React from 'react'
import { useAuth } from "../context/AuthContext";

const Router: React.FC = () => {
   const { isAuthenticated } = useAuth();
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HeroLayout />} />
            <Route element={<DefaultLayout />}>
               <Route path="planes" element={<Planes />} />
               <Route path="resumen" element={<Resumen />} />
            </Route>
            <Route path="*" element={<Navigate to={isAuthenticated ? "/planes" : "/"} />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
