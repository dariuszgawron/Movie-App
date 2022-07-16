import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/Details';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/:type/search/:query' element={<Catalog />} />
            <Route path='/:type/:id' element={<Details />} />
            <Route path='/:type' element={<Catalog />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;
