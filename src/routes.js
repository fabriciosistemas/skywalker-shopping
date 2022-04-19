import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import ClubesEuropeus from './Pages/clubes-europeus';
import ClubesNacionais from './Pages/clubes-nacionais';
import CamisasHistoricas from './Pages/camisas-historicas';
import SelecoesNacionais from './Pages/selecoes-nacionais';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/clubes-nacionais"
                element={<ClubesNacionais />}
            />
            <Route
                path="/clubes-europeus"
                element={<ClubesEuropeus />}
            />
            <Route
                path="/camisas-historicas"
                element={<CamisasHistoricas />}
            />
            <Route
                path="/selecoes-nacionais"
                element={<SelecoesNacionais />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;
