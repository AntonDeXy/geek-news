import React, { useState, useEffect } from "react"
import axios from "axios"
import Moment from 'react-moment'
import CardOnRemoveArticle from './cardsOnRemoveArticle';
import Loader from './../common/Loader';

const RemoveArticle = (props) => {
  const [articleId, setArticleId] = useState(undefined)
  const [articles, setArticles] = useState(undefined)
  const [articleForRemove, setArticleForRemove] = useState(undefined)
  
  useEffect(() => {
    // (async () => {
    //   const res = await axios.get(
    //     `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles`
    //   )
    //   setArticles(res.data)
    // })()
    getArticles()
  }, [])
  
  const getArticle = id => {
    (async () => {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${id}`
      )
      setArticleForRemove(res.data)
    })()
  }

  const getArticles = () => {
    (async () => {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles`
      )
      setArticles(res.data)
    })()
  }

  const remove = async () => {
    const res = await axios
      .delete(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${articleId}`
      )
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          debugger
          setArticleId(undefined)
          getArticles()
          setArticleForRemove(undefined)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <main className="panels">
      <div className="panel">
        <form className="wrapper removeArticlePanel" action="">
          <h3>Remove article</h3>
          <span>Article id</span>
          <input
            type="text"
            value={articleId}
            onChange={e => {
              setArticleId(e.currentTarget.value)
              getArticle(e.currentTarget.value)
            }}
          />
          {articleForRemove && (
          <div className='articleForRemove'>
            <div>
              <span>ID: </span>
              <span>{articleForRemove._id}</span>
            </div>
            <div>
              <span>Title: </span>
              <span>{articleForRemove.title}</span>
            </div>
            <div>
              <span>Author: </span>
              <span>{articleForRemove.author}</span>
            </div>
            <div>
              <span>Date: </span>
              <span><Moment format="dddd HH:mm DD-MM-YYYY">{articleForRemove.date}</Moment></span>
            </div>
          </div>
        )}
        </form>
        <div className='allArticles'>
          <h2>Articles</h2>
          {articles 
          ? <div className="articles">
              {articles.map(article => 
                <CardOnRemoveArticle key={article._id} articleId={articleId} {...article} getArticle={getArticle} setArticleId={setArticleId}/>                
              )}
            </div>
            : <Loader />
          }
        </div>
        <button type="button" onClick={remove}>
          Remove
        </button>
      </div>
    </main>
  )
}

export default RemoveArticle
