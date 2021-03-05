import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
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
        <Button 
            type="primary" 
            shape="round"
            onClick={() => nextQuestion()}
        >
            {text}
        </Button>
    );
};

export default CallToAction;
