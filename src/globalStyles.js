import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

    ModalBackground {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`