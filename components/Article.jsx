import React, { useState, useEffect, useRef } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import Loader from './common/Loader'
import { ArticleSt, Img, ArticleInfo, OtherInf, MainSt } from './elements/Main-styled'
import { PropTypes } from 'prop-types'
import { get, create, removeArt } from '../static/functions'
import userImg from '../static/defaultAva.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Article = (props) => {
  const [comments, setComments] = useState(undefined)
  const [user, setUser] = useState(undefined)
  const [articleId, setArticleId] = useState(undefined)
  const inputRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('user'))
      if (data) {
        setUser(data)
      } else {
        history.pushState(null, '/login')
        window.location.reload()
      }
    }
    if (props.id) {
      success(props.id)
      setArticleId(props.id)
    }
  }, [props])

  const success = (articleId) => {
    debugger
    if (articleId) {
      get(
        'comments',
        articleId,
        (res) => {
          debugger
          setComments(res)
        }
      )
    }
  }

  const sendArticle = () => {
    if (inputRef.current.value.length <= 150) {
      debugger
      create(
        {
          articleId: articleId,
          content: inputRef.current.value,
          author: user._id
        },
        'comments',
        (res) => {
          if (res.status === 200) {
            success(articleId)
            inputRef.current.value = ''
          }
        }
      )
    }
  }

  if (props.article) {
    return (
      <MainSt>
        <ArticleSt>
          <div className="inf">
            <Img src={props.article.imgUrl} alt="" />
            <div className="comments">
              <div className="wrapper">
                {comments && comments.length > 0
                  ? comments.map(e =>
                    <Comment key={e._id} success={(id) => { success(id) }} user={user} {...e}/>)
                  : 'There are no comments, u can be first'
                }
              </div>
              <div className='enterComment'>
                <textarea maxLength='150' ref={inputRef} rows='2' placeholder='Enter ur comment'></textarea>
                <button onClick={sendArticle} type='button'>Send</button>
              </div>
            </div>
          </div>
          <ArticleInfo>
            <h1>{props.article.title}</h1>
            <OtherInf>
              <span>
                author: {props.article.author}
              </span>
              <span>
                date: <Moment format="dddd HH:mm DD-MM-YYYY">{props.article.date}</Moment>
              </span>
              <span>
                category: {props.article.category}
              </span>
            </OtherInf>
            <div>{ReactHtmlParser(props.article.content)}</div>
          </ArticleInfo>
        </ArticleSt>
      </MainSt>
    )
  }
  return (
    <MainSt>
      <Loader />
    </MainSt>
  )
}

const Comment = (props) => {
  const removeComment = (id) => {
    debugger
    removeArt(
      'comment',
      id,
      (res) => {
        props.success(props.articleId)
      }
    )
  }
  return (
    <div className="comment">
      <img src={props.author[0].imgUrl !== '' ? props.author[0].imgUrl : userImg} alt=""/>
      <div className='inf'>
        <h3>{props.author[0].nickname}</h3>
        <div>{props.content}</div>
      </div>
      {
        props.author[0]._id === props.user._id || props.user.isAdmin
          ? <FontAwesomeIcon onClick={(id) => { removeComment(props._id) }} icon={faTrash} />
          : ''
      }

    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object
}

export default Article
