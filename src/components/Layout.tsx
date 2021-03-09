import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';
import { DifficultySelector, Footer } from '.';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { currentQuestion }: AppContextInterface = useContext(AppContext);
    let history = useHistory();

    const getPageTitle = () => {
        switch (history.location.pathname) {
            case '/quiz':
                return `Quiz game - Question ${currentQuestion + 1}`;
            case '/results':
                return 'Quiz game - Results';
            default:
                return 'Quiz game - Start';
        }
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{getPageTitle()}</title>
            </Helmet>
            <DifficultySelector />
            <div className="app">
                <div className="app-wrapper">{children}</div>
            </div>
            <Footer />
        </HelmetProvider>
    );
}

export default Layout;