import React, { useState, useEffect } from "react"
import { Editor } from "@tinymce/tinymce-react"
import Moment from 'react-moment'
import { EditPanel } from '../adminPanel-styled';
import cross from '../../../static/icons/times-solid.svg'

const EditArticle = (props) => {
  const [article, setArticle] = useState(props.article)
  const [articleId, setArticleId] = useState(undefined)
  const [articleForUpdate, setArticleForUpdate] = useState(undefined)
  const [articles, setArticles] = useState(undefined)
  
  return (
    <EditPanel
    // onBlur={() => {props.disableEditMode()}}
    >
        <h3> {props.type} article</h3>
        <img onClick={() => {props.disableEditMode()}} src={cross} alt=""/>
        <div>

        {article &&
          <>
          <span>Article id</span>
          <input
            type="text"
            value={article._id}
          />
          </>
        }
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
          value={article && article.category}
          id="category"
        >
          <option value="it">It</option>
          <option value="game">Games</option>
        </select>

        <span>Description</span>
        <Editor
          initialValue={article ? article.content : ''}
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
        />
        <button onClick={() => {setArticle(delete article._id);props.setEditedArticleData(article)}} type="button">
          Submit
        </button>
        </div>

    </EditPanel>
  )
}

export default EditArticle