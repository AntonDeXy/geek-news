import React from 'react'
import { LoginPageSt } from './LoginStyled'
import Link from 'next/link'
import '../../static/style/bluePrints.scss'

const RegisterPanel = () => {
  return (
    <LoginPageSt>
      <div className="wrapper">
        <h1 className='title'>Регистрация</h1>
        <form action="/" id='register'>
          <div>
            <label htmlFor="nickname">Ник</label>
            <input type="text" name="nickname" placeholder='Ник' required />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder='E-mail' required />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" placeholder='Пароль' required />
          </div>
          <div>
            <label htmlFor="repeatPassword">Повтор пароля</label>
            <input type="password" name="repeatPassword" placeholder='Повтор пароля' required />
          </div>
        </form>
        <div className="buttons">
          <div className='button_div'>
            <button className="button button--itzel button--size-l button--border-thin button--text-thin">
              <i class="button__icon icon icon-envelope"><i class="fas fa-user-alt"></i></i>
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