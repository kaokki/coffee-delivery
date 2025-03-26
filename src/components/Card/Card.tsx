import { ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import Quantity from '../Quantity/Quantity'
import { BtnCart, CardDiv } from './styles'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export interface CartItem {
  id: string,
  quantity: number
}

function Card({ coffee }: Props) {
  

  const [quantity, setQuantity] = useState(1);

  const { handleAddOrdertoCart } = useCart();

  const handleIncrease = () => {
    setQuantity((state) => state + 1);
  }

  const handleDecrease = () => {
    setQuantity((state) => { 
      if(state === 0 ) return 0
      return state - 1
    });
  }
  return (
    <CardDiv>
      <img src={coffee.image} alt={coffee.title} />
      <div className="tags">
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <div className="coffee-bottom">
        <div className="price">
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </div>
        <div className="coffee-input">
          <Quantity
            quantity={quantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
          <BtnCart disabled={quantity === 0} onClick={()=> handleAddOrdertoCart(coffee.id, quantity)}>
            <ShoppingCart size={20} weight='fill' />
          </BtnCart>
        </div>
      </div>
    </CardDiv>
  )
}

export default Card