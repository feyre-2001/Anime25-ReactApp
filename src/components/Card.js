import React from 'react';

const Card=({id,name,anime,im}) =>{
  return(
    <div className='tc bg-navy dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt="animes" src={im}/>
      <div>
          <h2 className="f2">{name}</h2>
          <p className="f2">{anime}</p>
      </div>
    </div>
  );
}

export default Card;
