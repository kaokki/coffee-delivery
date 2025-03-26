import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Inputs } from '../pages/Cart/Cart';

interface CartContextProviderProps {
  children: ReactNode
}

interface Item {
  id: string
  quantity: number
}

interface CartContextType {
  orders: Item[],
  handleAddOrdertoCart: (itemId: Item['id'], itemQuantity: Item['quantity']) => void,
  handleDeleteItem: (itemId: Item['id']) => void,
  handleIncreaseItem: (itemId: Item['id']) => void,
  handleDecreaseItem: (itemId: Item['id']) => void
  checkout: (data: Inputs) => void,
  formData: Inputs
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({children}: CartContextProviderProps) => {
  const [orders, setOrders] = useState<Item[]>(() => {
    const storedOrders = localStorage.getItem('COFFEE_ITEMS');
    if(storedOrders) {
      return JSON.parse(storedOrders)
    }
    return []
  })

  const [formData, setFormData] = useState<Inputs>({ 
    cep: 0,
    rua: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    UF: '',
    pagamento: '' 
  });

  const navigate = useNavigate();

  const checkout = (data: Inputs) => {
    setFormData(data)
    navigate('/success')
    setOrders([])
  }

  const handleAddOrdertoCart = (itemId: string, itemQuantity: number) => {

    const existingItem = orders.find(order => 
      order.id === itemId
    )

    if(existingItem) {
      existingItem.quantity = existingItem.quantity + itemQuantity
      localStorage.setItem('COFFEE_ITEMS', JSON.stringify(orders))
    } else {
      setOrders((state)=> (
      [...state, {
        id: itemId,
        quantity: itemQuantity
      }]))
    }
    
    //console.log(orders)
    
  }

  const handleIncreaseItem = (itemId: string) => {
    const nextOrders = orders.map(order => {
      if (order.id !== itemId) {
        return order;
      } else {
        return {
          ...order,
          quantity: order.quantity + 1,
        };
      }
    });

    setOrders(nextOrders);
  }
    
  const handleDecreaseItem = (itemId: string) => {
    const nextOrders = orders.map(order => {
      if (order.id !== itemId) {
        return order;
      } else {
        if(order.quantity <= 1 ) {
          return order
        } else {
          return {
            ...order,
            quantity: order.quantity - 1,
          };
        }
        
      }
    });

    setOrders(nextOrders);
  }
    
    
  

  const handleDeleteItem = (itemId: string) => {
    setOrders(
      orders.filter(order => 
        order.id !== itemId
      )
    )
  }

  useEffect(() => {
    localStorage.setItem('COFFEE_ITEMS', JSON.stringify(orders));
  }, [orders]);

	return (
    <CartContext.Provider value={{ orders, handleAddOrdertoCart, handleDeleteItem, handleIncreaseItem, handleDecreaseItem, checkout, formData }}>
      {children}
    </CartContext.Provider>
  )
}