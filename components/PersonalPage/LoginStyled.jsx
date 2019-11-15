import styled from '@emotion/styled'

export const LoginPageSt = styled.div`
  width: 100%;
  min-height: 80vh;
  justify-content: center;
  align-content: center;
  background: #2f3238;
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  .wrapper{
    padding: 20px;
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-columns: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    grid-template-rows: auto auto 1fr;
    .title{
      border-bottom: 2px solid white;
      padding-bottom: 10px;
      text-align: center;
      color: white;
      grid-row: 1;
    }
    form{
      margin-top: 10px;
      margin-bottom: 10px;
      justify-items: right;
      display: grid;
      grid-column: 1;
      grid-row: 2;
      align-content: center;
      grid-auto-rows: auto;
      grid-row-gap: 10px;
      grid-template-columns: 100%;
      div{
        column-gap: 20px;
        font-size: 17px;
        grid-column: 1;
        display: grid;
        grid-template-columns: auto auto;
        text-align: left;
        align-items: center;
        label{
          width: 100%;
          text-align: left;
          margin: 0;
          display: grid;
          color: white;
          grid-column: 1;
        }
        input{
          color: black;
          padding: 0 5px 0 5px;
          grid-column: 2;
          border: none;
          p{
            margin: 0px;
          }
        }
        .radio{
          color: white;
        }
        .radio::placeholder{
          color: green;
        }
        input::placeholder{
          color: black;
        }
      }
    }
    .buttons{
      display: grid;
      grid-column: 1;
      grid-row: 3;
      grid-template-rows: auto 1fr;
      grid-template-columns: 100%;
      .button_div{
        justify-items: center;
        display: grid;
        margin-top: 10px;
        grid-column: 1;
        button{
          height: 70%;
          margin: 0 0 10px 0;
          span{
            color: white;
          }
          .fa-user-alt{
            font-size: 100%;
          }
        }
      }
      .already{
        display: grid;
        grid-template-columns: 65% 35%;
        grid-template-rows: auto;
        grid-row-gap: 10px;
        h3{
          font-size: 100%;
          color: white;
          display: grid;
          margin: 0px;
        }
        h3:hover{
          color: $hover;
          cursor: pointer;
        }
        #last-child{
          text-align: right;
        }
        #resetPassword{
          text-align: center;
          grid-column: 1/3;
        }
      }
    }
  }
  @media (max-width: 576px){
      #panels{
        div{
          grid-template-columns: 100% !important;
          width: 100%;
          input{
            grid-column: 1/2 !important;
          }  
        }
        .already,#last-child{
          grid-column: 1 !important;
          text-align: center !important;
        }   
      }  
  }

`
