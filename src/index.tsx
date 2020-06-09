import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import './style.css'

import { MainLayout } from './components/Layout'
import { Card } from './components/Card'
import { CardHeader } from './components/CardHeader'
import { TodoInput } from './feature/TodoInput'
import { TodoList } from './feature/TodoList'
import { TodoFilter } from './feature/TodoFilter'

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <MainLayout>
        <Card>
          <CardHeader text="Todo List" />
          <TodoInput />
          <TodoList />
          <TodoFilter />
        </Card>
      </MainLayout>
    </RecoilRoot>
  )
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.querySelector('#root'))
