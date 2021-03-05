import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';

const NewGame = ({ text = 'Restart the game', link = '/'} : { text?: string, link?: string }) => {
    const { setNewGame }: AppContextInterface = useContext(AppContext);

    return (
        <Link
            to={link}
            onClick={() => setNewGame(true)}
        >
            {text}
        </Link>
    );
};

export default NewGame;
