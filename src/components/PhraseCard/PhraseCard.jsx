import React from "react";
import "./PhraseCard.css";
import Button from "../Button/Button";

const PhraseCard = ({ randomPhrase, randomAuthor, img, onClick }) => {
  return (
    <section className="card_container">
      <div className="phrase_author__container">
        <p className="phrase_container">{randomPhrase}</p>

        <p className="author_container">
          <Button onClick={onClick} />
          <b
            className="bounded_author"
            style={{ backgroundImage: `url(${img})` }}
          >
            FUENTE: {randomAuthor}
          </b>
          {/* <img src={img} alt="" /> */}
        </p>
      </div>
    </section>
  );
};

export default PhraseCard;
