import React from 'react'
import { LoginPageSt } from './LoginStyled'
import Link from 'next/link'

const LoginPanel = () => {
  return (
    <LoginPageSt>
         <div className="wrapper">
      <h1 className='title'>Востановить пароль</h1>
      <form action="/" id='register'>
        <div>
          <label htmlFor="nickname">Email</label>
          <input type="text" name="nickname" placeholder='Email' required/>
        </div>
      </form>
      <div className="buttons">
        <div className='button_div'>
          <button className="button button--itzel button--size-l button--border-thin button--text-thin">
            <i class="button__icon icon icon-envelope"><i class="fas fa-user-alt"></i></i>
            <span>Востановить</span>
          </button>
        </div>
        <div className='already'>
          <Link href='/register'>
            <h3>Я не зарегестрирован</h3>          
          </Link>
          <Link href='/'>
            <h3 id='last-child'>На главную</h3>          
          </Link>
          <Link href='/login'>
            <h3 id='resetPassword'>Уже есть аккаунт</h3>          
          </Link> 
        </div>
      </div>
    </div>
    </LoginPageSt>

  )
}

export default LoginPanel