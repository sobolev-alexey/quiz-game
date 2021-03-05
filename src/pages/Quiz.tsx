import React, { useContext } from 'react';
import { Spin } from 'antd';
import { AppContext } from '../context/globalState';
import { CallToAction, Layout, NewGame, Question, Progress } from '../components';
import { AppContextInterface } from '../models/context';

const Quiz = () => {
  const { currentQuestion, data, loading, results }: AppContextInterface = useContext(AppContext);
  
  // If no questions were loaded and to prevent answered questions to appear again
  const isValidQuestion = typeof currentQuestion !== 'undefined' && data?.results.length > results.length;
  
  return (
    <Layout>
      {
        loading ? <Spin /> : isValidQuestion ? (
          <div className="question-wrapper">
            <Progress />
            <Question 
              category={data?.results?.[currentQuestion]?.category}
              question={data?.results?.[currentQuestion]?.question}
              difficulty={data?.results?.[currentQuestion]?.difficulty}
            />
            <div className="cta-wrapper">
              <CallToAction text="True" />
              <CallToAction text="False" />
            </div>
          </div>
      ) : (
        <NewGame />
      )}
    </Layout>
  );
};

export default Quiz;
