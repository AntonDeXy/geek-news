import React, { useRef, useState } from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import { LoginPageSt } from './LoginStyled'
import Link from 'next/link'
import { auth } from '../../static/functions'

const LoginPanel = (props) => {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  if (typeof window !== 'undefined') {
    const data = JSON.parse(localStorage.getItem('user'))
    if (data) {
      history.pushState(null, null, '/user')
      window.location.reload()
      return null
    }
  }

  const loginReq = () => {
    setError(null)
    auth(
      {
        email: emailInput.current.value,
        password: passwordInput.current.value
      },
      'login',
      res => {
        console.log(res)
        if (res.token) {
          setToken()
          setUser(res.user)
          localStorage.setItem('user', JSON.stringify(res.user))
          localStorage.setItem('token', res.token)
          history.pushState(null, '/user')
          window.location.reload()
        } else if (res.message) {
          setError(res.response.data.message.message)
        }
      }
    )
  }

  return (
    <LoginPageSt>
      {
        user && <Router>
          <Route>
            <Redirect to='/user' />
          </Route>
        </Router>

      }
      <div className="wrapper" id="panels">
        <h1 className="title">Логин</h1>
        <form action="/" id="register">
          {error &&
            <span className='error'>{error}</span>
          }
          <div>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInput}
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input
              ref={passwordInput}
              type="password"
              name="password"
              placeholder="Пароль"
              required
            />
          </div>
        </form>
        <div className="buttons">
          <div className="button_div">
            <button
              type="button"
              onClick={() => loginReq()}
              className="button button--itzel button--size-l button--border-thin button--text-thin"
            >
              <i className="button__icon icon icon-envelope">
                <i className="fas fa-user-alt"></i>
              </i>
              <span>Войти</span>
            </button>
          </div>
          <div className="already">
            <Link href="/register">
              <h3>Я не зарегестрирован</h3>
            </Link>
            <Link href="/">
              <h3 id="last-child">На главную</h3>
            </Link>
            <Link href="/resetPassword">
              <h3 id="resetPassword">Востановить пароль</h3>
            </Link>
          </div>
        </div>
      </div>
    </LoginPageSt>
  )
}

export default LoginPanel
