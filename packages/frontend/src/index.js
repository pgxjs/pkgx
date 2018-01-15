import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Button } from '@pkx/ui'


const rootElement = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    (
      <BrowserRouter>
        <div>
          <div>Example</div>
          <Button>Hello PKX</Button>
        </div>
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
