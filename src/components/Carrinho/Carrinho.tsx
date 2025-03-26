import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router";
import { useCart } from "../../hooks/useCart";
import { CarrinhoContainer } from './styles';

function Carrinho() {
  const { orders } = useCart();
  return (
    <Link to="/cart">
      <CarrinhoContainer>
        <ShoppingCart size={22} weight="fill" />
        {orders.length > 0 && <span>{orders.length}</span>}
      </CarrinhoContainer>
    </Link>
  )
}

export default Carrinho
