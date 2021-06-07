import React from "react";
import styled from "styled-components";

class Demo extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Hello>
          <h1>WELCOME TO Careator</h1>
        </Hello>
      </div>
    );
  }
}
export default Demo;

const Hello = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
  padding: 15% 1%;
  box-shadow: inset 2px 4px 4px 3px #dfdfeb,
    4px 2px 4px 10px rgba(0, 212, 255, 1);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  h1 {
    font-size: 72px;
    color: white;
    text-shadow: inset 20px 2px 10px 3px #d9ecef;
  }
`;
