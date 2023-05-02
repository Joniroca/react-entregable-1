import { useState } from "react";
import "./App.css";
import PhraseCard from "./components/PhraseCard/PhraseCard";
import phrases from "./assets/data/phrases.json";
import planet from "./assets/img/planeta-1.png";
import bgOne from "./assets/img/bg-1.jpg";
import bgTwo from "./assets/img/bg-2.jpg";
import bgThree from "./assets/img/bg-3.jpg";
import bgFour from "./assets/img/bg-4.jpg";

function App() {
  const phrasesLengthForGetLastIndex = phrases.length;
  let randomIndexMount = Math.floor(
    Math.random() * phrasesLengthForGetLastIndex
  );
  const [newIndex, setNewIndex] = useState(randomIndexMount);
  let handleClickRandomIndexPhrases = (e) => {
    e.stopPropagation();
    const newRandomIndex = Math.floor(
      Math.random() * phrasesLengthForGetLastIndex
    );
    setNewIndex(newRandomIndex);
  };
  let onlyOnePhrase = phrases[newIndex];

  const bgArray = [bgOne, bgTwo, bgThree, bgFour];
  const bgLength = bgArray.length;
  const bgRandomIndexForMount = Math.floor(Math.random() * bgLength);
  const randomImgPath = bgArray[bgRandomIndexForMount];

  return (
    <section
      className="App"
      style={{ backgroundImage: `url( ${randomImgPath})` }}
    >
      <h2 className="title"> INFOGALAX </h2>
      <PhraseCard
        randomPhrase={onlyOnePhrase.phrase}
        randomAuthor={onlyOnePhrase.author}
        img={planet}
        onClick={handleClickRandomIndexPhrases}
      />
    </section>
  );
}

export default App;
