import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { Typography } from 'antd';
import { Difficulty } from '.';

const { Title } = Typography;

const Question = (
    { category, question, difficulty }: { 
        category: string, question: string, difficulty: string
    }) => {
    const [mainCategory, subCategory] = category.split(': ');
    const categoryTitle = `${mainCategory}${subCategory ? `: ${subCategory}` : ''}`;
    return (
        <div className="question-wrapper">
            <div className="question-category">
                <Title level={3} className="heading">
                    {decodeURI(categoryTitle)}
                </Title>
            </div>
            <Difficulty difficulty={difficulty} />
            <div className="question-body">
                <Title level={1} className="question">
                    {sanitizeHtml(question)}
                </Title>
            </div>
        </div>
    );
};

export default Question;
