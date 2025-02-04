import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import HomePages from './pages/HomePage/index'
import Team from './pages/TeamPage/index'
import About from './pages/About/index'


const Router = () => {

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/ekibimiz" element={<Team />} />
                <Route path="/hakkimizda" element={<About />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router