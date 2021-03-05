import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';

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
            <div className="app-wrapper">{children}</div>
        </HelmetProvider>
    );
}

export default Layout;