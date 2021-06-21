import React from 'react';
import ArticleItem from './ArticleItem';
import Spinner from '../ui/Spinner';


const Articles = ({ headlineItems, isLoading }) => isLoading ? <Spinner /> : 
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Top Stories</h2>
        <div className="articles-container">
          {headlineItems.map((item) => (
            <ArticleItem key={item.title} item={item}></ArticleItem>
          ))}
        </div>
      </div>
    </section>

export default Articles
