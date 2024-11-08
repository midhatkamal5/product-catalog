import React from 'react';
import styles from './styles/card.module.css';

function ProductCard ({ product }) {
  const { name, price, description, image, category, rating} = product;

  const cardStyle = {
    backgroundColor: category === 'Electronics' ? '#F5CEC2' : '#D8EAF7' 
  };

  return (
    <div className={`card mb-4 ${styles.card}`} style={cardStyle}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>{price}</strong></p>
        <div className={styles.rating}>
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
      </div>
      <div className="card-footer text-muted">
        <b>Category:</b> {category}
      </div>
    </div>
  );
};

export default ProductCard;
