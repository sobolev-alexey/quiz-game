import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { ResultsInterface } from '../models/context';

const Collapsible = ({ results }: { results: ResultsInterface[] }) => (
  <div>
    <Collapse
      bordered={false}
      className="site-collapse-custom-collapse"
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    >
      {
        results?.map(({ question, answer, correct }, index) => (
          <Collapse.Panel header={sanitizeHtml(question)} key={index}>
            <div>
              <p>
                You answered {correct ? ' correctly' : ' incorrectly'}: {answer}
              </p>
              {!correct && <p>Correct answer: {correct}</p>}
            </div>
          </Collapse.Panel>
        ))
      }
    </Collapse>
  </div>
);

export default Collapsible;
