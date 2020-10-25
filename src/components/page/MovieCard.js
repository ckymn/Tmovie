import React from 'react'
import { Card, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function extra (movie, deleteMovie) {
  return (
    <div className='ui two buttons '>
      <Button animated as={Link} to={`/movie/${movie.id}`}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick={() => deleteMovie(movie._id)}>
        <Button.Content hidden>Delete </Button.Content>
        <Button.Content visible>
          <Icon name='trash' />
        </Button.Content>
      </Button>
    </div>
  )
}
const MovieCard = (props, deleteMovie) => (
  <GridColumn>
    <Card>
      <Card
        image={props.movieses.cover}
        header={props.movieses.title}
        extra={extra(props.movieses , deleteMovie)}
      />
    </Card>
  </GridColumn>
)

export default MovieCard
