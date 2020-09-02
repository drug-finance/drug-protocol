import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href="https://github.com/drug-finance/drug-protocol">Github</StyledLink>
      <StyledLink href="https://twitter.com/FinanceDrug">Twitter</StyledLink>
      <StyledLink href="https://t.me/drugging">Telegram</StyledLink>
      <StyledLink href="https://www.coingecko.com/en/coins/drug-finance">Coingecko</StyledLink>
      <StyledLink href="https://app.uniswap.org/#/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x38c4102d11893351ced7ef187fcf43d33eb1abe6">Uniswap</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`

export default Nav
