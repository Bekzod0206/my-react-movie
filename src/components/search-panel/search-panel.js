import { useContext, useState } from 'react'
import './search-panel.css'
import { Context } from '../../context'

const SearchPanel = ({updateTermHandler}) => {
  const [term, setTerm] = useState('')

  const {state, dispatch} = useContext(Context)

  const updateTermHandlerInner = e => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    dispatch({type: 'ON_TERM', payload: term})
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={updateTermHandlerInner}
      value={term}
    />
  )
}

export default SearchPanel