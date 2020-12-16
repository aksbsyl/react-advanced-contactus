import styled from "styled-components";
// import img from "./neutrolinelogo.png";
import img from "./counselling.jpg";

export const Container = styled.div`
  height: 300px;
  width: 100%;
  padding: 50px 80px;
  background: radial-gradient(
    circle,
    rgba(255, 156, 0, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  // rgba(92, 39, 251, 1) 0%,
  // rgba(112, 71, 247, 1) 100%
  @media (max-width: 3000px) {
    padding: 10px 10px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 5px 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 3000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  @media (max-width: 3000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-family: "Algerian" !important;
  color: #3370ff;
  text-align: center;
  font-weight: bold;
  &:hover {
    color: #ff3508;
    transition: 200ms ease-in;
  }
`;

export const Link = styled.p`
  color: #000;
  margin-left: 15%;
  margin-right: 15%;
  font-size: 17px;
  font-family: "Nunito Sans" !important;
  text-align: jusify;
  text-decoration: none;
  &:hover {
    transition: 200ms ease-in;
    background-color: hsla(0, 70%, 100%, 0.8);
  }
`;
export const Header = styled.div`
  border: 1px solid white;
  background-image: url(${img});
  position: relative;
  width: 100%;
  height: 500px;
  margin-block-start: 0em;
  margin-left: 0em;
  &:hover {
    border: 0.5px solid #87ceeb;
  }
`;
