import React from 'react'
import { LoginPageSt } from './LoginStyled'
import Link from 'next/link'
import '../../static/style/bluePrints.scss'

const LoginPanel = () => {
  return (
    <LoginPageSt>
      <div className="wrapper" id='panels'>
        <h1 className='title'>Логин</h1>
        <form action="/" id='register'>
          <div>
            <label htmlFor="nickname">Ник или Email</label>
            <input type="text" name="nickname" placeholder='Ник или Email' required />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" placeholder='Пароль' required />
          </div>
        </form>
        <div className="buttons">
          <div className='button_div'>
            <button className="button button--itzel button--size-l button--border-thin button--text-thin">
              <i class="button__icon icon icon-envelope"><i class="fas fa-user-alt"></i></i>
              <span>Войти</span>
            </button>
          </div>
          <div className='already'>
            <Link href='/register'>
              <h3>Я не зарегестрирован</h3>
            </Link>
            <Link href='/'>
              <h3 id='last-child'>На главную</h3>
            </Link>
            <Link href='/resetPassword'>
              <h3 id='resetPassword'>Востановить пароль</h3>
            </Link>
          </div>
        </div>
      </div>
    </LoginPageSt>

  )
}

export default LoginPanel