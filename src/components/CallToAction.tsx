import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';

const CallToAction = ({ text }: { text: string }) => {
    let history = useHistory();
    const {
        currentQuestion,
        setCurrentQuestion,
        data,
        results,
        setResults,
    }: AppContextInterface = useContext(AppContext);

    const nextQuestion = () => {
        if (currentQuestion < data?.results.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }

        setResults([
            ...results,
            {
                answer: text,
                question: data?.results[currentQuestion]?.question,
                correct: data?.results[currentQuestion]?.correct_answer,
            },
        ]);
        if (currentQuestion === data?.results.length - 1) {
            history.push('/results');
        }
    };

    return (
        <button 
            className={`${text.toLocaleLowerCase()}-btn`}
            onClick={() => nextQuestion()}
        >
            {text}
        </button>
    );
};

export default CallToAction;
