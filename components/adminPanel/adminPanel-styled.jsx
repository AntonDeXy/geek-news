import styled from '@emotion/styled'

export const AdminPanelSt = styled.div`
  display: grid;
  color: white;
  width: 95%;
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
  grid-template-columns: auto 17% 10% 10% auto 5%;
  gap: 15px;
  max-height: 250px;
  .thumbnail {
    max-height: 100%;
    max-width: 100%;
  }
  img {
    width: auto;
    height: 100%;
    /* max-width: 100%; */
  }
  .author {
    text-align: center;
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
    align-content: space-evenly;
    justify-items: center;
    display: grid;
    width: 90%;
    gap: 15px;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 40px);
    img {
      max-height: 100%;
      max-width: 100%;
    }
    svg {
      height: 100%;
      transition: all.5s;
      font-size: 35px;
    }
    svg:hover {
      color: #8A5076;
    }
  }
  @media (max-width: 992px) {
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
      justify-self: center;
      grid-template-columns: 50% 50%;
      justify-items: center;
    }
  }
`
export const EditPanelBack = styled.div`
  position: fixed;
  display: grid;
  height: 100%;
  top: 0;
  width: 100vw;
  justify-content: center;
  background-color: rgba(53, 53, 53, 0.7);
`
export const EditPanel = styled.div`
  margin-top: 15vh;
  box-shadow: 0px 0px 20px white;
  padding: 15px;
  display: grid;
  background-color: grey;
  position: absolute;
  justify-self: center;
  align-self: start;
  width: 80%;
  max-height: 70vh;
  grid-template-columns: auto 30px;
  grid-template-rows: 50px auto 40px;
  background-color: rgba(53, 53, 53, 1);
  color: white;
  border-radius: 10px;
  font-family: 'Bree Serif', serif;
  img {
    width: 100%;
  }
  .wrapper {
    display: grid;
    overflow-y: scroll;
    max-height: calc(70vh - 110px);
    grid-template-columns: auto 1fr;
    gap: 10px;
    padding-right: 10px;
    grid-column: 1/3;
    .upload-button {
      margin-top: 10px;
      margin-bottom: 10px;
    }
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
  button {
    justify-self: center;
    width: 100%;
    grid-column: 1/3;
    margin-top: 5px;
    border: 2px solid black;
    background-color: black;
    color: white;
  }
  .tox-toolbar {
    button {
      background-color: rgb(53, 53, 53);
      border: unset;
      svg {
        fill: white;

      }
    }
  }

  
  @media (max-width: 768px) {
    width: 100%;
    .wrapper {
      grid-template-columns: 100%;
    }
    .fileLoader {
      height: 30px;
    }
    #category {
      height: 30px;
    }
  }
`
