import React, { useContext } from 'react';
import { AppContext } from '../context/globalState';
import { Collapsible, Layout, NewGame, Progress, Share } from '../components';
import { ResultsInterface } from '../models/context';

const Results = () => {
  const { results }: { results: ResultsInterface[] } = useContext(AppContext);

  const getFinalResult = () => {
    const score = results?.filter((res: { answer?: string, correct?: string }) => 
      res?.answer === res?.correct);
    return `${score?.length} / ${results?.length}`;
  };

  return (
    <Layout>
      {results?.length !== 0 ? (
        <div className="results-wrapper">
          <Progress />
          <h1>
            You Scored: <span>{getFinalResult()}</span>
          </h1>

          <Collapsible results={results} />
          <Share score={getFinalResult()} />
          <NewGame text="Play again?" className="play-again-btn" />
        </div>
      ) : (
        <NewGame />
      )}
    </Layout>
  );
};

export default Results;
