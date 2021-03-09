import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';
import getDuration from '../utils/timer';

const CallToAction = ({ text }: { text: string }) => {
    let history = useHistory();
    const {
        currentQuestion,
        setCurrentQuestion,
        data,
        results,
        setResults,
    }: AppContextInterface = useContext(AppContext);

    const startTime = new Date().getTime();

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
                isAnsweredCorrectly: text === data?.results[currentQuestion]?.correct_answer,
                duration: getDuration(startTime)
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
