import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const Hero = styled.div`
  background-image: url('/images/hero-bg.svg');
  background-repeat: repeat-x;
  background-position: center;
  width: 100%;
  object-fit: cover;
  padding: 5.75rem 0;
`

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  gap: 3.5rem;
`


export const HeroContentRight = styled.div`
  max-width: 36.75rem;
  width: 100%;

  h1 {
    font-family: ${mixins.fonts.baloo};
    font-size: 3rem;
    font-weight: 700;
    line-height: 130%;
    color: ${mixins.colors['base-title']};
    margin: 0 0 1rem 0;
  }

  p {
    font-family: ${mixins.colors['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.25rem;
    margin-top: 4.125rem;

    li {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      span {
        font-family: ${mixins.colors['base-text']};
        font-size: 1rem;
        line-height: 130%;
      }

      > div {
        color: #fff;
        background-color: ${mixins.colors['yellow-dark']};
        height: 32px;
        width: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.yellow {
          background-color: ${mixins.colors['yellow']};
        }

        &.base-text {
          background-color: ${mixins.colors['base-text']};
        }

        &.purple {
          background-color: ${mixins.colors['purple']};
        }
      }
    }
  }
`


export const CoffeeListWrap = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    line-height: 130%;
    color: ${mixins.colors['base-subtitle']};
    font-family: ${mixins.fonts.baloo};
    margin: 2rem 0 2.125rem 0;
  }
`

export const CoffeeList = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: start;
  align-items: stretch;
`
