import { useContext } from 'react';
import { Progress } from 'antd';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';

const ProgressBar = () => {
    const { currentQuestion, data }: AppContextInterface = useContext(AppContext);
    const percent = Math.round(currentQuestion / data?.results?.length * 100);
    return (
        <div className="progress-bar">
            <Progress percent={percent} />
        </div>
    );
};

export default ProgressBar;

