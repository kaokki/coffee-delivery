import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const CarrinhoContainer = styled.div`
  background-color: ${mixins.colors['yellow-light']};
  position: relative;
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: ${mixins.colors['yellow-dark']};

  span {
    background-color: ${mixins.colors['yellow-dark']};
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    color: #fff;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
  }
`