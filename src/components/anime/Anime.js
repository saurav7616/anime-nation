import './Anime.css'

const Anime = (props)=>{
  //main container showing details of particular anime
  return(
    <div className='anime-container'>
      <div className='banner-container'>
        <img src={props.data.movie_banner} alt='movie banner' className='bg-banner'/>
      </div>
      <div className='anime-data'>
        <div className='title'>{props.data.title}</div>
        <div><i className='sub-title'>({props.data.original_title_romanised})</i></div>
        <div><i className='caret'>&#129170;</i>{"Release date : "+props.data.release_date}</div>
        <div><i className='caret'>&#129170;</i>{"Director : "+props.data.director}</div>
        <div className='desc-cont'>
          <div className='desc-icon'>&#8505;</div>
          <div className='desc'>{props.data.description}</div>
        </div>
      </div>
      {/* to access child components */}
      {props.children}
    </div>
  );
}

export default Anime;