import "./Card.css";

const Card = ({cards}) => {
  return <div className="card-grid">
      {cards.map((card) => (
          <div key={card.id}>
              <img src={card.src} alt="card front" className="card-front"/>
              <img src="/img/cover.png" alt="card back" className="card-front"/>
          </div>
      ))}
  </div>;
};

export default Card;
