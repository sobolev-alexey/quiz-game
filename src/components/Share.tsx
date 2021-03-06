import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Share = ({ score }: { score: string }) => (
    <div className='share-wrapper'>
        <Title level={5}>Share this score with your friends</Title>
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin)}&text=I%20just%20scored%20${score}%20in%20this%20quiz!%0AHow%20would%20you%20score%3F%0A`}
        >
            <button className='share-btn'>Share on Twitter</button>
        </a>
    </div>
);

export default Share;
