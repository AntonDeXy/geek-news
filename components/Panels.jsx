import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useRouter } from "next/router";

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
  const [title, setTitle] = useState(undefined);
  const [img, setImg] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [content, setContent] = useState(undefined);

  const addArticle = async (title, img, category, content) => {
    // let article = {
    //   title: title,
    //   author: 'admin',
    //   category: category,
    //   content: content,
    //   imgUrl: img
    // }
   
    const res = await axios.post(
      "https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles",
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
            setTitle(e.currentTarget.value);
            console.log("changed");
          }}
          id="name"
          value={title}
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
        <textarea
          onChange={e => {
            setContent(e.currentTarget.value);
            console.log("changed");
          }}
          name=""
          value={content}
          id="content"
          cols="30"
          rows="10"
        ></textarea>

        <button onClick={addArticle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};