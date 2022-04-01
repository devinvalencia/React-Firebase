import "./App.css";
import SingleCard from "./components/SingleCard";
import { useEffect, useState } from "react";

// Create Array of Cards, Is Constant, Dont need comp
// Won't get re-created every render if made outside comp
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    // Spread syntax, will place each element in array
    // Will do again with second refenence
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // Fire function for each pair of items in array, if return less than 0, then order stays the same, if greater than 0, then order of compared items swapped
      .map((card) => ({ ...card, id: Math.random() }));
    // For each element, fire function that adds id prop & value
    // card represents element in scope, gets properties, then adds id property

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  },[])


  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      // When disabled true, prevent all cards from being clicked
      if (choiceOne.src === choiceTwo.src) {
        console.log("Match!");
        // Use previous card state to update state
        // where is prevCards defined ???
        // Map method returns new array based on array its using
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(),650);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Handle Choice
  const handleChoice = (card) => {
    if (choiceOne) {
      setChoiceTwo(card);
      console.log("Choice 2 is: " + card.src);
      // Cant compare here because state updates are scheduled
      // Code will run before state updated, so it wont work here
    } else {
      setChoiceOne(card);
      console.log("Choice 1 is: " + card.src);
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
