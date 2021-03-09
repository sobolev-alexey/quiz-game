import React from 'react';
import { Popover, Typography } from 'antd';

const { Paragraph } = Typography;

const Difficulty = ({ difficulty }: { difficulty: string }) => {
    const popup = (
        <span className="tooltip">
            Difficulty: <strong>{difficulty}</strong>
        </span>
    );
    
    return (
        <Popover
            content={popup}
            placement='right'
            trigger={['click', 'hover', 'focus']}
            className="difficulty-wrapper"
        >
            <div>
                <Paragraph strong>
                    Difficulty:
                </Paragraph>
                <div className="difficulty">
                    <div className="fill" />
                    <div className={`border ${difficulty}`} />
                </div>
            </div>
        </Popover>
    );
};

export default Difficulty;
