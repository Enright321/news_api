import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import Showcase from './components/ui/Showcase';
import Pagination from './components/ui/Pagination';
import Articles from './components/articles/Articles';
import React, {useEffect, useState} from 'react';

const App = () => {

  const [headlineItems, setHeadlineItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchItems = async () => {

      const headline = await axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6e2a32fc8c434dd4b72f532757aa2d96`)
      console.log(headline.data.articles);
      setHeadlineItem(headline.data.articles);
      setIsLoading(false);
    }
    fetchItems();

  }, [])

  // Get Current Items
  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = headlineItems.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
      <Showcase isLoading={isLoading} headlineItems={headlineItems} />
      <Articles headlineItems={currentArticles} isLoading={isLoading} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={headlineItems.length} paginate={paginate} />
    </div>
  );
}

export default App;
