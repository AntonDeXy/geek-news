import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div class="wrapper">
        <Link class="logo" target="_blank" href="/">
          <h1 class="logo">Geek News</h1>
        </Link>
        <div className="links">
          <Link href="#" target="_blank">
            Новости
          </Link>
          <Link href="#" target="_blank">
            Личный кабинет
          </Link>
          <Link href="#" target="_blank">
            Вход
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
