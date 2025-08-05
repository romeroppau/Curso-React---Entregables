import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const [cantidad, setCantidad] = useState(0);
    return (
        <div className="carrito">
            <FaShoppingCart className="carrito-icono" />
            {cantidad}
        </div>
    );
};

export default CartWidget;
