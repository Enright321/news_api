import React from 'react'

const ArticleItem = ({ item }) => {
  return (
    <article className="card">
      <img style={styleArticles} src={item.urlToImage} alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      
      <strong><a href={item.url}>Full Story</a></strong>
      
    </article>
  )
}

const styleArticles = {
  width: '475px',
  height: '300px'
}


export default ArticleItem

