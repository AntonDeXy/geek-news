import React, { useState } from "react";
import Link from "next/link";

const Header = props => {
  return (
    <>
        <header>
          <div className="wrapper">
            <Link href="/">
              <a className="logo">
                <h1 className="logo">Geek News</h1>
              </a>
            </Link>
            <button
              onClick={() => {
                changeTheme();
              }}
            >
              Change theme
            </button>
            <div className="links">
              <Link href="#">
                <a>Новости</a>
              </Link>
              <Link href="#">
                <a>Личный кабинет</a>
              </Link>
              <Link href="#">
                <a>Вход</a>
              </Link>
            </div>
          </div>
        </header>
    </>
  );
};

export default Header;
