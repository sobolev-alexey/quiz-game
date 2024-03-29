import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';

const NewGame = ({ text = 'Restart the game', link = '/', className = ''} : { 
    text?: string, link?: string, className?: string 
}) => {
    const { setNewGame }: AppContextInterface = useContext(AppContext);

    return (
        <Link
            to={link}
            className={className}
            onClick={() => setNewGame(true)}
        >
            {text}
        </Link>
    );
};

export default NewGame;
