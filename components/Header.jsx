import React, {useState} from "react";
import Link from "next/link";
import styled from 'styled-components'

const Header = (props) => {
  const [color, setColor] = useState('#383838')

  const HeaderSt = styled.header`
    background-color: ${color || '#383838'};
  `
  const changeTheme = () => {
    debugger
    
    if (props.theme == 'dark') {
      props.setTheme('light')
      setColor('red')
      console.log('light')
    } else {
      props.setTheme('dark')
      setColor('#383838')
      console.log('dark')
    }
  }



  return (
    <>
      <HeaderSt>
        <div className="wrapper">
          <Link href="/">
            <a className="logo">
              <h1 className="logo">Geek News</h1>
            </a>
          </Link>
          <button onClick={() => { changeTheme() }}>Change theme</button>
          <div className="links">
            <Link href="#">
              <a>
                Новости
            </a>
            </Link>
            <Link href="#">
              <a>
                Личный кабинет
            </a>
            </Link>
            <Link href="#">
              <a>
                Вход
            </a>
            </Link>
          </div>
        </div>
      </HeaderSt>
      <style jsx>{`
        header {
          backgroundColor: #383838;
        }
      `}</style>
    </>
  );
};

export default Header;
