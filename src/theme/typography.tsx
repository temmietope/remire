import styled from 'styled-components'
import { breakpoints } from './breakpoints'

export const H1 = styled.h1`
  font-size: 2.2rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: #33272a;
  @media ${breakpoints.tablet} {
    font-size: 2rem;
  }
  @media ${breakpoints.mobile} {
    font-size: 1.8rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.7rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: #33272a;
  margin: 0;
  @media ${breakpoints.tablet} {
    font-size: 1.5rem;
  }
  @media ${breakpoints.mobile} {
    font-size: 1.2rem;
  }
`

export const H3 = styled.h3`
  font-size: 1.4rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: #33272a;
  margin: 0;
  @media ${breakpoints.tablet} {
    font-size: 1.25rem;
  }
  @media ${breakpoints.mobile} {
    font-size: 1.05rem;
  }
`

export const P = styled.p`
  font-size: 1rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #594a4e;
  display: inline;
  cursor: pointer;
  text-transform: ${(props) => props.transform && props.transform};
  margin: 0 5px 5px 0;
  @media ${breakpoints.tablet} {
    font-size: 0.8rem;
  }
`
