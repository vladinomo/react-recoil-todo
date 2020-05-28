import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

const App = (): JSX.Element => {
  return (
    <div>
      hello!
      <div className="button">button</div>
    </div>
  )
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.querySelector('#root'))
