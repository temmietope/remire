import styled, { css } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './breakpoints'

export const GlobalStyle = createGlobalStyle`
body { 
  height: inherit;
  width: 100%;
  height:100%;
  box-sizing: border-box;
  margin: 0 auto;
}
body.no-scroll { 
  overflow-y: hidden;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`

export const LayoutWrapper = styled.div`
  background: #faeee7;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  --navHeight: 4rem;
  --border-radius: 10px;
`

export const Main = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height:inherit
  scroll-behavior: smooth;
  box-sizing: border-box;
`

export const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navHeight);
  transition: all 0.3s;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.97);
  z-index: 999;
  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    background-color: rgba(255, 255, 255, 0.85);
    -webkit-backdrop-filter: blur(10px);
    -o-backdrop-filter: blur(10px);
    -moz-backdrop-filter: blur(10px);

    backdrop-filter: blur(10px);
  }
`

export const Nav = styled.div`
  width: 95%;
  height: 90%;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 5rem;
    transition: all 0.3s;
    height: 100%;
    object-fit: contain;
    :hover {
      transform: scale(1.05);
    }
    path {
      fill: #ff8ba7;
    }
  }
  .github {
    width: 2rem;
  }
`

export const Body = styled.div`
  width: 100%;
  padding: 2%;
  height: 100%;
  box-sizing: border-box;
`

export const Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: var(--navHeight);
  left: 0;
  display: grid;
  place-content: center;
  box-sizing: border-box;
  img {
    width: 15rem;
    height: 15rem;
    object-fit: contain;
    padding: 5%;
    box-sizing: border-box;
  }
`

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const RootCard = styled.div`
  height: 15rem;
  margin: 2%;
  flex: 28%;
  border-radius: var(--border-radius);
  background: #fffffe;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  transition: all 0.3s;
  text-align: center;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: relative;
  h2 {
    text-transform: uppercase;
    transition: 0.3s;
  }
  :hover {
    backdrop-filter: blur(10px);
    filter: brightness(0.97);
    h2 {
      transform: scale(1.2);
    }
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background: #fff;
    transition: 0.3s;
    z-index: -1;
  }
  :hover:before {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  :hover:after {
    transform: rotate(5deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  .favorite {
    background: none;
    border: none;
    outline: none;
    transition: all 0.2s;
    :hover {
      transform: scale(1.1);
    }
    position: absolute;
    bottom: 4%;
    right: 4%;
    svg {
      width: 2rem;
      height: 2rem;
      path {
        fill: #594a4e;
      }
    }
    .fav {
      path {
        fill: #ff8ba7;
      }
    }
  }
  @media ${breakpoints.tablet} {
    flex: 45%;
  }
  @media ${breakpoints.mobile} {
    flex: 100%;
    .favorite {
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`

export const ResourcesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  top: var(--navHeight);
  left: 0;
  transition: all 0.3s;
  opacity: ${(props) => (props.display ? '1' : '0')};
  visibility: ${(props) => (props.display ? 'visible' : 'hidden')};
  z-index: ${(props) => (props.display ? '1' : '-2')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h2 {
    text-transform: uppercase;
    position: absolute;
    top: 1rem;
  }
  button.close_btn {
    position: absolute;
    top: 1rem;
    right: 5%;
    z-index: 1;
    color: #33272a;
    padding: 0.5% 1%;
    border: none;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    transition: all 0.2s;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      path {
        fill: #fffffe;
      }
    }
    :hover {
      transform: scale(1.1);
    }
  }
`

export const ResourcesDiv = styled.div`
  width: 37%;
  transition: all 0.3s;
  height: fit-content;
  box-sizing: border-box;
  position: relative;
  .swipe-card,
  .loader__wrapper {
    padding: 12%;
    box-sizing: border-box;
    overflow-y: hidden !important;
  }
  .swipe-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .scroll__btn {
    position: absolute;
    z-index: 2;
    border: none;
    background: none;
    outline: none;
    top: 48%;
    :disabled {
      opacity: 0.3;
      user-select: none;
    }
    svg {
      width: 1.8rem;
      height: 1.8rem;
      path {
        fill: #fffffe;
      }
    }
  }
  .btn__prev {
    left: 1%;
  }
  .btn__next {
    right: 1%;
  }

  ${(props) =>
    props.quickView &&
    css`
      width: 60%;
      overflow-x: hidden !important;
       button.favorite  { 
        i  { 
          font-size: 2rem !important;
        }
      }
      }
    `}
  @media
    ${breakpoints.tablet} {
    width: 50%;
  }
  @media ${breakpoints.mobile} {
    width: 100%;
    .scroll__btn {
      font-size: 1.3rem;
    }
  }
`

export const ResourceCard = styled.div`
  min-width: 100% !important;
  background-color: #fffffe;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  transition: all 500ms ease-in-out;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 15rem;
  position: relative;
  padding: 6%;
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background: #fff;
    transition: 0.3s;
    z-index: -1;
    pointer-events: none;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  :before {
    transform: rotate(10deg);
  }
  :after {
    transform: rotate(5deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  h3 {
    text-transform: uppercase;
  }
  .card__avatar {
    height: 45%;
    transition: all 0.1s;
    opacity: 0.8;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    img,
    svg {
      object-fit: contain;
      width: 90%;
      height: 90%;
      max-width: 100%;
      max-height: 100%;
    }
  }
  button {
    border: none;
    outline: none;
    transition: all 0.2s;
  }

  button.favorite {
    width: fit-content;
    background: none;
    position: absolute;
    right: 5%;
    padding: 0;
    top: 1rem;
    :hover {
      transform: scale(1.1);
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      path {
        fill: #594a4e;
      }
    }
    .fav {
      path {
        fill: #ff8ba7;
      }
    }
  }

  .card__details {
    opacity: 0;
    visibility: hidden;
    height: 0;
    position: relative;
    :before {
      position: absolute;
      content: '';
      top: 0;
      height: 0.2rem;
      left: 0;
      width: 0%;
      background: #ff8ba7;
      transition: width 0.5s;
    }
    li {
      display: flex;
      margin-bottom: 0.2%;
      align-items: center;
      justify-content: flex-start;
      width: fit-content;
      flex-wrap: wrap;
      font-family: 'Nunito', sans-serif;
      h4 {
        position: relative;
        width: fit-content;
        height: 100%;
        padding-right: 0.5rem;
        margin: 0;
        :after {
          position: absolute;
          content: ':';
        }
      }
      h4,
      p {
        font-size: 1rem !important;
      }
      p {
        margin-left: 0.5rem;
        margin-bottom: 0;
      }
    }
  }
  span {
    display: flex;
    flex-wrap: wrap;
    p {
      transition: all 0.1s;
      cursor: pointer;
      padding-right: 0.5rem;
      margin-left: 0.1rem;
      position: relative;
      :after {
        position: absolute;
        content: ',';
        right: 0;
      }
      :hover {
        text-decoration: underline;
        text-decoration-color: #ff8ba7;
        transform: scale(1.05);
      }
    }
  }

  button.back {
    background-color: #fffffe;
    font-size: 1rem;
    color: #ff8ba7;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    position: absolute;
    top: 3rem;
    right: 5%;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }

  ${(props) =>
    props.showMore &&
    css`
      height: 25rem;
      .card__details {
        padding: 3% 0;
        opacity: 1;
        visibility: visible;
        height: 80%;
        overflow: auto;
        margin: 8% 0;
        scroll-snap-type: y mandatory;
        :before {
          width: 60%;
        }
      }
      .card__avatar {
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0.1;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          flex-shrink: 0;
          min-width: 90%;
          min-height: 90%;
        }
      }
    `}
  ${(props) =>
    props.component === 'loader' &&
    css`
      .card__avatar {
        opacity: 0.3;
        height: 100%;
      }
    `}
    @media ${breakpoints.tablet} {
    height: 20rem;
    ${(props) =>
      props.showMore &&
      css`
        height: 30rem;
      `}
  }
`

export const Button = styled.button`
  outline: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 0.7rem;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #ff8ba7;
  border-radius: var(--border-radius);
  cursor: pointer;
  border: none;
  color: #fffffe;
`
