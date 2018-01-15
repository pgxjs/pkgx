import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


const rootElement = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    (
      <BrowserRouter>
        <div>Example s</div>
      </BrowserRouter>
    ), rootElement,
  )
}

render()

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // module.hot.accept('./routes', render)
  }
}
