import { useContext } from 'react'
import './app-filter.css'
import { Context } from '../../context'

const AppFilter = () => {
  const {state, dispatch} = useContext(Context)
  return (
    <div className="btn-group">
      {btnsArr.map((item) =>(
        <button
          key={item.name}
          onClick={() => {dispatch({type: 'ON_FILTER', payload: item.name})}}
          className={`btn ${state.filter === item.name ? 'btn-dark' : 'btn-outline-dark'}`}
        >
          {item.text}
        </button>
      ))}
    </div>
  )
}

const btnsArr = [
  {name: 'all', text: "Barcha kinolar"},
  {name: 'popular', text: "Mashxur kinolar"},
  {name: 'mostViewed', text: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter