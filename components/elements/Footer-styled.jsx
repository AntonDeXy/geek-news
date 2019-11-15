import styled from '@emotion/styled'

export const FooterSt = styled.footer`
  width: 100%;
  font-size: 20px;
  height: 10vh;
  display: grid;
  background-color: #383838;
  font-family: 'Squada One', cursive;
`

export const WrapperSt = styled.div`
  justify-self: center;
  align-items: center;
  color: white;
  width: 90vw;
  display: grid;
  grid-template-columns: 50% auto;
  @media (max-width: 540px) {
    text-align: center;
    grid-template-columns: 100% !important;
  }
`

export const Img = styled.img`
  height: 20px;
`

export const A = styled.a`
  color: white;
  text-decoration: none;
  transition: all.5s;
  :hover {
    text-decoration: none;
    color: #8A5076;
  }
`
export const MadeWith = styled.div`
  display: grid;
  justify-content: right;
  @media (max-width: 540px) {
    justify-content: center;
  }
`
