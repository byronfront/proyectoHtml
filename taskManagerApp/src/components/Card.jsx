import { useState } from 'react';

function Card({ imagen, titulo, descripcion }) {
  const [likes, setLikes] = useState(0);

  const handleMeGusta = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <article className="card">
      <img
        src={imagen}
        alt={titulo}
        className="card__imagen"
      />
      <h2 className="card__titulo">{titulo}</h2>
      <p className="card__descripcion">{descripcion}</p>
      <button
        type="button"
        className="card__boton"
        onClick={handleMeGusta}
      >
        Me gusta {likes > 0 && `(${likes})`}
      </button>
    </article>
  );
}

export default Card;
