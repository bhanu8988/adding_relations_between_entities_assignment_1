import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.info}>
        <h2>{name}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <strong>{price}</strong>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    margin: "20px",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  info: {
    padding: "15px",
  },
};

export default DestinationCard;
