import React, { useState, useEffect } from "react"
import axios from "axios"
import { Editor } from "@tinymce/tinymce-react"
import Link from "next/link"
import Moment from 'react-moment'
import Loader from './../common/Loader'
import CardOnRemoveArticle from './cardsOnRemoveArticle'
import { get } from '../../static/functions'

const UpdateArticlePanel = () => {
  const [article, setArticle] = useState(null)
  const [articleId, setArticleId] = useState(undefined)
  const [articleForUpdate, setArticleForUpdate] = useState(undefined)
  const [articles, setArticles] = useState(undefined)

  // useEffect(() => {
  //   getArticles()
  // }, [])

  const editArticle = async () => {
    const res = await axios
      .put(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${articleId}`,
        { article }
      )
      .then(response => {
        if (response.status == 200) {
          setArticleId('')
          setArticle(null)
          setArticleForUpdate(null)
        }
      })
      .catch(function (error) {
        console.log(error)
      });
  };

  const getArticleById = (articleId) => {
    get(
      'articles', articleId,
      (res) => {
        setArticle({
          title: res.title,
          imgUrl: res.imgUrl,
          category: res.category,
          content: res.content
        }
        )
      },
      (res) => {
        setArticleForUpdate(res)
      }
    )
  }

  // const getArticles = () => {
  //   (async () => {
  //     const res = await axios.get(
  //       `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles`
  //     )
  //     setArticles(res.data)
  //   })()
  // }
  return (
    <main className="panels">
      <div className="otherPanels">
        <Link href="/panels/add-article">
          <a>Add article</a>
        </Link>
        <Link href="/panels/remove-article">
          <a>Remove article</a>
        </Link>
      </div>
      <div className="panel update-panel">

        {/* in future add panel with articles like as in remove article page, but on row */}

        <form className="wrapper addArticlePanel" action="">
          <h3>Update article</h3>
          <span>Article id</span>
          <input
            type="text"
            value={articleId}
            onChange={e => {
              setArticleId(e.currentTarget.value)
              getArticleById(e.currentTarget.value)
            }}
          />
          <span>Title</span>
          <input
            type="text"
            onChange={e => {
              setArticle({ ...article, title: e.target.value });
            }}
            id="name"
            value={article ? article.title : ''}
            name="title"
          />

          <span>Img</span>
          <input
            type="text"
            onChange={e => {
              setArticle({ ...article, imgUrl: e.currentTarget.value });
            }}
            id="img"
            value={article ? article.imgUrl : ''}
            name="img"
          />

          <span>Category</span>
          <select
            name=""
            onChange={e => {
              setArticle({ ...article, category: e.currentTarget.value })
            }}
            value={articleForUpdate && article && article.category}
            id="category"
          >
            <option value="it">It</option>
            <option value="game">Games</option>
          </select>

          <span>Description</span>
          <Editor
            initialValue={articleForUpdate ? articleForUpdate.content : ''}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help"
            }}
            onChange={e => {
              setArticle({ ...article, content: e.target.getContent() });
            }}
            value={articleForUpdate ? articleForUpdate.content : ''}
          />
          <button onClick={editArticle} type="button">
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

export default UpdateArticlePanel