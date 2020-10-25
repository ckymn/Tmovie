import React, { Component } from 'react'
import { Button, Image, Form, Message, MessageHeader } from 'semantic-ui-react'
import InlineError from 'InlineError'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

class NewMovieForm extends Component {
  state = {
    title: '',
    cover: '',
    error: {},
    redirect: false
  }
  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = () => {
    const error = this.validate(this.state.data)
    this.setState({
      error,
      redirect:true
    })
    if (Object.keys(errors).length === 0) {
      this.props.onNewMovieSubmit(this.state)
    }
  }

  validate = () => {
    const error = {}
    if (!this.state.title) error.title = 'Cant be blank'
    if (!this.state.cover) error.cover = 'Cant be blank'
    return error
  }

  render () {
    const { error } = this.state
    const form = (
      <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
        <Form.Field error={!!error.title}>
          <label>Title</label>
          {error.title && <InlineError message={error.title} />}
          <input
            placeholder='title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field error={!!error.cover}>
          <label>Cover Url</label>
          {error.cover && <InlineError message={error.cover} />}
          <input
            placeholder='cover url'
            name='cover'
            value={this.state.cover}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Image src={this.state.cover} />
        <div className='clearFix'></div>
        <Button type='submit'>Submit</Button>
        {this.props.newMovie.error.response && (
          <Message warning>
            <Message.Header>We are Sorry!</Message.Header>
            <p>A problem error while recording try again.</p>
          </Message>
        )} 
      </Form>
    )
    return (
      <div>
        {
          this.props.newMovie.done && this.state.redirect ? <Redirect to='/movies'/> : form
        }
      </div>
    )
  }
}

export default NewMovieForm
