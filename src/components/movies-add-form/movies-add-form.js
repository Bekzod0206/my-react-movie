import { useContext, useState } from 'react'
import './movies-add-form.css'
import { Context } from '../../context';


const MoviesAddForm = () => {
  const [state, setState] = useState({name: '', views: ''});

  const {_, dispatch} = useContext(Context)


  const customInputHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const addFormHandler = (e) => {
    e.preventDefault();
    if(state.name === '' || state.views === '') return
    const newData = {name: state.name, viewers: state.views}
    dispatch({type:'ADD_FORM', payload: newData})
    setState({
      name: '',
      viewers: ''
    })
  }

  return (
    <div className="movie-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className='add-form d-flex' onSubmit={addFormHandler}>
        <input type='text' className='form-control new-post-label' placeholder='Qanday kino' value={state.name} name='name' onChange={customInputHandler}/>
        <input type='number' className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan" value={state.views} name='views' onChange={customInputHandler}/>
        <button type='submit' className='btn btn-outline-dark'>
          Qo'shish
        </button>
      </form>
    </div>
  )

}

export default MoviesAddForm