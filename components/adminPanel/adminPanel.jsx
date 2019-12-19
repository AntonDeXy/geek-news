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
  const [user, setUser] = useState(null)
  const [dspArticles, setDspArticles] = useState('all')
  const [articlesForDisplay, setArticlesForDisplay] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      const tempUser = JSON.parse(localStorage.getItem('user'))
      setUser(tempUser)
      checkToken(token, res => {
        setRes(res)
        if (res.status === 200 && tempUser.isAdmin) {
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

  useEffect(() => {
    if (articles.length > 0) {
      let temp
      if (dspArticles === 'all') {
        temp = articles
      } else if (dspArticles === 'notModerated') {
        temp = articles.filter(e => e.isChecked === false)
      }
      setArticlesForDisplay(temp)
    }
  }, [articles, dspArticles])

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
      <div className='tools'>
        <div className='displayArticles'>
          <span>
            Display articles:
          </span>
          <select
            onChange={ e => { setDspArticles(e.currentTarget.value) }}
          >
            <option value='all'>
            All
            </option>
            <option value='notModerated'>
            Not moderated
            </option>
          </select>

        </div>
        <AddArticle setType={setType} createNewArticle={createNewArticle} />
      </div>
      {editMode && <EditArticle user={user} disableEditMode={disableEditMode} type={type} setEditedArticleData={setEditedArticleData} article={activeArticle && activeArticle[0]} />}

      {/* all Articles  */}
      {/* Articles not moderated */}
      {articlesForDisplay.length > 0
        ? <AdminPanelSt>
          {articlesForDisplay.map((e) =>
            <AdmPanelsCard deleteArticle={deleteArticle} activeEditMode={activeEditMode} key={e._id} {...e} />
          )}
        </AdminPanelSt>
        : dspArticles === 'notModerated'
          ? <span className='artLoadingStatus'>There are no articles for moderation</span>
          : <span className='artLoadingStatus'>loading</span>
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
