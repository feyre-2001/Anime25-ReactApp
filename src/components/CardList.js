import React from 'react';
import Card from './Card.js';

const CardList = ({names}) => {
  return(
    <div>
    {
        names.map((user,i)=>{
        return (
          <Card
               key={i}
               id={names[i].id}
               name={names[i].name}
               anime={names[i].anime}
               im={names[i].im}
               />
             );
        })
    }
    </div>
  );
}

export default CardList;
