import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { coffees } from '../../../data.json'
import Card from "../../components/Card/Card"
import { CoffeeList, CoffeeListWrap, Hero, HeroContent, HeroContentRight } from "./styles"

function Home() {

  return (
    <>
      <Hero>
        <HeroContent>
          <HeroContentRight>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <ul className="HeroList">
              <li>
                <div><ShoppingCart weight="fill" size={20} /></div>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <div className="yellow"><Package weight="fill" size={20} /></div>
                <span>Embalagem mantém o café intacto</span>  
              </li>
              <li>
                <div className="base-text"><Timer weight="fill" size={20} /></div>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <div className="purple"><Coffee weight="fill" size={20} /></div>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </HeroContentRight>
          <img src="/images/hero.png" alt="" />
        </HeroContent>
      </Hero>

      <CoffeeListWrap>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </CoffeeListWrap>
    </>
  )
}

export default Home
