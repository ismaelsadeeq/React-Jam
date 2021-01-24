import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('') 
  function searchCocktail(){
    setSearchTerm(searchValue.current.value)
  }
  function submit(e){
    e.preventDefault();
  }
  React.useEffect(()=>{
    searchValue.current.focus();
  },[])
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={submit}>
      <div className='form-control'>
        <label htmlFor='name'>
          Search your favarite cocktail
        </label>
        <input type='text' id='name'
         ref={searchValue} onChange={searchCocktail}
        />
      </div>
      </form>
    </section >
  )
}

export default SearchForm
