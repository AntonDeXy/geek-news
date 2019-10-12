import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";
import Moment from 'react-moment'
import Loader from './../common/Loader';
import CardOnRemoveArticle from './cardsOnRemoveArticle';

const UpdateArticlePanel = () => {
  const [articleTitle, setArticleTitle] = useState('');
  const [img, setImg] = useState('');
  const [category, setCategory] = useState(undefined);
  const [content, setContent] = useState('');

  const [articleId, setArticleId] = useState(undefined)
  const [articleForUpdate, setArticleForUpdate] = useState(undefined)
  const [articles, setArticles] = useState(undefined)

  useEffect(() => {
    getArticles()
  }, [])

  const editArticle = async () => {
    let article = {
      title: articleTitle,
      author: "admin",
      category: category,
      content: content,
      imgUrl: img
    }

    const res = await axios
      .put(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${articleId}`,
        { article }
      )
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          setArticleTitle("")
          setImg("")
          setContent("")
          setArticleForUpdate({content: ''})
        }
      })
      .catch(function(error) {
        console.log(error)
      });
  };

  const getArticle = articleId => {
    (async () => {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${articleId}`
      )

      setArticleTitle(res.data.title)
      setImg(res.data.imgUrl)
      setCategory(res.data.category)
      setContent(res.data.content)

      setArticleForUpdate(res.data)
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
              setArticleId(e.currentTarget.value);
              getArticle(e.currentTarget.value);
            }}
          />
          <span>Title</span>
          <input
            type="text"
            onChange={e => {
              setArticleTitle(e.target.value);
              console.log("changed");
            }}
            id="name"
            value={articleForUpdate ? articleTitle : ''}
            name="title"
          />

          <span>Img</span>
          <input
            type="text"
            onChange={e => {
              setImg(e.currentTarget.value);
              console.log("changed");
            }}
            id="img"
            value={articleForUpdate ? img : ''}
            name="img"
          />

          <span>Category</span>
          <select
            name=""
            onChange={e => {
              setCategory(e.currentTarget.value);
              console.log("changed");
            }}
            value={articleForUpdate && category }
            id="category"
          >
            <option value="it">It</option>
            <option value="game">Games</option>
          </select>

          <span>Description</span>
          <Editor
            initialValue={content}
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
              setContent(e.target.getContent());
            }}
            value={articleForUpdate ? articleForUpdate.content : ''}
          />
          <button onClick={editArticle} type="button">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default UpdateArticlePanel;
