import { createContext, useState, useEffect, ReactNode } from 'react';
import { generateKeys } from '../utils/encryption';
import callApi from '../utils/callApi';
import { IKeys } from '../models/context';

export const AppContext = createContext<any>({})

const GlobalState = ({ children }: { children: ReactNode }) => {
	const [newGame, setNewGame] = useState(true);
	const [data, setData] = useState({ results: [] });
	const [loading, setLoading] = useState(true);
	const [results, setResults] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [difficulty, setDifficulty] = useState('');
	const [keys, setKeys] = useState<IKeys>();

	useEffect(() => {
		try {
			// Generate public/private key to encrypt questions
			const keys: IKeys = generateKeys();
			setKeys(keys);
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		try {
			const onNewGame = async () => {
				setLoading(true);

				// Communicate public key to the proxy service, it will be used to encrypt questions
				// so that questions and answers are never sent in plain text over the network
				const payload = { difficulty, key: keys?.publicKey };

				// Private key will be used to decrypt questions on the client side
				// Private key is never exposed, logged or stored
				// it is held in memory for the duration of the game session
				const results = await callApi(payload, keys?.privateKey);
				if (results) {
					setData({ results });
					setLoading(false);
					setNewGame(false);
					setResults([]);
					setCurrentQuestion(0);
				}	
            }

			// Request new questions after keys were generated 
			keys?.publicKey && newGame && onNewGame();
		} catch (error) {
			console.error(error);
		}

	}, [newGame, difficulty, keys?.publicKey]);

	return (
		<AppContext.Provider value={{
			data,
			results,
			loading,
			currentQuestion,
			difficulty,
			setCurrentQuestion,
			setResults,
			setNewGame,
			setDifficulty
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default GlobalState;