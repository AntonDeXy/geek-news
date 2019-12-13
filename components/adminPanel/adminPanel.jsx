import React, { useState, useEffect } from 'react'
import { MainSt, AddArticleSt } from '../elements/Main-styled'
import { AdminPanelSt } from './adminPanel-styled'
import { get, edit, create, removeArt, checkToken } from '../../static/functions'
import AdmPanelsCard from './admPanelCard'
import EditArticle from './modal/editArticle'
import { PropTypes } from 'prop-types'

const AdminPanel = () => {
  const [articles, setArticles] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [activeArticleId, setActiveArticleId] = useState('')
  const [activeArticle, setActiveArticle] = useState(undefined)
  const [type, setType] = useState('')
  const [res, setRes] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      const user = JSON.parse(localStorage.getItem('user'))
      checkToken(token, res => {
        setRes(res)
        if (res.status === 200 && user.isAdmin) {
          get(
            'articles', '', (res) => { setArticles(res) }
          )
        } else {
          history.pushState(null, null, '/')
          window.location.reload()
        }
      })
    }
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
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      checkToken(token, res => setRes(res))
    }
    if (res.status) {
      edit(data, 'articles', activeArticleId,
        () => {
          setActiveArticle(undefined)
          setEditMode(false)
          setActiveArticleId(undefined)
          get(
            'articles', '', (res) => { setArticles(res) }
          )
        })
    } else {
      history.pushState(null, '/')
    }
  }

  const deleteArticle = (id) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      checkToken(token, res => setRes(res))
    }
    if (res.status) {
      removeArt('articles', id,
        () => {
          get(
            'articles', '', (res) => { setArticles(res) }
          )
        })
    } else {
      history.pushState(null, '/')
    }
  }
  const createArticle = (data) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      checkToken(token, res => setRes(res))
    }
    if (res.status) {
      create(data, 'articles',
        () => {
          setActiveArticle(undefined)
          setEditMode(false)
          setActiveArticleId(undefined)
          get(
            'articles', '', (res) => { setArticles(res) }
          )
        })
    } else {
      history.pushState(null, '/')
    }
  }

  const setEditedArticleData = (data) => {
    if (type === 'Create') {
      createArticle(data)
    } else {
      newArticleData(data)
    }
  }

  return (
    <MainSt>
      <AddArticle setType={setType} createNewArticle={createNewArticle} />
      {editMode && <EditArticle disableEditMode={disableEditMode} type={type} setEditedArticleData={setEditedArticleData} article={activeArticle && activeArticle[0]} />}
      {articles
        ? <AdminPanelSt>
          {articles.map((e) =>
            <AdmPanelsCard deleteArticle={deleteArticle} activeEditMode={activeEditMode} key={e._id} {...e} />
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
      <span onClick={ () => { props.createNewArticle(); props.setType('Create') }}>Add article</span>
    </AddArticleSt>
  )
}

AddArticle.propTypes = {
  createNewArticle: PropTypes.func,
  setType: PropTypes.func
}

export default AdminPanel
