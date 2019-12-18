import React, { useState } from 'react'
import { UserPageSt } from './userPageStyled'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import UserCard from './userCard'
import { get, checkToken, edit, getUserData } from '../../static/functions'

const UserPage = (props) => {
  const [user, setUser] = useState(undefined)
  const [userId, setUserId] = useState(undefined)
  const [editMode, setEditMode] = useState(false)
  const [email, setEmail] = useState(null)
  const [nickname, setNickname] = useState(null)
  const [isSave, setIsSave] = useState(false)
  const [articles, setArticles] = useState(null)

  if (typeof window !== 'undefined' && user === undefined) {
    setUser(null)
    const tempData = JSON.parse(localStorage.getItem('user'))
    setUser(tempData)
    setUserId(tempData._id)
    if (!tempData) {
      history.pushState(null, null, '/')
      window.location.reload()
    }
    get('articlesByAuthor', tempData.nickname, (res) => { setArticles(res) })
  }

  if (user && !email) {
    setEmail(user.email)
    setNickname(user.nickname)
  }

  const saveChanges = () => {
    const token = localStorage.getItem('token')
    checkToken(token, res => {
      if (res.status === 200) {
        edit(
          {
            nickname: nickname
            // email: user.email,
            // password: user.password
          },
          'changeUserInfo',
          userId,
          (res) => {
            setEditMode(false)
            getUserData(token, (res) => {
              setUser(res.data)
              localStorage.setItem('user', JSON.stringify(res.data))
            })
          })
      } else {
        // alert something went wrong
        // history.pushState(null, null, '/')
        // window.location.reload()
      }
    })

    // }

    // if token is avalible or password is correct do this

    // send new pass to db

    // .then (res => {
    //   if (res.status === 200) {
    //     setIsSave(false)
    //     // send new query for new profile info
    //   }
    // })
  }

  return (
    <UserPageSt>
      {user && (
        <>
          <div className="userInfo">
            {/* {isSave && (email !== user.email || nickname !== user.nickname) &&
              <div className='saveChanges'>
                <h3>Do you want save changes?</h3>
                <label>Enter password <input type="password"/></label>
                <button onClick={saveChanges}>Save</button>
              </div>
            } */}
            <div className="wrapper">
              {!editMode ? (
                <div>
                  <h4>NickName: </h4>
                  <span>
                    {user.nickname ? (
                      user.nickname
                    ) : (
                      <i>you can set it in edit mode</i>
                    )}
                  </span>
                </div>
              ) : (
                <div>
                  <h4>NickName: </h4>
                  <input value={nickname} onChange={e => setNickname(e.target.value)} type="text" />
                </div>
              )}
              {/* {!editMode ? (
                <div>
                  <h4>Email:</h4>
                  <span>
                    {user.email ? (
                      user.email
                    ) : (
                      <i>you can change it in edit mode</i>
                    )}
                  </span>
                </div>
              ) : (
                <div>
                  <h4>Email:</h4>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                </div>
              )} */}
              <div>
                <h4>Email:</h4>
                <span>
                  {user.email && user.email}
                </span>
              </div>
              <div>
                <h4>Account created in:</h4>
                {user.dateOfRegitration && (
                  <Moment format="HH:mm DD-MM-YYYY">
                    {user.dateOfRegitration}
                  </Moment>
                )}
              </div>
              <div>
                <h4>Role:</h4>
                <span className={user.isAdmin && 'admRole'}>
                  {user.isAdmin ? 'Admin' : 'User'}
                </span>
              </div>
              <div>
                <h4>ID:</h4>
                <span>{user.userId}</span>
              </div>
              {editMode &&
              <div className='saveChanges'>
                <button onClick={saveChanges}>Save</button>
              </div>
              }
            </div>

            <div className="editMode">
              <FontAwesomeIcon
                onClick={() => { setEditMode(!editMode); setIsSave(true) }}
                icon={faEdit}
              />
            </div>
          </div>
          <div className="stat">
            <h3>Stat</h3>
            <div>
              Articles count: <span>12</span>
            </div>
            <div>
              Total viewers: <span>12</span>
            </div>
          </div>
          <div className="articles">
            {articles && articles.map(el => <UserCard key={el._id} article={el} />)}
          </div>
        </>
      )
      }
    </UserPageSt>
  )
}

export default UserPage
