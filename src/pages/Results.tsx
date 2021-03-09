import React, { useContext } from 'react';
import { Typography } from 'antd';
import { AppContext } from '../context/globalState';
import { Collapsible, Layout, NewGame, Progress, Share } from '../components';
import { ResultsInterface } from '../models/context';

const { Title } = Typography;

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
          <Title level={2}>
            You scored: <span>{getFinalResult()}</span>
          </Title>

          <Collapsible results={results} />
          <div className="cta-wrapper">
            <Share score={getFinalResult()} />
            <NewGame text="Play again?" className="play-again-btn" />
          </div>
        </div>
      ) : (
        <NewGame className="restart" />
      )}
    </Layout>
  );
};

export default Results;
