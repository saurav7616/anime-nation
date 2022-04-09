import { useEffect, useState } from 'react';
import Anime from '../components/anime/Anime';
import AnimeArr from '../components/anime_arr/AnimeArr';
import Nav from '../components/nav/Nav';
import './App.css';

function App() {
  const [animelist, setAnimelist] = useState([])            //store list of anime
  const [anime_id, setAnime_id] = useState('')              //store anime id to show details of an anime
  const [anime_data, setAnime_data] = useState({})          //storing anime details fetched using id
  const [searchField, setSearchField] = useState('')        //storing search input

  useEffect(()=>{                                           //fetching list of anime
    setTimeout(() => {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(list => {
        setAnimelist(list)
        setAnime_id(list[0].id)
      })
    }, 1000);
  },[])

  useEffect(()=>{                                         //fetching anime using anime id
    if(anime_id.length>0)
      fetch(`https://ghibliapi.herokuapp.com/films/${anime_id}`)
      .then(res => res.json())
      .then(data => setAnime_data(data))
  },[anime_id])

  const filteredAnime = animelist.filter(anime => {               //filtering results using input from search field
    return anime.title.toLowerCase().includes(searchField.toLowerCase());
  })

  return !animelist.length 
    ? <div className='loading'><h1>Loading</h1><div className='dot'>- - - -</div></div> 
    : (
        <div className="App">
          <Anime data={anime_data}>
            <Nav setSearchField={setSearchField}/>
            <AnimeArr list={filteredAnime} setAnime_id={setAnime_id} a_id={anime_id}/>
          </Anime>
        </div>
      );
}

export default App;
