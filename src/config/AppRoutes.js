import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/:type/search/:keyword' element={<Catalog />} />
            <Route path='/:type/:id' element={<Detail />} />
            <Route path='/:type' element={<Catalog />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;
