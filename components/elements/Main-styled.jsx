import styled from '@emotion/styled'

export const MainSt = styled.main`
  display: grid;
  padding: 15px 0;
  width: 100%;
  background-color: #1E1E1E;
  min-height: 80vh;
  gap: 10px;
  .tools {
    display: grid;
    width: 90%;
    grid-template-columns: auto auto;
    justify-self: center;
    .displayArticles {
      color: white;
      span {
        margin-right: 10px;
      }
      label {
        margin-right: 10px;
      }
    }
  }
  .artLoadingStatus {
    text-align: center;
    color: white;
  }
`

export const MainGeneralPageSt = styled.main`
  display: grid;
  padding: 15px 0;
  grid-template-rows: auto auto;
  width: 100%;
  background-color: #1E1E1E;
  min-height: 80vh;
  ul {
    /* max-width: 100%; */
    /* overflow-y: hidden; */
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    justify-content: center;
    padding: 0;
    margin: 0;
    padding: 25px 0 25px 0;
    .selected a{
      background-color: green;
    }
    li {
      a {
        color: white;
        padding: .5rem .75rem;
        border: 1px solid #dee2e6;
        line-height: 1.25;
        margin-left: -1;
      }
      a:hover {
        text-decoration: none;
        cursor: pointer;
      }
    }
    li:first-child a{
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
    }
    li:last-child a {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;  
    }
    .previous, .next {
    }
  }
  .page-link {
    background-color: #131415;
    color: white;
  }
  nav {
    margin-top: 10px;
    display: grid;
    color: white;
    justify-content: center;
  }
`

export const TopArticlesBlockSt = styled.div`
  @media(max-width: 1200px) {
    grid-template-columns: repeat(3, auto) !important;
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, auto) !important;
  }
  @media(max-width: 540px) {
    grid-template-columns: auto !important;
  }
  display: grid;
  justify-self: center;
  width: 95%;
  height: auto;
  grid-template-columns: repeat(6, auto);
  gap: 10px;
`
export const Img = styled.img`
  /* max-width: 100%; */
  height: 100%;
  color: white;
  display: grid;
  align-content: center;
  justify-content: center;
`
export const ArticleLink = styled.a`
  color: white;
  text-decoration: none;
`

export const MoreNewsSt = styled.div`
  justify-self: center;
  display: inline-block;
  width: auto;
  text-align: center;
  color: white;
  font-family: 'Squada One', cursive;
  h3 {
    margin: 0;
  }
`
export const GeneralNews = styled.div`
  justify-self: center;
  width: 85%;
  display: grid;
  gap: 10px;
  grid-template-rows: 1fr;
  .readMore {
    display: inline-block;
    color: white;
    background-color: red;
    position: relative;
    bottom: 30px;
    left: 89%;
    width: 100px;
    text-align: center;
  }
  .readMore:hover {
    cursor: pointer;
  }
  .viqeo-embed {
    max-width: 100%
  }
`

export const GeneralNewSt = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  overflow: hidden;
  max-height: 350px;
  .thumbnail {
    grid-column: 1;
    grid-row: 1;
    display: grid;
    height: 350px;
    width: auto;
    background-color: #312f2f;
  }
  .ArticleDesc {
    display: grid;
    background-color: #393939;
    padding: 10px;
    gap: 10px;
    grid-row: 1;
    img {
      max-width: 100%;
      display: block;
    }
    button {
      height: 40px;
    }
  }
  :nth-child(even) {
    grid-template-columns: auto auto;
    .ArticleDesc {
      grid-column: 1 !important;
    }
    .thumbnail {
      grid-column: 2 !important;
    }
  }
  
  @media (max-width: 768px) {
    :nth-child(even) {
      grid-template-columns: 100% !important;
      .thumbnail {
        grid-row: 1;
        grid-column: 1;
      }
    }
    .ArticleDesc {
        grid-column: 1 !important;
        grid-row: 2 !important;
      }
  }
  @media (max-width: 992px) {
    grid-template-columns: 100% !important;
    max-height: unset !important;
    grid-template-rows: auto auto;
    :nth-child(even) {
      .thumbnail {
        grid-column: 1 !important;
      }
    }
    .thumbnail {
      width: 100%;
      height: auto !important;
      max-height: unset !important;
      grid-column: 1 !important;
    }
    .ArticleDesc {
      grid-row: 2;
      span {
        max-height: 250px !important;
      }
    }
    button {
      width: 100%;
      justify-self: center;
    }
  }
  @media (max-width: 1200px) {
    max-height: 240px;
    .thumbnail {
      height: 240px;
    }
    .ArticleDesc {
      span {
        max-height: 90px;
      }
    }
  }
  
`
export const ArticleDesc = styled.div`
  display: grid;
  background-color: #393939;
  padding: 10px;
  gap: 10px;
  grid-row: 1;
`

export const H2 = styled.h2`
  margin: 0;
  font-family: 'Bree Serif', serif;
  color: white;
  margin-left: 10px;
  max-height: 40px;
  overflow: hidden;
  @media (max-width: 992px) {
    max-height: unset;
  }
`

export const HR = styled.hr`
  height: 2px;
  background-color: white;
  width: 100%;
  @media (max-width: 1200px) {
    margin: 0;
  }
`
export const Span = styled.span`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-left: 10px; 
  display: block;
  overflow-y: auto;
  height: 190px;
  img {
    margin-top: 10px;
  }
`

export const ArticleSt = styled.div`
  @media(max-width: 540px) {
    grid-template-columns: 100% !important;
    .inf {
      .commentButton {
        display: grid !important;
      }
      .comments {
        .wrapper {
          display: none !important;
        } 
        .wrapperForMobile {
          display: grid !important;
        }
      }
      .mobile {
        display: grid !important;
      }
      .desktop {
        display: none !important;
      }
    }
  }
  width: 90%;
  justify-self: center;
  display: grid;
  gap: 20px;
  grid-template-columns: 25% auto;
  .inf {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 15px;
    img{
      max-width: 100%;
      height: auto;
    }
    .commentButton {
      background-color: #383838;
      color: white;
      padding: 5px;
      height: 40px;
      font-size: 25px;
      display: none;
      align-content: center;
      grid-template-columns: auto 1fr;
      border-radius: 2px;
      svg {
        max-height: 100%;
        /* height: 30px; */
        justify-self: right;
        /* transform */
        path {
          height: 30px;

        }
      }
    }
    .mobile {
      display: none;
    }
    .desktop {
      display: grid;
    }
    .comments {
      grid-template-columns: 100%;
      gap: 10px;
      padding: 10px;
      background-color: #5c5c5c;
      max-height: 462px;
      grid-template-rows: auto 1fr;
      box-shadow: inset 0 0 10px black;
      .wrapper {
        display: grid;
        max-height: 350px;
        overflow-y: auto;
        grid-auto-rows: auto;
        grid-auto-flow: row;
        gap: 10px;
        overflow-x: hidden;
      }
      .wrapperForMobile {
        display: none;
        max-height: 350px;
        overflow-y: auto;
        grid-auto-rows: auto;
        grid-auto-flow: row;
        gap: 10px;
        overflow-x: hidden;
      }
      .comment {
        padding: 5px;
        display: grid;
        grid-template-columns: 20% auto 15px;
        gap: 5px;
        background-color: #1e1e1e;
        align-self: start;
        svg {
          color: white;
          height: 15px;
          transition: all.5s;
        }
        svg:hover {
          color: red;
        }
        .avatar {
        }
        img {
          width: 100%;
          height: auto;
        }
        .inf {
          display: block;
          color: white;
          div {
            max-width: 90%;
          }
          h3 {
            margin: 0;
          }
          span {

          }
        }
      }
      .enterComment {
        grid-template-columns: 100%;
        display: grid;
        gap: 10px;
        align-self: end;
        textarea {
          padding: 5px;
          resize: none;
        }
        button {
          height: 40px;
        }
        textarea, button {
          border: unset;
          background-color: black;
          color: white;
        }
      }
    }
  }
`

export const ArticleInfo = styled.div`
  color: white;
  font-family: 'Bree Serif', serif;
  max-width: 100vw;
  div {
    /* height: 100%; */
  }
  img {
    width: 100%;
    margin-top: 10px;
  }
`

export const OtherInf = styled.div`
  margin-bottom: 10px;
  span {
    display: block
  }
`
export const AddArticleSt = styled.div`
  /* width: 90%; */
  justify-self: right;
  text-align: right;
  color: white;
  font-family: 'Bree Serif', serif;
  span {
    transition: all.6s ease;
  }
  span:hover {
    color: red;
  }
`
