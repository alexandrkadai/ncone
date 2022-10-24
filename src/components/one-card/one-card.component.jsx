import './one-card.style.scss';

const Card = () => {
  return (
    <div className="onecard-container">
      <img />
      <div className="onecard-info">
        <span className="product-name">Name</span>
        <div className="onecard-footer">
          <span className="product-price">7.25$</span>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
