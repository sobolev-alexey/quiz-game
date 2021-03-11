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

				const payload = { difficulty, key: keys?.publicKey };

				const results = await callApi(payload, keys?.privateKey);
				if (results) {
					setData({ results });
					setLoading(false);
					setNewGame(false);
					setResults([]);
					setCurrentQuestion(0);
				}	
            }

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