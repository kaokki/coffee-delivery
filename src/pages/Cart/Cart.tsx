import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { coffees } from '../../../data.json'
import { mixins } from '../../assets/styles/mixins'
import Quantity from "../../components/Quantity/Quantity"
import { useCart } from "../../hooks/useCart"
import { AddressForm, CartContainer, CartLeftCard, Checkout, CheckoutList, CheckoutPrice, PaymentMethod, Title } from "./styles"

export type Inputs = {
  cep: number,
  rua: string,
  numero: number,
  complemento?: string,
  bairro: string,
  cidade: string,
  UF: string,
  pagamento: string
};

function Cart() {
  const { orders, handleDeleteItem, handleIncreaseItem, handleDecreaseItem, checkout } = useCart();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  //const [data, setData] = useState("");

  const coffeesInCart = orders.map((order) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === order.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: order.quantity,
    }
  })

  const handleIncrease = (itemId: string) => {
    handleIncreaseItem(itemId)
  }

  const handleDecrease = (itemId: string) => {
    handleDecreaseItem(itemId)
  }

  const itemTotal = (a: number, b:number) => a * b;

  const totalItems = coffeesInCart.reduce((previousValue, currentItem)=> {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const totalWithShipping =  totalItems + 3.5

  const errosCampos = errors.cep || errors.rua || errors.numero || errors.bairro || errors.cidade || errors.UF

  const handleOrderCheckout: SubmitHandler<Inputs> = data => checkout(data);


  return (
    <CartContainer>
      {orders.length <= 1 ? (
          <p className="vazio">Seu carrinho está vazio, adicione algum item.</p>
        ) : (
          <>
          <div className="CartLeft">
            <h2>Complete seu pedido</h2>
            <form id="orderForm" onSubmit={handleSubmit(handleOrderCheckout)}>
              <CartLeftCard className="address">
                <Title>
                  <MapPinLine size={18} color={mixins.colors["yellow-dark"]} />
                  <div>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </Title>
                <AddressForm>
                  <div style={{ gridArea: 'cep' }}><input className={errors.cep && 'erro'} type="number" placeholder="CEP" {...register("cep", {required: true})} /></div>
                  <div style={{ gridArea: 'rua' }}><input className={errors.rua && 'erro'} type="text" placeholder="Rua" {...register("rua", {required: true})} /></div>
                  <div style={{ gridArea: 'num' }}><input className={errors.numero && 'erro'} type="number" placeholder="Número" {...register("numero", {required: true})} /></div>
                  <div style={{ gridArea: 'comp' }} className="opt"><input type="text" placeholder="Complemento" {...register("complemento")} /></div>
                  <div style={{ gridArea: 'bai' }}><input className={errors.bairro && 'erro'} type="text" placeholder="Bairro" {...register("bairro", {required: true})} /></div>
                  <div style={{ gridArea: 'cid' }}><input className={errors.cidade && 'erro'} type="text" placeholder="Cidade" {...register("cidade", {required: true})} /></div>
                  <div style={{ gridArea: 'uf' }}><input className={errors.UF && 'erro'} type="text" placeholder="UF" maxLength={2} {...register("UF", {required: true})} /></div>
                </AddressForm>
                {errosCampos && <p className="msgError">Preencha os campos corretamente</p>}
              </CartLeftCard>
              <CartLeftCard className="payment">
                <Title>
                  <CurrencyDollar size={18} color={mixins.colors["purple"]} />
                  <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  </div>
                </Title>
                <PaymentMethod>
                  <label htmlFor="credito">
                    <span><CreditCard size={16}/> Cartão de crédito</span>
                    <input type="radio" {...register("pagamento", {required: true})} id="credito" value="credito" />
                  </label>
                  
                  <label htmlFor="debito">
                    <span><Bank size={16} /> Cartão de débito</span>
                    <input type="radio" {...register("pagamento", {required: true})} id="debito" value="debito" />
                  </label>  
                  
                  <label htmlFor="dinheiro">
                    <span><Money size={16} /> Dinheiro</span>
                    <input type="radio" {...register("pagamento", {required: true})} id="dinheiro" value="dinheiro" />
                  </label>
                </PaymentMethod>
                {errors.pagamento && <p className="msgError">Escolha um método de pagamento</p>}
              </CartLeftCard>
            </form>
          </div>
          <div className="CartRight">
            <h2>Cafés selecionados</h2>
            <Checkout>
              <CheckoutList>
                {coffeesInCart.map((c) => (
                  <li key={c.id}>
                    <img src={c.image} alt="" />
                    <div className="details">
                      <p>{c.title}</p>
                      <div className="quantity">
                        <Quantity quantity={c.quantity} handleIncrease={()=> handleIncrease(c.id)} handleDecrease={()=> handleDecrease(c.id)} />
                        <button onClick={()=> handleDeleteItem(c.id)}><Trash size={14} /> Remover</button>
                      </div>
                    </div>
                    <span>R$ {itemTotal(c.price, c.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </CheckoutList>
              <CheckoutPrice>
                <div>
                  <p>Total de itens</p>
                  <span>R$ {totalItems.toFixed(2)}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>
                <div className="total">
                  <p>Total</p>
                  <span>R$ {totalWithShipping.toFixed(2)}</span>
                </div>
                <button type="submit" form="orderForm">confirmar pedido</button>
              </CheckoutPrice>
            </Checkout>
          </div>
        </>
      )}
    </CartContainer>
  )
}

export default Cart
