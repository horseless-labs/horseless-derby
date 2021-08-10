import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;

    button {
      min-width: 100px;
      padding: 8px 8px;
      border-radius: 10px;
      border: none;
      background: brown;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }

    background {
      z-index: auto;
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }

    div.background {
      z-index: auto;
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }

    modal-wrapper {
      width: 800px;
      height: 500px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      background: #fff;
      color: #000;
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
      z-index: 10;
      border-radius: 10px;
    }

    modal-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1.8;
      color: #141414;
  
      p {
          margin-bottom: 1rem;
      }
  
      button {
          padding: 10px 24px;
          background: #141414;
          color: #fff;
          border: none;
      }
    }

    h1 {
      color: blue;
    }
`

export default GlobalStyle