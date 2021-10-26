import React from "react";
import { connect, styled } from "frontity";

const Hero = () => {
  return <Container>Hero image</Container>;
};

export default connect(Hero);

const Container = styled.div`
  height: 450px;
  width: 100vw;
  background-color: #a7c0cf;
`;
