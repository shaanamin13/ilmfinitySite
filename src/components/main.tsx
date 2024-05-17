import { Carousel } from 'antd';
import React from 'react';
import NewsFeed from './newsFeed';

const Main: React.FC = () => {
  return (
    <main>
      <section id="games-carousel">
        <Carousel autoplay>
          {/* Add your carousel items here */}
          <div>
            <h3>Game 1</h3>
          </div>
          <div>
            <h3>Game 2</h3>
          </div>
        </Carousel>
      </section>

      <section id="instagram-feed">
        {/* Add your Instagram news feed component here */}
      </section>

      <section id="news-feed">
        <NewsFeed />
      </section>

    </main>
  );
}

export default Main;
