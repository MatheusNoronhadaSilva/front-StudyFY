import styled from "styled-components";

export const ToggleSwitch = styled.div`
  position: relative;
  width: 15%;
  height: 45%;
  background-color: ${(props) => (props.active ? "#fee101" : "#d9d9d9")};
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ToggleCircle = styled.div`
  position: absolute;
  width: 50%;
  height: 140%;
  background-color: white;
  border: ${(props) => (props.active ? "solid 1px #fee101" : "solid 1px #d9d9d9")};
  box-shadow: ${(props) => (props.active ? "0 0.5vh 0 0 #fee101" : "0 0.5vh 0 0 #d9d9d9")};
  border-radius: 50%;
  top: -25%;
  left: ${(props) => (props.active ? "55%" : "0px")};
  transition: left 0.3s;
`;

// E9CE03