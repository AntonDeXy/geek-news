import styled from '@emotion/styled'

export const HeaderSt = styled.header`
  display: grid;
  color: white;
  background-color: #383838;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
`
export const WrapperSt = styled.div `
  .logo {
    font-family: 'Bree Serif', serif;
    font-size: 2.5rem;
  }
  .logo:hover {
    color: white !important;
  }
  display: grid;
  width: 90vw;
  grid-template-columns: auto 20%;
  align-items: center;
  a {
    align-self: center;
    text-decoration: none;
    color: white;
    font-family: 'Bree Serif', serif;
    transition: all.5s;
    :hover {
      cursor: pointer;
      color: #8A5076 !important;
    }
  }
  @media (max-width: 1500px) {
    grid-template-columns: auto 35%;
  }
  @media (max-width: 768px) {
    .logo {
      font-size: 25px;
    }
  }
`