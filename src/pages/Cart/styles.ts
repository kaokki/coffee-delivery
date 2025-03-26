import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  max-width: 70rem;
  margin: 0 auto;
  gap: 2rem;

  h2 {
    font-size: 1.125rem;
    line-height: 130%;
    font-family: ${mixins.fonts.baloo};
    color: ${mixins.colors['base-subtitle']};
    margin-bottom: 0.9375rem;
    font-weight: 700;
  }

  .CartLeft {
    min-width: 40rem;
  }

  .vazio {
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 6.25rem;
    font-size: 1.25rem;
  }
`
export const CartLeftCard = styled.div`
  background-color: ${mixins.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  &.address {
    margin-bottom: 0.75rem;
  }

  .msgError {
    color: red;
    margin-top: 1.25rem;
    font-size: 0.9rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      font-size: 1rem;
      line-height: 130%;
      color: ${mixins.colors['base-subtitle']};
      font-weight: 500;
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${mixins.colors['base-text']};
    }
  }
`

export const AddressForm = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'num comp comp'
    'bai cid uf';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;

  > div {
    &.opt {
      position: relative;

      &:before {
        content: 'Opcional';
        position: absolute;
        right: 0.75rem;
        top: 0.875rem;
        font-size: 0.75rem;
        line-height: 130%;
        color: ${mixins.colors['base-label']};
        font-style: italic;
      }

      input {
        padding: 0.75rem 3.875rem 0.75rem 0.75rem;
      }
    }
  }

  input {
    width: 100%;
    border-radius: 4px;
    color: ${mixins.colors['base-text']};
    background-color: ${mixins.colors['base-input']};
    border: 1px solid ${mixins.colors['base-button']};
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 130%;

    &:focus, &:active {
      border: 1px solid ${mixins.colors['yellow-dark']};
    }

    &::-webkit-outer-spin-button, 
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &.erro {
      border: 1px solid red;
    }

  }
`

export const PaymentMethod = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  label {
    width: 11.5rem;
    height: 3.1875rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 1rem;
    background-color: ${mixins.colors['base-button']};
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;

    span {
      color: ${mixins.colors['base-text']};
      font-size: 0.75rem;
      line-height: 160%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      gap: 0.625rem;

      > svg {
        color: ${mixins.colors.purple};
      }
    }

    &:hover {
      background-color: ${mixins.colors['base-hover']};
    }

    &:has(input[type=radio]:checked) { 
      border: 1px solid ${mixins.colors.purple};
      background-color: ${mixins.colors['purple-light']};
    }

    input {
      visibility: hidden;
    }
  }
`

export const Checkout = styled.div`
  background-color: ${mixins.colors['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem 2.75rem 0.375rem;
  min-width: 28rem;
  width: 100%;
`
export const CheckoutList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    border-bottom: 1px solid ${mixins.colors['base-button']};
    padding-bottom: 2rem;
    display: flex;
    gap: 1.25rem;
    align-items: start;
    justify-content: flex-start;

    > img {
      max-width: 4rem;
      width: 100%;
    }

    > span {
      flex: 1;
      text-align: right;
      font-size: 1rem;
      line-height: 130%;
      color: ${mixins.colors['base-text']};
      font-weight: 700;
    }


    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        color: ${mixins.colors['base-subtitle']};
        line-height: 130%;
        font-size: 1rem;
      }

      .quantity {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-start;
        align-items: center;

        > button {
          background-color: ${mixins.colors['base-button']};
          border-radius: 6px;
          height: 2.375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${mixins.colors['base-text']};
          font-size: 0.75rem;
          line-height: 160%;
          padding: 0.375rem 0.5rem;
          border: 0;
          outline: 0;
          text-transform: uppercase;
          gap: 0.25rem;
          cursor: pointer;

          &:hover {
            background-color: ${mixins.colors['base-hover']};
          }

          > svg {
            color: ${mixins.colors.purple};
          }
        }
      }
    }
  }
`

export const CheckoutPrice = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${mixins.colors['base-text']};
    }

    span {
      font-size: 1rem;
      line-height: 130%;
      color: ${mixins.colors['base-text']};
    }

    &.total {
      p {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${mixins.colors['base-subtitle']};
        font-weight: 800;
      }

      span {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${mixins.colors['base-subtitle']};
        font-weight: 800;
      }
    }
  }

  button {
      margin-top: 0.6875rem;
      background-color: ${mixins.colors.yellow};
      width: 100%;
      padding: 0.75rem;
      color: #fff;
      line-height: 160%;
      font-size: 0.875rem;
      text-transform: uppercase;
      border: 0;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background-color: ${mixins.colors['yellow-dark']};
      }
    }
`