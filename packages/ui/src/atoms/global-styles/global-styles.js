import React from 'react'
import { css } from 'styled-components'


export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  *:after, *:before {
    box-sizing: border-box;
  }

  html {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    height: 100%;
    font-family: sans-serif;
  }

  body {
    font-family: "Open Sans", "OpenSans", sans-serif;
    font-size: 16px;
    line-height: 22px;

    margin: 0;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`
