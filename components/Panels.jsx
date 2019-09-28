import React, { useState } from "react"
import { Route } from "react-router-dom"
import axios from "axios"
import { useRouter } from "next/router"
import { Editor } from '@tinymce/tinymce-react'

export const Panels = () => {
  const router = useRouter()

  return (
    <main className="panels">
      {/* <Route path='/panels/addArticle' /> */}
      <AddArticlePanel />
    </main>
  );
};

const AddArticlePanel = () => {
  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState(null);

  const addArticle = async (title, img, category, content) => {
    // let article = {
    //   title: title,
    //   author: 'admin',
    //   category: category,
    //   content: content,
    //   imgUrl: img
    // }
  
    const res = await axios.post(
      'https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles',
      { title: "123" }
    ).then((response) => {
      console.log(response)
    }).catch(
      function (error) {
        console.log(error)
      }
    )

    console.log(res)
  }

  return (
    <div className="panel">
      <form className="wrapper addArticlePanel" action="">
        <h3>Add article</h3>
        <span>Title</span>
        <input
          type="text"
          onChange={e => {
            setTitle(e.target.value);
            console.log("changed");
          }}
          id="name"
          value={title ? title : ''}
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
          value={img}
          name="img"
        />

        <span>Category</span>
        <select
          name=""
          onChange={e => {
            setCategory(e.currentTarget.value);
            console.log("changed");
          }}
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
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onChange={e => {
            setContent(e.target.getContent());
            console.log(e.target.getContent());
          }}
        />

        {/* <textarea
          onChange={e => {
            setContent(e.currentTarget.value);
            console.log("changed");
          }}
          name=""
          value={content}
          id="content"
          cols="30"
          rows="10"
        /> */}

        <button onClick={addArticle} type="button">
          Submit
        </button>
      </form>
    </div>
  );
};
