import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

import { newsApiKey } from '../api-key/apiKey';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  let catQuery = category === 'all' ? '' : `&category=${category}`;

  const url =
    'https://newsapi.org/v2/top-headlines?country=kr' +
    catQuery +
    '&apiKey=' +
    newsApiKey();

  const [loading, response, error] = usePromise(
    () => axios.get(url),
    [category],
  );

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  if (!articles) {
    return null;
  }

  return (
    <div>
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    </div>
  );
};

export default NewsList;
