import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'

import Container from '@components/Container/Container'
import HomePage from '@components/HomePage/HomePage'

import theme from './styles'

const Router = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Container>
          <Route path="/" component={HomePage} />
        </Container>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(<Router />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
