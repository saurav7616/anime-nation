import './AnimeArr.css';

const AnimeArr = ({list, setAnime_id, a_id})=>{

  //handling horizontal scrolling on click
  const content = document.querySelector('.scroll');
  const scrollLeft = ()=>content.scrollLeft -= 295;
  const scrollRight = ()=>content.scrollLeft += 295;

  //to set focus on selected anime
  const select_anime = (id,i)=>{
    setAnime_id(id);
    document.querySelectorAll('.banner-cont').forEach(div => div.classList.remove('active'))
    document.querySelector(`.scroll .card:nth-child(${i+1}) .banner-cont`).classList.add('active')
  }
  return(
    <div className='container'>
      <div className='arrow' onClick={scrollLeft}>&#8249;</div>
      <div className='scroll'>

      {/* -----------------mapping through list of anime---------------------- */}
      {list.map((ele,index) => {
        return <div className="card" key={index} onClick={()=>select_anime(ele.id,index)}>
                 <div className={`banner-cont ${ele.id==a_id?'active':null}`}>
                  <img src={ele.movie_banner} alt='movie poster' className='banner'/>
                 </div>
                 <h4>{ele.title}</h4>
               </div>
      })}
      
      </div>
      <div className='arrow' onClick={scrollRight}>&#8250;</div>
    </div>
  );
}

export default AnimeArr;