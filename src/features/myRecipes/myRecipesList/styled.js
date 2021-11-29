import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  text-shadow: 2px 2px 3px black;
  color: teal;
  font-weight: bold;
  background-color: whitesmoke;
  margin-bottom: 0;
  padding: 50px 30px 25px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 40px;
  }
`;
export const List = styled.ul`
  margin-top: 0;
  background-color: whitesmoke;
  background-position: fixed;
  list-style: none;
  padding: 25px 30px 50px;
  height: 100vh;
  overflow: scroll;
  align-items: flex-start;
`;
export const Name = styled.p`
  position: static;
  font-size: 35px;
  align-self: end;
  font-weight: bold;
  padding-left: 15px;
  margin: 10px;
  width: fit-content;
  transition: 0.5s ease;
  padding-bottom: 2px;
  background-image: linear-gradient(teal, teal);
  background-position: left bottom;
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 30px;
  }
`;
export const Item = styled.li`
  border: 2px solid black;
  box-shadow: 0px 0px 5px teal;
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.5s;
  position: static;
  margin-bottom: 20px;
  &:hover {
    border: 4px solid teal;
    transform: scale(1.005);
  }
  &:hover ${Name} {
    background-size: 100% 3px;
    font-size: 35px;
  }
`;
export const Options = styled.div`
  display: flex;
  justify-self: end;
  align-items: end;
  margin: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  padding: 0px 10px;
  transition: 0.5s;
  position: static;
  &:hover {
    color: teal;
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    &:hover {
      font-size: 20px;
    }
  }
`;
