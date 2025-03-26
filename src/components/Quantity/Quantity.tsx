import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

type Props = {
  quantity: number,
  handleDecrease?: () => void,
  handleIncrease?: () => void,
}


function Quantity({ quantity, handleDecrease, handleIncrease }: Props) {
  

  return (
    <Container>
      <button onClick={handleDecrease}><Minus size={14} /></button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}><Plus size={14} /></button>
    </Container>
    
  )
}

export default Quantity