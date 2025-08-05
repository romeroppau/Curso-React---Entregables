import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({cantidad}) => {
    return (
        <div className="card-widget">
            <FaShoppingCart className="carrito-icono" />
            {cantidad > 0 && <span className="contador">{cantidad}</span>}
        </div>
    );
};
export default CartWidget;
