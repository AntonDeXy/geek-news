import React, { useState } from "react"
import axios from "axios"
import Moment from 'react-moment'

const RemoveArticle = () => {
  const [articleId, setArticleId] = useState(null)
  const [articleForRemove, setArticleForRemove] = useState(undefined)

  const getArticle = id => {
    (async () => {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${id}`
      )
      setArticleForRemove(res.data)
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
          setarticleId(undefined)
        }
      })
      .catch(function(error) {
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
          <button type="button" onClick={remove}>
            Remove
          </button>
        </form>
        {articleForRemove && (
          <div>
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
      </div>
    </main>
  )
}

export default RemoveArticle
