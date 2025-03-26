import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { useCart } from "../../hooks/useCart"
import { Container, OrderSummary } from "./styles"

function Success() {
  const { formData } = useCart()
  
  return (
    <>
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        {formData.rua ? (
          <OrderSummary>
          <div>
            <span className="purple"><MapPin weight="fill" /></span>
            <p>
              Entrega em <strong>{formData.rua}, {formData.numero} {formData.complemento && formData.complemento}</strong>
              <span>{formData.bairro} - {formData.cidade}, {formData.UF}</span>
            </p>
          </div>
          <div>
            <span className="yellow"><Timer weight="fill" /></span>
            <p>
              Previsão de entrega
              <span><strong>20 min - 30 min</strong></span>
            </p>
          </div>
          <div>
            <span className="yellow-dark"><CurrencyDollar /></span>
            <p>
              Pagamento na entrega
              <span><strong>{formData.pagamento === 'credito' && 'Cartão de Crédito' || formData.pagamento === 'debito' && 'Cartão de Débito' || formData.pagamento === 'dinheiro' && 'Dinheiro'}</strong></span>
            </p>
          </div>
          </OrderSummary>
        ) : (
          'Sem produtos'
        ) }
        
        <img src="/images/success.svg" alt="Homem andando de moto" />
      </div>
    </Container>
    </>
  )
}

export default Success
