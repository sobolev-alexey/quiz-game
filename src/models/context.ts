export interface ResultsInterface {
	question: string, 
	answer?: string, 
	correct?: string,
	category?: string,
	isAnsweredCorrectly?: boolean,
	duration?: string
};

export interface DataInterface {
	question: string, 
	category: string,
	correct_answer: string,
	difficulty: string,
	type: string
};

export interface AppContextInterface {
	currentQuestion: number, 
    data: { results: DataInterface[] }, 
    loading: boolean,
	results: ResultsInterface[],
	totalTime: number,
	difficulty?: string, 
	setNewGame: (value: boolean) => void,
	setCurrentQuestion: (value: number) => void,
	setResults: (value: ResultsInterface[] | any) => void,
	setTotalTime: (value: number) => void,
	setDifficulty: (value: string) => void,

}

export interface IKeys { 
    publicKey: string; 
    privateKey: string;
}

export interface IPayload { 
    results: any; 
}