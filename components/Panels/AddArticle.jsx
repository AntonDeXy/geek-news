import React, { useState } from "react"
import axios from "axios"
import { Editor } from "@tinymce/tinymce-react"
import Link from 'next/link';

const AddArticlePanel = () => {
  const [article, setArticle] = useState({})

  const addArticle = async () => {
    setArticle( {author: 'admin'})

    const res = await axios
      .post(
        "https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles",
        {article}
      )
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          setArticle(null)
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <main className="panels">
      <div className="otherPanels">
        <Link href="/panels/update-article">
          <a>
            Update article
          </a>
        </Link>
        <Link href="/panels/remove-article">
          <a>
            Remove article
          </a>
        </Link>
      </div>
      <div className="panel">
        <form className="wrapper addArticlePanel" action="">
          <h3>Add article</h3>
          <span>Title</span>
          <input
            type="text"
            onChange={e => {
              setArticle( { ...article, title: e.target.value} )
            }}
            id="name"
            value={article ? article.title : ''}
            name="title"
          />

          <span>Img</span>
          <input
            type="text"
            onChange={e => {
              setArticle( {...article, imgUrl: e.currentTarget.value} )
            }}
            id="img"
            value={ article ? article.imgUrl : '' }
            name="img"
          />

          <span>Category</span>
          <select
            name=""
            onChange={e => {
              setArticle( {...article, category: e.currentTarget.value} )
            }}
            id="category"
          >
            <option value="it">It</option>
            <option value="game">Games</option>
          </select>

          <span>Description</span>
          <Editor
            initialValue={''}
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
              setArticle( {...article, content: e.target.getContent()} )
            }}
          />
          <button onClick={addArticle} type="button">
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

export default AddArticlePanel
