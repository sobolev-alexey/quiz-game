import React, { createContext, useState, useEffect, ReactNode } from 'react';

export const AppContext = createContext<any>({})

const GlobalState = ({ children }: { children: ReactNode }) => {
	const [newGame, setNewGame] = useState(true);
	const [data, setData] = useState({ results: [] });
	const [loading, setLoading] = useState(true);
	const [results, setResults] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	useEffect(() => {
		try {
			const onNewGame = async () => {
				setLoading(true);
				fetch('https://opentdb.com/api.php?amount=10&type=boolean')
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					setLoading(false);
					setNewGame(false);
					setResults([]);
					setCurrentQuestion(0);
				});
            }

			newGame && onNewGame();
		} catch (error) {
			console.error(error);
		}

	}, [newGame]);

	return (
		<AppContext.Provider value={{
			data,
			results,
			loading,
			currentQuestion,
			setCurrentQuestion,
			setResults,
			setNewGame
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default GlobalState;