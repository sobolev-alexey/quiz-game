import React, { useContext } from 'react';
import { Typography, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { AppContext } from '../context/globalState';
import { AppContextInterface } from '../models/context';

const { Title } = Typography;

const Home = () => {
  const { loading }: AppContextInterface = useContext(AppContext);
  return (
    <Layout>
        <Title level={1} className="heading">Welcome To The Trivia Challenge!</Title>
        <Title level={2}>
          You will be presented with 10 True or False questions.
        </Title>
        <Title level={2}>
          Can you score 10/10?
        </Title>
        <div className="cta-wrapper">
          {
            loading ? <Spin size="large" /> :  <Link to="/quiz">Begin</Link>
          }
        </div>
    </Layout>
  );
};

export default Home;
