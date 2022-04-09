import search from '../../assets/search.png';
import './Nav.css'

const Nav = ({setSearchField})=>{

  //search input
  return(
    <div className='search'>
      <img src={search} alt='search icon' className='search-icon'/>
      <input 
        className='searchfield'
        type='text' 
        onChange={(e)=>setSearchField(e.target.value)} 
        placeholder='search movie'
      />
    </div>
  );
}

export default Nav;