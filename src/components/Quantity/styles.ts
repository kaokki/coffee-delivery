import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const Container = styled.div`
  background-color: ${mixins.colors['base-button']};
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  padding: 0 8px;
  gap: 4px;

  span {
    color: ${mixins.colors['base-title']};
    font-size: 1rem;
    width: 27px;
    text-align: center;
  }

  button {
    color: ${mixins.colors.purple};
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: ${mixins.colors['purple-dark']};
    }
  }
`