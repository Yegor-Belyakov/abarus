import React from 'react'
import './searchInput.css'
import searchIcon from './img/source_icons_search 1.svg'



function SearchInput ({searchValue, setSearchValue}:{searchValue: string, setSearchValue: React.Dispatch<React.SetStateAction<string>>}) {


  return (
    <div onClick={() => document.getElementById('input-search')?.focus()} className='input_wrapper'>
      <input className='input' value={searchValue}  onChange={(e) => setSearchValue(e.target.value)} id='input-search' placeholder='Поиск' type={'text'}></input>
      <img className='searchIcon' src={searchIcon} alt='searchIcon'></img>
    </div>
  )
}

export default SearchInput