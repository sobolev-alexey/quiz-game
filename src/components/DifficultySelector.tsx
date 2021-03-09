import React, { useContext } from 'react';
import { Select } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { AppContext } from '../context/globalState';

const { Option } = Select;

const DifficultySelector = () => {
  const { difficulty, setDifficulty, setNewGame } = useContext(AppContext);

  return (
    <Select
      value={difficulty}
      bordered={false}
      className='difficulty-selector'
      suffixIcon={<CaretRightOutlined rotate={90} />}
      onChange={(value: string) => setDifficulty(value) || setNewGame(true)}>
      <Option value=''>Difficulty: <span className="difficulty-level">Random</span></Option>
      <Option value='easy'>Difficulty: <span className="difficulty-level">Easy</span></Option>
      <Option value='medium'>Difficulty: <span className="difficulty-level">Medium</span></Option>
      <Option value='hard'>Difficulty: <span className="difficulty-level">Hard</span></Option>
    </Select>
  );
};

export default DifficultySelector;
