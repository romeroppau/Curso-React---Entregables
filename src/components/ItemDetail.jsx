import ItemCount from './ItemCount';

const ItemDetail = ({ producto, onAddToCart }) => {
  const handleAdd = (cantidad) => {
    const productoConCantidad = { ...producto, cantidad };
    onAddToCart(productoConCantidad);
  };

  return (
    <div className="detalle">
      <img src={producto.img} alt={producto.nombre} className="imagen-detalle" />
      <h2>{producto.nombre}</h2>
      <p>Precio por noche: ${producto.precio}</p>
      <ItemCount onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
