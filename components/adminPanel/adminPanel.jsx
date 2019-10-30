import React, { useState, useEffect } from 'react'
import { MainSt, AddArticleSt } from '../elements/Main-styled'
import { AdminPanelSt } from './adminPanel-styled'
import { get, edit, create, removeArt } from '../../static/functions'
import AdmPanelsCard from './admPanelCard'
import EditArticle from './modal/editArticle'

import tempImg from '../../static/code.jpg'

const AdminPanel = () => {
  const [articles, setArticles] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [activeArticleId, setActiveArticleId] = useState('')
  const [activeArticle, setActiveArticle] = useState(undefined)
  const [type, setType] = useState('')

  useEffect(() => {
    get(
      'articles', '', (res) => { setArticles(res) }
    )
    // const tempArt = [
    //   {
    //     id: 1,
    //     title: "title",
    //     author: "admin",
    //     content: 'text',
    //     imgUrl: tempImg
    //   },
    //   {
    //     id: 2,
    //     title: "title",
    //     author: "admin",
    //     content: 'text',
    //     imgUrl: tempImg
    //   }
    // ]
    // setArticles(tempArt)
  }, [])
  
  const createNewArticle = () => {
    setEditMode(true) 
  }

  const activeEditMode = (id) => {
    setActiveArticleId(id)
    setType('Update')
    setEditMode(true) 
    setActiveArticle(articles.filter(e => e._id === id))
  }

  const disableEditMode = () => {
    setActiveArticle(undefined)
    setEditMode(false) 
    setActiveArticleId(undefined)
  }

  const newArticleData = (data) => {
    edit(data, 'articles', activeArticleId,
    () => {
      setActiveArticle(undefined)
      setEditMode(false) 
      setActiveArticleId(undefined)
      get(
        'articles', '', (res) => { setArticles(res) }
      )
    })
  }

  const deleteArticle = (id) => {
    removeArt('articles', id,
    () => {
      get(
        'articles', '', (res) => { setArticles(res) }
      )
    })
  }
  const createArticle = (data) => {
    create(data, 'articles',
    () => {
      setActiveArticle(undefined)
      setEditMode(false) 
      setActiveArticleId(undefined)
      get(
        'articles', '', (res) => { setArticles(res) }
      )
    })
  }

  const setEditedArticleData = (data) => {
    if (type == 'Create') {
      createArticle(data)
    } else {
      newArticleData(data)
    }
  }

  return (
    <MainSt>
      <AddArticle setType={setType} createNewArticle={createNewArticle} />
      {editMode && <EditArticle disableEditMode={disableEditMode} type={type} setEditedArticleData={setEditedArticleData} article={activeArticle && activeArticle[0]} />}
      {articles ?
        <AdminPanelSt>
          {articles.map((e) =>
            <AdmPanelsCard deleteArticle={deleteArticle} activeEditMode={activeEditMode}  {...e} />
          )}
        </AdminPanelSt>
        : 'loading'
      }
    </MainSt>
  )
}

const AddArticle = (props) => {
  return (
    <AddArticleSt>
      <span onClick={ () => {props.createNewArticle(); props.setType('Create')}}>Add article</span>
    </AddArticleSt>
  )
}

export default AdminPanel