import styled, { css } from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body.no-scroll{
  overflow-y: hidden;
}
  `;

export const LayoutWrapper = styled.div`
  background: #faeee7;
  min-height: 100vh;
  width: 100%;
  position: relative;
  --navHeight: 4rem;
  --border-radius: 10px;
`;

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
`;

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
`;

export const Body = styled.div`
  width: 100%;
  padding: 2rem;
  height: 100%;
`;

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export const RootCard = styled.div`
  height: 15rem;
  margin: 4%;
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
    content: "";
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
`;

export const ResourcesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  top: var(--navHeight);
  /* top: 0; */
  left: 0;
  transition: all 0.3s;
  opacity: ${(props) => (props.display ? "1" : "0")};
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h1 {
    text-transform: uppercase;
    position: absolute;
    top:1rem;
    font-family: 'Poller One', cursive;
  }
  button.close_btn {
    position: absolute;
    top: 1rem;
    right: 5%;
    font-size: 2rem;
    color: #ff8ba7;
    padding: 0.5% 1%;
    border: none;
    outline: none;
    background-color: #fffffe;
    box-sizing: border-box;
    border-radius: var(--border-radius);
  }
`;

export const ResourcesDiv = styled.div`
  width: 30%;
  /* height: 80%; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 2rem; */
  height: fit-content;
  overflow-y: hidden;
  overflow-x: auto;
  border-radius: var(--border-radius);
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 100% 0%;
  box-sizing: border-box;
  /* justify-content: center;
  align-items: center; */
`;

export const ResourceCard = styled.div`
  min-width: 100% !important;
  height: 10rem;
  background-color: #fffffe;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: var(--border-radius);
  margin: 0 2%;
  padding: 4%;
  box-sizing: border-box;
  transition: all 500ms ease-in-out;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  scroll-snap-align: start;
  h3 {
    text-transform: uppercase;
  }
  :hover {
    /* box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.4); */
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card__details {
    opacity: 0;
    visibility: hidden;
    height: 0;
    li {
      display: flex;
      p {
        margin-left: 1rem;
      }
    }
  }
  ${(props) =>
    props.showMore &&
    css`
      height: 25rem;
      .card__details {
        opacity: 1;
        visibility: visible;
        height: 100%;
        overflow: auto;
        margin: 2rem 0;
        scroll-snap-type: y mandatory;
      }
    `}
`;

export const Button = styled.button`
  outline: none;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  transition: all 500ms ease-in-out;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  background-color: #ff8ba7;
  border-radius: var(--border-radius);
  cursor: pointer;
  border: none;
  color: #fffffe;
`;
