import React from 'react';
import '../styles/OneCard.css';

export default function OneCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () =>{
        if (!disabled){
            handleChoice(card)
        }
    }

    return(
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
          <img
             className='face'
             src={card.src}
             alt="Carte de face">
            </img>

            <img
                className='dos'
                src="img\back.svg"
                onClick={handleClick}
                alt="Carte de dos"
            ></img>
        </div>
    </div>
    )
    
}