import { useContext } from 'react'
import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'
import { Context } from '../../context'
import { filterHandler, searchHandler } from '../../utilities/data'

const MovieList = ({onToggleProp}) => {
  const {state, dispatch} = useContext(Context)
  const data = filterHandler(searchHandler(state.data, state.term), state.filter)

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  )
}


export default MovieList