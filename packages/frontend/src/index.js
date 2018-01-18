import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { Button, globalStyles } from '@pkx/ui'


const rootElement = document.getElementById('root')

// eslint-disable-next-line no-unused-expressions
injectGlobal`${globalStyles}`

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
