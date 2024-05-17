import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import newsData from '../newsData.json';

const { Meta } = Card;

interface NewsItem {
  title: string;
  description: string;
  imageUrl: string;
  source: string;
}

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      {news.map((item, index) => (
        <Card key={index} style={{ width: 300, marginBottom: '20px' }}>
          <img alt="news" src={item.imageUrl} />
          <Meta title={item.title} description={item.description} />
          <p>Source: {item.source}</p>
        </Card>
      ))}
    </div>
  );
}

export default NewsFeed;
