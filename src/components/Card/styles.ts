import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const CardDiv = styled.div`
  background-color: ${mixins.colors['base-card']};
  width: 16rem;
  padding: 0 1.1875rem 1.25rem 1.1875rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  margin-top: 20px;

  > img {
    margin: -20px auto 12px auto;
    display: block;
  }

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 1rem;

    > span {
      background-color: ${mixins.colors['yellow-light']};
      color: ${mixins.colors['yellow-dark']};
      line-height: 130%;
      font-size: 0.625rem;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      font-weight: 700;
    }
  }

  h3 {
    margin: 0;
    font-family: ${mixins.fonts.baloo};
    color: ${mixins.colors['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
    color: ${mixins.colors['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: 33px;
    text-align: center;
  }

  .coffee-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1875rem 0 0.1875rem;

    .price {
      color: ${mixins.colors['base-text']};
      font-size: 0.875rem;
      line-height: 130%;
      display: flex;
      justify-content: center;
      align-items: end;
      gap: 0.25rem;

      strong {
        font-weight: 800;
        font-family: ${mixins.fonts.baloo};
        font-size: 1.5rem;
      }
    }

    .coffee-input {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
    }
  }
`

export const BtnCart = styled.button`
  background-color: ${mixins.colors['purple-dark']};
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 6px;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

    &:not(:disabled):hover {
      background-color: ${mixins.colors['purple']};
    }

    &:disabled{
      opacity: 0.5;
      cursor: not-allowed;
    }
`