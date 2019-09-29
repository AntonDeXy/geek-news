import React, {useState} from 'react'
import axios from 'axios'

const RemoveArticle = () => {
  const [articleId, setArticleId] = useState(null)
  const [articleForRemove, setArticleForRemove] = useState(undefined)

  const getArticle = (id) => {
    (async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${id}`)
      setArticleForRemove(res.data)
    })()
  }
  const remove = async () => {
    const res = await axios.delete(
      `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${articleId}`,
    ).then((response) => {
      console.log(response)
      if (response.status == 200) {
        setarticleId(undefined)
      }
    }).catch(
      function (error) {
        console.log(error)
      }
    )
  }

  return (
    <div className="panel">
      <form className="wrapper addArticlePanel" action="">
        <h3>Remove article</h3>
        <span>Article id</span>
        <input type="text" value={articleId} onChange={(e) => { setArticleId(e.currentTarget.value); getArticle(e.currentTarget.value) }} />
        <button type='button' onClick={remove}>Remove</button>
      </form>
      {articleForRemove &&
        <div>
          <img src={articleForRemove.imgUrl} alt="" />
          <span>{articleForRemove.title}</span>
          <span>{articleForRemove.author}</span>
          <span>{articleForRemove.date}</span>
        </div>
      }

    </div>
  )
}

export default RemoveArticle