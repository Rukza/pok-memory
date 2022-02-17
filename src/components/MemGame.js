import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/MemGame.css';
import OneCard from './OneCard';

const CardImages = [
  {"src": "./img/1.png", matched: false},
  {"src": "./img/2.png", matched: false},
  {"src": "./img/3.png", matched: false},
  {"src": "./img/4.png", matched: false},
  {"src": "./img/5.png", matched: false},
  {"src": "./img/6.png", matched: false},
  
]



function MemGame() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [PlayerName, setPlayerName] = useState("") 
  const [Score, setScore] = useState(0)
 


  //mélangeur//
  const shuffleCards = () => {
    const shuffleCards = [...CardImages,...CardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card,id:Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setScore(0)
    setCards(shuffleCards)
    setTurns(0)
    
  }

//Choix de cartes//
const handleChoice = (card) =>{
 choiceOne ? setChoiceTwo(card): setChoiceOne(card)
}

//comparer les cartes//
useEffect(() => {

  if (choiceOne && choiceTwo) {
    
    setDisabled(true)
    if (choiceOne.src === choiceTwo.src){
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src){
            setScore(Score+20/turns*4)
            return{...card, matched: true,}            
          }else{
            return card
          }
        })
      })
      resetTurn()
    }else{
      setTimeout(() => resetTurn(), 500)
    }
  }

},[choiceOne, choiceTwo])



//reset choix et increment tour//
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
}

//Save score//
function saveScore () {
  if (Score>localStorage.getItem("highScore")){
    localStorage.player = PlayerName
    localStorage.highScore = Score
  
}else{
  alert("Vous n'avez pas dépassé le record, votre score ne peut être enregistré");
}
}

//auto start
  useEffect(() => {
    shuffleCards()
  },[])

  return (
    <div className="MemGame">
      
      <form className='myForm'>
        <h1>Memory Pokémon</h1>
        <label>Nom du joueur :
          <input
            type="text" 
            value={PlayerName} maxLength="8" placeholder="Max 8 charactères"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </label>
      </form>
      <br></br>
      <div>
       joueur : {PlayerName}
        <p>Score: {Score}</p>
        <button onClick={saveScore}>Save hight score</button>
        <p> highscore : {localStorage.getItem("player")}{localStorage.getItem("highScore")}</p>
        </div>
      <button onClick={shuffleCards}>New game</button>
      
      <div className='card-grid'> 
        {cards.map(card =>(
          <OneCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Tours :{turns}</p>
    </div>
    );
}

export default MemGame;
