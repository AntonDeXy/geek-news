import styled from '@emotion/styled'

export const AdminPanelSt = styled.div`
  display: grid;
  color: white;
  width: 90%;
  min-height: 10vh;
  justify-content: center;
  justify-self: center;
  grid-template-columns: 100%;
  gap: 15px;
`

export const AdmCardSt = styled.div`
  background-color: #383838;
  max-width: 100%;
  display: grid;
  grid-template-columns: 23% 17% 10% 10% 25% 15%;
  gap: 15px;
  max-height: 250px;
  .thumbnail {
    max-height: 100%;
    max-width: 100%;
  }
  img {
    max-width: 100%;
  }
  .desc {
    max-height: 250px;
    width: 100%;
    overflow-y: scroll;
  }
  h2 {
    margin: 0;
  }
  .buttons {
    justify-content: left;
    display: grid;
    width: 100%;
    gap: 15px;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 40px);
    img {
      /* width: 50%; */
      max-height: 100%;
      max-width: 100%;
      /* width: 50%; */
    }
    svg {
      transition: all.5s;
      font-size: 35px;
    }
    svg:hover {
      color: #8A5076;
    }
  }
  @media (max-width: 768px) {
    max-height: none !important;
    grid-template-columns: 100% !important;
    padding: 5px;
    h2, .author, time {
      text-align: center;
    }
    img {
      width: 100%;
      max-height: none;
    }
    .buttons {
      grid-template-columns: 50% 50%;
      justify-items: center;
    }
  }
` 

export const EditPanel = styled.div`
  padding: 15px;
  display: grid;
  background-color: grey;
  position: absolute;
  justify-self: center;
  align-self: center;
  width: 80%;
  max-height: 70%;
  grid-template-columns: auto 30px;
  background-color: rgba(53, 53, 53, 1);
  color: white;
  border-radius: 10px;
  font-family: 'Fira Sans Condensed', sans-serif; 
  img {
    width: 100%;
  }
  .wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    grid-column: 1/3;
    span {
      align-items: center;
      display: grid;
    }
    input, select, button {
      border: 2px solid black;
      background-color: black;
      color: white;
    }
    button {
      height: 30px;
      grid-column: 2;
    }
  }
`