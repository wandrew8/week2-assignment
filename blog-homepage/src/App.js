import React from 'react';
import MissedArticle from './components/MissedArticle';
import YourArticle from './components/YourArticle';
import missedArticles from './_data/missed-articles.json'
import yourArticles from './_data/your-articles.json';
import './App.scss';


function App() {
  return (
    <div className="app">
      <section>
        <h1>For You</h1>
        <hr />
        <div className="forYou">
          {yourArticles.map((article, i) => <YourArticle key={i} data={article} />)}
        </div>
      </section>

      <section>
        <h1>In case you missed it</h1>
        <hr />
        <div className="missed">
          {missedArticles.map((article, i) => <MissedArticle key={i} data={article} />)}
        </div>
      </section>
    </div>
  );
}

export default App;
