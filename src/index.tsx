import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

import { MainLayout } from './components/Layout'
import { Card } from './components/Card'
import { CardHeader } from './components/CardHeader'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'

const App = (): JSX.Element => {
  return (
    <MainLayout>
      <Card>
        <CardHeader />
        <TodoInput />
        <TodoList />
        <TodoFilter />
      </Card>
    </MainLayout>
  )
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.querySelector('#root'))
