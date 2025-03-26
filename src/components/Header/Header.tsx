import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router";
import Carrinho from "../Carrinho/Carrinho";
import { DivRight, HeaderContainer, Localizacao } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/images/Logo.svg" alt="Coffee Delivery" />
        </Link>

        <DivRight>
          <Localizacao>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </Localizacao>
          <Carrinho />
        </DivRight>
    </HeaderContainer>
  )
}

export default Header
