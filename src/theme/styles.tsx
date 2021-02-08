import styled, { css } from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
  height: inherit;
}
body.no-scroll{
  overflow-y: hidden;
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
  height: ${(props) => (props.loading ? '100vh' : 'inherit')};
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
    height: 100%;
    path {
      fill: #ff8ba7;
    }
  }
`

export const Body = styled.div`
  width: 100%;
  padding: 2rem;
  height: 100%;
`

export const Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: var(--navHeight);
  left: 0;
  display: grid;
  place-content: center;
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
  padding: 3%;
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
    filter: brightness(0.96);
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
    border-radius: 4px;
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
  button {
    position: absolute;
    bottom: 4%;
    right: 4%;
    i {
      font-size: 2rem;
    }
  }
  .favorite {
    background: none;
    border: none;
    outline: none;
    transition: all 0.2s;
    :hover {
      transform: scale(1.1);
    }
    i {
      color: #594a4e;
      /* color: ${(props) => (props.liked ? 'red' : '#594a4e')}; */
    }
    i.fas {
      color: #ff8ba7;
    }
  }
  ${(props) =>
    props.liked &&
    css`
      background: #ff8ba7;
    `}
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h1 {
    text-transform: uppercase;
    position: absolute;
    top: 1rem;
    /* font-family: 'Poller One', cursive; */
  }
  button.close_btn {
    position: absolute;
    top: 1rem;
    right: 5%;
    font-size: 2rem;
    color: #33272a;
    padding: 0.5% 1%;
    border: none;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: var(--border-radius);
  }
`

export const ResourcesDiv = styled.div`
  width: 30%;
  transition: all 0.3s;
  height: fit-content;
  /* display: flex;
  justify-content: space-between;
  transition: all 500ms ease-in-out;
  align-items: flex-start;
  border-radius: var(--border-radius);
  height: fit-content;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 100% 0%;
  box-sizing: border-box; */
  .swipe-card {
    padding: 10%;
    overflow-y: hidden !important;
  }
  ${(props) =>
    props.quickView &&
    css`
      width: 60%;
      overflow-x: hidden !important;
       button.favorite {
        i {
          font-size: 2rem !important;
        }
      }
      }
    `}
`

export const ResourceCard = styled.div`
  min-width: 100% !important;
  height: 15rem;
  background-color: #fffffe;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: var(--border-radius);
  padding: 6%;
  box-sizing: border-box;
  transition: all 500ms ease-in-out;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  scroll-snap-align: start;
  position: relative;
  h3 {
    text-transform: uppercase;
  }
  .card__avatar {
    height: 30%;
    transition: all 0.1s;
    img,
    svg {
      object-fit: contain;
      width: 100%;
      height: 100%;
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
    border-radius: 4px;
    background: #fff;
    transition: 0.3s;
    z-index: -1;
  }
  :before {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  :after {
    transform: rotate(5deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  button.favorite {
    width: fit-content;
    background: none;
    border: none;
    outline: none;
    transition: all 0.2s;
    position: absolute;
    right: 5%;
    :hover {
      transform: scale(1.1);
    }
    i {
      color: #594a4e;
      font-size: 1rem;
      /* color: ${(props) => (props.liked ? 'red' : '#594a4e')}; */
    }
    i.fas {
      color: #ff8ba7;
    }
  }

  .card__details {
    opacity: 0;
    visibility: hidden;
    height: 0;
    position: relative;
    transition: all 0.5s;
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
      flex-wrap: wrap;
      h4 {
        position: relative;
        padding-right: 0.5rem;
        margin-bottom: 0;
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
  .array__list {
    display: flex;
    flex-wrap: wrap;
    div {
      margin-left: 0.5rem;
      padding: 0;
    }
    p {
      transition: all 0.1s;
      cursor: pointer;
      width: 100%;
      /* padding-right: 0.2rem; */
      margin-left: 0.1rem;
      /* margin: 0; */
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
    border: none;
    outline: none;
    font-size: 0.8rem;
    color: #ff8ba7;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    position: absolute;
    top: 1rem;
    right: 5%;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    /* 
    font-size: 2rem;
    
    padding: 0.5% 1%;
   
    */
  }

  ${(props) =>
    props.showMore &&
    css`
      height: 23rem;
      .card__details {
        padding: 3% 0;
        opacity: 1;
        visibility: visible;
        height: 100%;
        overflow: auto;
        margin: 2rem 0;
        scroll-snap-type: y mandatory;
        :before {
          width: 60%;
        }
      }
      .card__avatar {
        height: 100%;
        position: absolute;
        opacity: 0.1;
        pointer-events: none;
      }
    `}
  ${(props) =>
    props.component === 'loader' &&
    css`
      position: relative;
      .card__avatar {
        height: 100%;
        position: absolute;
        opacity: 0.3;
        pointer-events: none;
        display: grid;
        place-content: center;
        img,
        svg {
          object-fit: contain;
          width: 100%;
          height: 80%;
        }
      }
    `}
`

export const Button = styled.button`
  outline: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  transition: all 500ms ease-in-out;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  background-color: #ff8ba7;
  border-radius: var(--border-radius);
  cursor: pointer;
  border: none;
  color: #fffffe;
`
