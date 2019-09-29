import React, {useState} from 'react'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'

const AddArticlePanel = () => {
  const [articleTitle, setArticleTitle] = useState(undefined);
  const [img, setImg] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [content, setContent] = useState(undefined);

  const addArticle = async () => {
    let article = {
      articleTitle: articleTitle,
      author: 'admin',
      category: category,
      content: content,
      imgUrl: img
    }

    const res = await axios.post(
      'https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles',
      { title: articleTitle, imgUrl: img, category: category, content: content }
    ).then((response) => {
      console.log(response)
      if (response.status == 200) {
        setArticleTitle(undefined)
        setImg(undefined)
        setCategory(undefined)
        setContent(undefined)
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
        <h3>Add article</h3>
        <span>Title</span>
        <input
          type="text"
          onChange={e => {
            setArticleTitle(e.target.value);
            console.log("changed");
          }}
          id="name"
          value={articleTitle ? articleTitle : ''}
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
        <button onClick={addArticle} type="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddArticlePanel