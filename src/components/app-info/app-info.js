import { useContext } from 'react'
import './app-info.css'
import { Context } from '../../context'

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {

  const {state} = useContext(Context)

  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercaase'>Barcha kinolar soni: {state.data.length}</p>
      <p className='fs-4 text-uppercaase'>Sevimli filmlar soni: {state.data.filter(c => c.favourite).length}</p>
    </div>
  )
}

export default AppInfo