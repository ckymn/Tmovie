import React, { Component } from 'react'
import './App.css'
import MoviesPage from './components/page/MoviesPage'
import NewMoviesPage from './components/page/NewMoviesPages'
import { Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />

        <Container text>
          <Route path='/movies' exact component={HomePage}></Route>
          <Route path='/movies' exact component={MoviesPage}></Route>
          <Route path='/movies/new' exact component={NewMoviesPage}></Route>
          <Route path='/movie/:_id ' exact component={NewMoviesPage}></Route>
        </Container>

        <Footer />
      </div>
    )
  }
}

export default App
