import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 5rem auto 0;

  h1 {
    margin-bottom: 0.25rem;
    color: ${mixins.colors['yellow-dark']};
    font-family: ${mixins.fonts.baloo};
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${mixins.colors['base-subtitle']};
  }

  > div {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-width: 30.75rem;
      width: 100%;
    }
  }
`

export const OrderSummary = styled.div`
  border: 1px solid ${mixins.colors.purple};
  border-radius: 0.375rem 2.25rem 2.25rem 0.375rem;
  padding: 2.5rem;
  width: 32.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    > span {
      color: #fff;
      border-radius: 50%;
      height: 2rem;
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &.purple {
        background-color: ${mixins.colors.purple};
      }

      &.yellow {
        background-color: ${mixins.colors.yellow};
      }

      &.yellow-dark {
        background-color: ${mixins.colors['yellow-dark']};
      }
    }

    p {
      flex: 1;
      color: ${mixins.colors['base-text']};
      font-size: 1rem;
      line-height: 130%;

      strong {
        font-weight: 700;
      }

      > span {
        display: block;
      }
    }
  }
`