import React from 'react'

const Showcase = ({ headlineItems, isLoading }) => isLoading ? <h1>Is Loading...</h1> :
    
    <header id="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-card flex">
            <div className="showcase-content">
              <div className="category category-sports">News</div>
              <h1>{headlineItems[0].title}</h1>
              <p className="lead">{headlineItems[0].description}</p>
              <p>Author: {headlineItems[0].author} </p>
              <a href="#/" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  

export default Showcase
