import React, { useState, useEffect } from "react"
import axios from "axios"
import Moment from 'react-moment'
import CardOnRemoveArticle from './cardsOnRemoveArticle'
import Loader from './../common/Loader'
import Link from 'next/link'
import { get, removeArt } from '../../static/functions';

const RemoveArticle = (props) => {
  const [articleId, setArticleId] = useState('')
  const [articles, setArticles] = useState(undefined)
  const [articleForRemove, setArticleForRemove] = useState(undefined)
  
  useEffect(() => {
    get(
      'articles', '' , (res) => {setArticles(res)}
    )
  }, [])


  const getArticleById = (articleId) => {
    get(
      'articles', articleId,
      (res) => {
        setArticleForRemove(res)
      }
    )
  }

  const remove = async () => {
    removeArt(
      'articles', articleId, () => {
        setArticleId('')
        get(
          'articles', '' , (res) => {setArticles(res)}
        )
        setArticleForRemove(undefined)
      }
    )
  }

  return (
    <main className="panels">
      <div className="otherPanels">
        <Link href="/panels/add-article">
          <a>
            Add article
          </a>
        </Link>
        <Link href="/panels/update-article">
          <a>
            Update article
          </a>
        </Link>
      </div>
      <div className="panel remove-panel">
        <form className="wrapper removeArticlePanel" action="">
          <h3>Remove article</h3>
          <div>
            <span>Article id</span>
            <input
              type="text"
              value={articleId}
              onChange={e => {
                setArticleId(e.currentTarget.value)
                getArticleById(e.currentTarget.value)
              }}
            />
          </div>
          
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
                <CardOnRemoveArticle key={article._id} articleId={articleId} {...article} getArticle={getArticleById} setArticleId={setArticleId}/>                
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
