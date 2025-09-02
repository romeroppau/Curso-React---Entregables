import { useState } from 'react';
import './css/ItemCount.css'; 

const ItemCount = ({ onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="item-count">
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
