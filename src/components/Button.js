import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--lightBlue);
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};

  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  display: inline-block;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBLue);
    color: ${(props) => (props.cart ? "var(--mainWhite)" : "var(--mainWhite)")};
  }
  &:focus {
    outline: none;
  }
`;

export const BackButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.back ? "var(--mainRed)" : "var(--lightBlue)"};
  color: var(--lightBlue);
  color: ${(props) => (props.back ? "var(--mainRed)" : "var(--lightBlue)")};

  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${(props) =>
      props.back ? "var(--mainRed)" : "var(--lightBlue)"};
    color: var(--mainBLue);
    color: ${(props) => (props.back ? "var(--mainWhite)" : "var(--mainWhite)")};
  }
  &:focus {
    outline: none;
  }
`;
