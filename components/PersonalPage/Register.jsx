import React, { useRef, useState } from 'react'
import { LoginPageSt } from './LoginStyled'
import Link from 'next/link'
import { auth } from '../../static/functions'

const RegisterPanel = () => {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const [error, setError] = useState(null)

  if (typeof window !== 'undefined') {
    const data = JSON.parse(localStorage.getItem('user'))
    if (data) {
      history.pushState(null, null, '/user')
      window.location.reload()
      return null
    }
  }

  const regReq = () => {
    setError(null)
    auth(
      {
        email: emailInput.current.value,
        password: passwordInput.current.value
      },
      'signup',
      res => {
        console.log(res)
        if (res.user) {
          localStorage.setItem('user', JSON.stringify(res.user))
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
      <div className="wrapper">
        <h1 className='title'>Регистрация</h1>
        <form action="/" id='register'>
          {error && <span className='error'>{error}</span>}
          <div>
            <label htmlFor="email">E-mail</label>
            <input ref={emailInput} type="email" name="email" placeholder='E-mail' required />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input ref={passwordInput} type="password" name="password" placeholder='Пароль' required />
          </div>
        </form>
        <div className="buttons">
          <div className='button_div'>
            <button onClick={regReq} className="button button--itzel button--size-l button--border-thin button--text-thin">
              <i className="button__icon icon icon-envelope"><i className="fas fa-user-alt"></i></i>
              <span>Зарегистрироваться</span>
            </button>
          </div>
          <div className='already'>
            <Link href='/login'>
              <h3>Я уже зарегистрирован</h3>
            </Link>
            <Link href='/'>
              <h3 id='last-child'>На главную</h3>
            </Link>
          </div>
        </div>
      </div>
    </LoginPageSt>

  )
}

export default RegisterPanel
