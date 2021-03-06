import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { ResultsInterface } from '../models/context';

const Collapsible = ({ results }: { results: ResultsInterface[] }) => {
  const getHeader = (title: string, isAnsweredCorrectly?: boolean) => (
    <div className={`answer-${isAnsweredCorrectly?.toString()}`}>
      {title}
    </div>
  );
  
  return (
    <div>
      <Collapse
        bordered={false}
        className="site-collapse-custom-collapse"
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
        {
          results?.map(({ question, answer, correct, isAnsweredCorrectly }, index) => (
            <Collapse.Panel header={getHeader(sanitizeHtml(question), isAnsweredCorrectly)} key={index}>
              <div>
                <p>
                  You answered {isAnsweredCorrectly ? ' correctly' : ' incorrectly'}: {answer}
                </p>
                {!isAnsweredCorrectly && <p>Correct answer: {correct}</p>}
              </div>
            </Collapse.Panel>
          ))
        }
      </Collapse>
    </div>
  );
}

export default Collapsible;
