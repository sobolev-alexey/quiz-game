export interface ResultsInterface {
	question: string, 
	answer?: string, 
	correct?: string,
	category?: string,
};

export interface DataInterface {
	question: string, 
	category: string,
	correct_answer: boolean,
	difficulty: string,
	type: string
};

export interface AppContextInterface {
	currentQuestion: number, 
    data: { results: DataInterface[] }, 
    loading: boolean,
	setNewGame: (value: boolean) => void,
	setCurrentQuestion: (value: number) => void,
	setResults: (value: ResultsInterface[] | any) => void,
	results: ResultsInterface[]
}