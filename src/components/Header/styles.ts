import styled from 'styled-components'
import { mixins } from '../../assets/styles/mixins'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`

export const DivRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const Localizacao = styled.div`
  background-color: ${mixins.colors['purple-light']};
  padding: 0 0.5rem;
  color: ${mixins.colors['purple']};
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  border-radius: 6px;
  cursor: default;
  height: 38px;
`